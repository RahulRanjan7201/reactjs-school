## What is NPM 
# NPM is package manager. It is also software lib (registry). It is free to use. 
## What is `Parcel/Webpack`? Why do we need it?
# Used to bundle the app. For hot reloading . Used for 
    * hot reloading 
    * Relible caching 
    * Automatic Production optimazation 
## What is `.parcel-cache`
   # it is space where the above process happens 
   # stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

## What is `npx` ?
# A package can be executable without installing the package. It is an npm package runner so if any packages aren’t already installed it will install them automatically.
## What is difference between `dependencies` vs `devDependencies`
# A dependency is a library that a project needs to function effectively.
# DevDependencies are the packages a developer needs during development. 
## What is Tree Shaking?
# Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.
# It relies on the import and export statements to detect if code modules are exported and imported for use between JavaScript files.

## What is Hot Module Replacement?
# Parcel fully reloads the page, but in some cases it may perform Hot Module Replacement (HMR). HMR improves the development experience by updating modules in the browser at runtime without needing a whole page refresh. This means that application state can be retained as you change small things in your code.

## List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
# ======
## What is `.gitignore`? What should we add and not add into it?
# .gitignore is file store the file or directory which should not be tracked by git. We should add only the stuffs which can be build on server. Like node_modules , dist 
# A gitignore file specifies intentionally untracked files that Git should ignore. Files already tracked by Git are not affected; see the NOTES below for details.

# Each line in a gitignore file specifies a pattern. When deciding whether to ignore a path, Git normally checks gitignore patterns from multiple sources, with the following order of precedence, from highest to lowest (within one level of precedence, the last matching pattern decides the outcome):
# The types of files you should consider adding to a .gitignore file are any files that do not need to get committed.

# You may not want to commit them for security reasons or because they are local to you and therefore unnecessary for other developers working on the same project as you.

## What is the difference between `package.json` and `package-lock.json`
# package.json - It contains basic information about the project.
# package-lock.json - It describes the exact tree that was generated to allow subsequent installs to have the identical tree.
# package.json - It is mandatory for every project. 
# package-lock.json - It is automatically generated for those operations where npm modifies either node_modules tree or package.json. It contains the name, dependencies, and locked version of the project. 

## - Why should I not modify `package-lock.json`?
# It is a generated file and is not designed to be manually edited. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency. You should commit package-lock. json to your code repository

## What is `node_modules` ?
# The node_modules folder is used to save all downloaded packages from npm in your computer for the JavaScript project that you have. 

## What is the `dist` folder?
# The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.

## What is `browserlists`
# The config to share target browsers and Node.js versions between different front-end tools. 

