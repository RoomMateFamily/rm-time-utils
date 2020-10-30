# RoomMate Time Utils

This package want to provide some utility methods to handle time in RoomMate codebase.
It has also been the first package to be published on npm @roommate and helped me to understand how package publishing works.
There are still things I need to discover.

  - Integrate this package on package.json as dependency
  - Setup this package for CI

[Visit RoomMate here][roommate-website]

## Technologies
Since this will be a small package, I'm using this as a test repository for integration and best practises.
These are not limited to:
  - Testing with JEST
  - Format and linting with prettier and tslint
  - Npm versioning and publishing


## Install
Simply type
```sh
$ npm install
```

## Run
Since it's an utility package, there's nothing to run :)

## Versioning
A nice feature of NPM thanks to package.json is to deploy a new version on github when needed.
```sh
$ npm version versionnumber
```
This will run the test, the linter, will update package.json and will publish the commit on github. The presence of git push --tags on the script will publish a release with the package version as a tag.

## Deploy
Be sure to be logged in npm to publish in our organization
```sh
$ npm adduser
```
Then publish the package with
```sh
$ npm publish
```


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [roommate-website]: <https://www.the-roommate.comr>
