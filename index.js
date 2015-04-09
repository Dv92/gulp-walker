var through   = require('through2');
var gutil     = require('gulp-util');
var extend    = require('extend');
var vinylFile = require('vinyl-file');

var StringDecoder = require('string_decoder').StringDecoder;
var Analyzer      = require('./Analyzer');
var Logger        = require('./Logger');

var analyzer = null;

module.exports = function(config) {
	config = extend(true, {
		stopperOnFirstRun: true,
		debug: false
	}, config);

	Logger.level = config.debug === false ? Logger.WARN : config.debug;

	if (!analyzer) {
		analyzer = new Analyzer(config);
	}

	return through.obj(function(file, enc, cb) {
		var decoder = new StringDecoder(enc);
		var content = decoder.write(file.contents);
		var fileUnprocessed = analyzer.isUnprocessedFile(file.path);

		var dependencies = analyzer.resolveDependencies(content, file.path);

		if (!fileUnprocessed) {
			Logger.debug("Pushing dependencies for", file.path, dependencies);
			for (var i = 0; i < dependencies.length; i++) {
				var dependency = dependencies[i];
				var dependencyFile = vinylFile.readSync(dependency, {
					cwd: file.cwd,
					base: file.base
				});

				this.push(dependencyFile);
			}
		}

		if (!(fileUnprocessed && config.stopperOnFirstRun)) {
			this.push(file);
		} else {
			Logger.debug("Stopped file from going further down the stream.\n"+
				"This happened because this was the first time the file was processed.\n"+
				"If this is not the desired behavior set the 'stopperOnFirstRun' option to false");
		}

		cb();
	});
};
