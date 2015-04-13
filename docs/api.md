## Classes
<dl>
<dt><a href="#Analyzer">Analyzer</a></dt>
<dd></dd>
<dt><a href="#FinderStrategy">FinderStrategy</a></dt>
<dd></dd>
<dt><a href="#RegexFinderStrategy">RegexFinderStrategy</a> ⇐ <code><a href="#FinderStrategy">FinderStrategy</a></code></dt>
<dd></dd>
<dt><a href="#BasicResolverStrategy">BasicResolverStrategy</a> ⇐ <code><a href="#ResolverStrategy">ResolverStrategy</a></code></dt>
<dd></dd>
<dt><a href="#CommonJSResolverStrategy">CommonJSResolverStrategy</a> ⇐ <code><a href="#BasicResolverStrategy">BasicResolverStrategy</a></code></dt>
<dd></dd>
<dt><a href="#ResolverStrategy">ResolverStrategy</a></dt>
<dd></dd>
</dl>
<a name="Analyzer"></a>
## Analyzer
**Kind**: global class  

* [Analyzer](#Analyzer)
  * [new Analyzer(config, state)](#new_Analyzer_new)
  * [.resolveDependencies(content, filePath)](#Analyzer#resolveDependencies) ⇒ <code>Array</code>
  * [.isUnprocessedFile(filePath)](#Analyzer#isUnprocessedFile) ⇒ <code>Boolean</code>
  * [.getDependencies(filePath)](#Analyzer#getDependencies) ⇒ <code>Array</code>
  * [.registerFileBase(The)](#Analyzer#registerFileBase)
  * [.getFileBase(filePath)](#Analyzer#getFileBase) ⇒

<a name="new_Analyzer_new"></a>
### new Analyzer(config, state)
The configuration of the analyzer has the following


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | The configuration of this
| state | <code>AnalyzerState</code> | The state to be used

<a name="Analyzer#resolveDependencies"></a>
### analyzer.resolveDependencies(content, filePath) ⇒ <code>Array</code>
This method is the one performing the analysis:

**Kind**: instance method of <code>[Analyzer](#Analyzer)</code>  
**Returns**: <code>Array</code> - An array of all the files that should be

| Param | Type | Description |
| --- | --- | --- |
| content | <code>String</code> | The content of the file to be
| filePath | <code>String</code> | The absolute path of the

<a name="Analyzer#isUnprocessedFile"></a>
### analyzer.isUnprocessedFile(filePath) ⇒ <code>Boolean</code>
Checks if the provided file was already processed.

**Kind**: instance method of <code>[Analyzer](#Analyzer)</code>  
**Returns**: <code>Boolean</code> - True if the file was already

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>String</code> | The absolute path

<a name="Analyzer#getDependencies"></a>
### analyzer.getDependencies(filePath) ⇒ <code>Array</code>
Gets a list of the files that should be changed

**Kind**: instance method of <code>[Analyzer](#Analyzer)</code>  
**Returns**: <code>Array</code> - An array of absolute file paths  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>String</code> | The absolute path of the

<a name="Analyzer#registerFileBase"></a>
### analyzer.registerFileBase(The)
Processed files bases must be saved because they

**Kind**: instance method of <code>[Analyzer](#Analyzer)</code>  

| Param | Type | Description |
| --- | --- | --- |
| The | <code>VinylFile</code> | vinyl file from which

<a name="Analyzer#getFileBase"></a>
### analyzer.getFileBase(filePath) ⇒
Gets the base of a file as registered by

**Kind**: instance method of <code>[Analyzer](#Analyzer)</code>  
**Returns**: The base for the provided file or false

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>String</code> | The absolute path of the

<a name="FinderStrategy"></a>
## FinderStrategy
**Kind**: global class  

* [FinderStrategy](#FinderStrategy)
  * [new FinderStrategy(config)](#new_FinderStrategy_new)
  * _instance_
    * [.find(content, filePath)](#FinderStrategy#find) ⇒ <code>Array</code>
    * [.shouldIgnore(dependency)](#FinderStrategy#shouldIgnore) ⇒ <code>Boolean</code>
  * _static_
    * [.addFinder(name, finderClass)](#FinderStrategy.addFinder)
    * [.create(name, config)](#FinderStrategy.create) ⇒ <code>Object</code>

<a name="new_FinderStrategy_new"></a>
### new FinderStrategy(config)
By default finders accept the following


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | The configuraton to be used

<a name="FinderStrategy#find"></a>
### finderStrategy.find(content, filePath) ⇒ <code>Array</code>
This method must be overrided with your own logic.

**Kind**: instance method of <code>[FinderStrategy](#FinderStrategy)</code>  
**Returns**: <code>Array</code> - An array of strings representing

| Param | Type | Description |
| --- | --- | --- |
| content | <code>String</code> | The content of the file to be
| filePath | <code>String</code> | The absolute path of the

<a name="FinderStrategy#shouldIgnore"></a>
### finderStrategy.shouldIgnore(dependency) ⇒ <code>Boolean</code>
Checks if a given dependency should be ignored

**Kind**: instance method of <code>[FinderStrategy](#FinderStrategy)</code>  
**Returns**: <code>Boolean</code> - True if the dependency should be ignored

| Param | Type | Description |
| --- | --- | --- |
| dependency | <code>String</code> | The dependency to be

<a name="FinderStrategy.addFinder"></a>
### FinderStrategy.addFinder(name, finderClass)
Register a new finder implementation under

**Kind**: static method of <code>[FinderStrategy](#FinderStrategy)</code>  
**Throws**:

- <code>PluginError</code> If a finder with the given


| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The with which this finder
| finderClass | <code>function</code> | The finder class |

<a name="FinderStrategy.create"></a>
### FinderStrategy.create(name, config) ⇒ <code>Object</code>
Factory method to create a finder

**Kind**: static method of <code>[FinderStrategy](#FinderStrategy)</code>  
**Returns**: <code>Object</code> - A new instance of the requested
**Throws**:

- <code>PluginError</code> If no finder with the


| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name of the finder
| config | <code>Object</code> | The configuration

<a name="RegexFinderStrategy"></a>
## RegexFinderStrategy ⇐ <code>[FinderStrategy](#FinderStrategy)</code>
**Extends:** <code>[FinderStrategy](#FinderStrategy)</code>  
**Kind**: global class  

* [RegexFinderStrategy](#RegexFinderStrategy) ⇐ <code>[FinderStrategy](#FinderStrategy)</code>
  * [new RegexFinderStrategy(config)](#new_RegexFinderStrategy_new)
  * [.find(content, filePath)](#RegexFinderStrategy#find) ⇒ <code>Array</code>
  * [.shouldIgnore(dependency)](#FinderStrategy#shouldIgnore) ⇒ <code>Boolean</code>

<a name="new_RegexFinderStrategy_new"></a>
### new RegexFinderStrategy(config)
In addition to the default configuration


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | The configuration

<a name="RegexFinderStrategy#find"></a>
### regexFinderStrategy.find(content, filePath) ⇒ <code>Array</code>
This is the actual method handling the analysis.

**Kind**: instance method of <code>[RegexFinderStrategy](#RegexFinderStrategy)</code>  
**Overrides:** <code>[find](#FinderStrategy#find)</code>  
**Returns**: <code>Array</code> - An array of strings representing

| Param | Type | Description |
| --- | --- | --- |
| content | <code>String</code> | The content of the file to be
| filePath | <code>String</code> | The absolute path of the

<a name="BasicResolverStrategy"></a>
## BasicResolverStrategy ⇐ <code>[ResolverStrategy](#ResolverStrategy)</code>
**Extends:** <code>[ResolverStrategy](#ResolverStrategy)</code>  
**Kind**: global class  

* [BasicResolverStrategy](#BasicResolverStrategy) ⇐ <code>[ResolverStrategy](#ResolverStrategy)</code>
  * [new BasicResolverStrategy(config)](#new_BasicResolverStrategy_new)
  * [.resolve(includerPath, filePath)](#BasicResolverStrategy#resolve) ⇒ <code>String</code>
  * [.guessFileExtension(absPath)](#BasicResolverStrategy#guessFileExtension) ⇒ <code>Array</code>
  * [.guessPaths(filePath, basePath)](#BasicResolverStrategy#guessPaths) ⇒
  * [.guessDirectoryIndex(absDirPath, dirPath)](#BasicResolverStrategy#guessDirectoryIndex) ⇒ <code>String</code>
  * [.getFirstExistingFile(absPaths)](#BasicResolverStrategy#getFirstExistingFile) ⇒ <code>String</code>

<a name="new_BasicResolverStrategy_new"></a>
### new BasicResolverStrategy(config)
This class implements a basic approach to 


| Param | Type | Description |
| --- | --- | --- |
| config | <code>String</code> | The configuration of this

<a name="BasicResolverStrategy#resolve"></a>
### basicResolverStrategy.resolve(includerPath, filePath) ⇒ <code>String</code>
This function tries to guess the right file requested

**Kind**: instance method of <code>[BasicResolverStrategy](#BasicResolverStrategy)</code>  
**Overrides:** <code>[resolve](#ResolverStrategy#resolve)</code>  
**Returns**: <code>String</code> - The absolute path on the filesystem of the included

| Param | Type | Description |
| --- | --- | --- |
| includerPath | <code>String</code> | The absolute path of the file
| filePath | <code>String</code> | The path, as expressed in the include

<a name="BasicResolverStrategy#guessFileExtension"></a>
### basicResolverStrategy.guessFileExtension(absPath) ⇒ <code>Array</code>
Given an absolute path, the method returns

**Kind**: instance method of <code>[BasicResolverStrategy](#BasicResolverStrategy)</code>  
**Returns**: <code>Array</code> - An array of possible file paths  

| Param | Type | Description |
| --- | --- | --- |
| absPath | <code>String</code> | The absolute path to an

<a name="BasicResolverStrategy#guessPaths"></a>
### basicResolverStrategy.guessPaths(filePath, basePath) ⇒
Given a base path and a relative path,

**Kind**: instance method of <code>[BasicResolverStrategy](#BasicResolverStrategy)</code>  
**Returns**: An array of possible paths  

| Param | Type | Description |
| --- | --- | --- |
| filePath | <code>String</code> | The unaltered path to the file |
| basePath | <code>String</code> | The base path that will be used

<a name="BasicResolverStrategy#guessDirectoryIndex"></a>
### basicResolverStrategy.guessDirectoryIndex(absDirPath, dirPath) ⇒ <code>String</code>
Given the absolute path to a directory

**Kind**: instance method of <code>[BasicResolverStrategy](#BasicResolverStrategy)</code>  
**Returns**: <code>String</code> - The relative path to the index file  

| Param | Type | Description |
| --- | --- | --- |
| absDirPath | <code>String</code> | The absolute path to a 
| dirPath | <code>String</code> | The path, as originally provided,

<a name="BasicResolverStrategy#getFirstExistingFile"></a>
### basicResolverStrategy.getFirstExistingFile(absPaths) ⇒ <code>String</code>
Checks a list of absolute paths

**Kind**: instance method of <code>[BasicResolverStrategy](#BasicResolverStrategy)</code>  
**Returns**: <code>String</code> - The absolute path of a file on success, null

| Param | Type | Description |
| --- | --- | --- |
| absPaths | <code>Array</code> | An array of absolute paths to

<a name="CommonJSResolverStrategy"></a>
## CommonJSResolverStrategy ⇐ <code>[BasicResolverStrategy](#BasicResolverStrategy)</code>
**Extends:** <code>[BasicResolverStrategy](#BasicResolverStrategy)</code>  
**Kind**: global class  

* [CommonJSResolverStrategy](#CommonJSResolverStrategy) ⇐ <code>[BasicResolverStrategy](#BasicResolverStrategy)</code>
  * [new CommonJSResolverStrategy(config)](#new_CommonJSResolverStrategy_new)
  * [.guessDirectoryIndex(absDirPath, dirPath)](#CommonJSResolverStrategy#guessDirectoryIndex) ⇒ <code>String</code>
  * [.resolve(includerPath, filePath)](#BasicResolverStrategy#resolve) ⇒ <code>String</code>
  * [.guessFileExtension(absPath)](#BasicResolverStrategy#guessFileExtension) ⇒ <code>Array</code>
  * [.guessPaths(filePath, basePath)](#BasicResolverStrategy#guessPaths) ⇒
  * [.getFirstExistingFile(absPaths)](#BasicResolverStrategy#getFirstExistingFile) ⇒ <code>String</code>

<a name="new_CommonJSResolverStrategy_new"></a>
### new CommonJSResolverStrategy(config)
A resolving strategy that supports CommonJS style


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | A configuration object. |

<a name="CommonJSResolverStrategy#guessDirectoryIndex"></a>
### commonJSResolverStrategy.guessDirectoryIndex(absDirPath, dirPath) ⇒ <code>String</code>
This method tries to locate the index file inside

**Kind**: instance method of <code>[CommonJSResolverStrategy](#CommonJSResolverStrategy)</code>  
**Overrides:** <code>[guessDirectoryIndex](#BasicResolverStrategy#guessDirectoryIndex)</code>  
**Returns**: <code>String</code> - The relative path to the index file  

| Param | Type | Description |
| --- | --- | --- |
| absDirPath | <code>String</code> | The absolute path to a 
| dirPath | <code>String</code> | The path, as originally provided,

<a name="ResolverStrategy"></a>
## ResolverStrategy
**Kind**: global class  

* [ResolverStrategy](#ResolverStrategy)
  * [new ResolverStrategy(config)](#new_ResolverStrategy_new)
  * _instance_
    * [.resolve(includerPath, filePath)](#ResolverStrategy#resolve) ⇒ <code>String</code>
  * _static_
    * [.addResolver(name, resolverClass)](#ResolverStrategy.addResolver)
    * [.create(name, config)](#ResolverStrategy.create) ⇒ <code>Object</code>

<a name="new_ResolverStrategy_new"></a>
### new ResolverStrategy(config)
By default resolvers accept the following


| Param | Type | Description |
| --- | --- | --- |
| config | <code>Object</code> | The configuraton to be used

<a name="ResolverStrategy#resolve"></a>
### resolverStrategy.resolve(includerPath, filePath) ⇒ <code>String</code>
This method must be overrided with your own logic.

**Kind**: instance method of <code>[ResolverStrategy](#ResolverStrategy)</code>  
**Returns**: <code>String</code> - The absolute path on the filesystem of the included

| Param | Type | Description |
| --- | --- | --- |
| includerPath | <code>String</code> | The absolute path of the file
| filePath | <code>String</code> | The path, as expressed in the include

<a name="ResolverStrategy.addResolver"></a>
### ResolverStrategy.addResolver(name, resolverClass)
Register a new resolver implementation under

**Kind**: static method of <code>[ResolverStrategy](#ResolverStrategy)</code>  
**Throws**:

- <code>PluginError</code> If a resolver with the given


| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The with which this resolver
| resolverClass | <code>function</code> | The resolver class |

<a name="ResolverStrategy.create"></a>
### ResolverStrategy.create(name, config) ⇒ <code>Object</code>
Factory method to create a resolver

**Kind**: static method of <code>[ResolverStrategy](#ResolverStrategy)</code>  
**Returns**: <code>Object</code> - A new instance of the requested
**Throws**:

- <code>PluginError</code> If no resolver with the


| Param | Type | Description |
| --- | --- | --- |
| name | <code>String</code> | The name of the resolver
| config | <code>Object</code> | The configuration
