<a align="center" href="https://milligram.io"><img width="100%" src="https://milligram.io/images/thumbnail.png" alt="Milligram - A minimalist CSS framework."></a>

> A minimalist CSS framework.

[![Travis Status](https://travis-ci.org/milligram/milligram.svg?branch=master)](https://travis-ci.org/milligram/milligram?branch=master)
[![AppVeyor Status](https://ci.appveyor.com/api/projects/status/xcm8meymwerq0r82?svg=true)](https://ci.appveyor.com/project/cjpatoilo/milligram)
[![Codacy Status](https://img.shields.io/codacy/grade/848fb4bd6902434fab0bcfb5461284fe/master.svg)](https://www.codacy.com/app/milligram/milligram/dashboard)
[![Dependencies Status](https://david-dm.org/milligram/milligram.svg)](https://david-dm.org/milligram/milligram)
[![Version Status](https://badge.fury.io/js/milligram.svg)](https://www.npmjs.com/package/milligram)
[![Download Status](https://img.shields.io/npm/dt/milligram.svg)](https://www.npmjs.com/package/milligram)
[![Gitter Chat](https://img.shields.io/badge/gitter-join_the_chat-4cc61e.svg)](https://gitter.im/milligram/milligram)
[![Setup Automated](https://img.shields.io/badge/setup-automated-blue?logo=gitpod)](https://gitpod.io/from-referrer/)

## Why it's awesome

Milligram provides a minimal setup of styles for a fast and clean starting point. Just it! **Only 2kb gzipped!** It's not about a UI framework. Specially designed for better performance and higher productivity with fewer properties to reset resulting in cleaner code. Hope you enjoy!

## Download

**Install with Bower**

```sh
$ bower install milligram
```

**Install with npm**

```sh
$ npm install milligram
```

**Install with Yarn**

```sh
$ yarn add milligram
```

## Usage

### Why use a package manager?

While Milligram can be used via CDN, installing via npm, Yarn, or Bower provides several advantages:

- **Offline Development**: Work without an internet connection
- **Version Control**: Pin specific versions for consistent builds
- **Bundling**: Include Milligram in your build process for optimized production assets
- **Customization**: Access to SASS source files for theme customization and variable overrides
- **Better Performance**: Bundle Milligram with your own CSS to reduce HTTP requests

### Using the Compiled CSS

After installing via npm or Yarn, you can import the compiled CSS file directly:

**Using in HTML:**

```html
<link rel="stylesheet" href="node_modules/milligram/dist/milligram.css">
```

**Importing in CSS:**

```css
@import "milligram/dist/milligram.css";
```

**Importing in JavaScript (for bundlers like webpack, parcel, etc.):**

```javascript
import "milligram/dist/milligram.css";
// or
require("milligram/dist/milligram.css");
```

### Customizing with SASS

For advanced customization, you can import the SASS source files directly. This allows you to override variables and customize Milligram's styles before compilation.

**In your SASS file:**

```sass
// Import Milligram SASS files
@import "milligram/src/milligram"

// Or import individual modules
@import "milligram/src/_Color"
@import "milligram/src/_Base"
@import "milligram/src/_Typography"
// ... etc
```

**Using with ClojureScript/shadow-cljs:**

In your `shadow-cljs.edn` or build configuration, ensure your CSS bundler (like `shadow-cljs` CSS processing or `parcel`/`webpack`) can resolve `node_modules`. Then in your CSS:

```css
@import "milligram/dist/milligram.css";
```

Or if using SASS preprocessing in your ClojureScript project:

```sass
@import "milligram/src/milligram"
```

### CDN Usage

For quick prototyping or when you don't need customization, you can use the CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/milligram@1.4.1/dist/milligram.min.css">
```

Note: CDN links are convenient but don't allow for customization and require an internet connection.

## Table of Contents

- [Getting Started](https://milligram.io/#getting-started)
- [Typography](https://milligram.io/#typography)
- [Blockquotes](https://milligram.io/#blockquotes)
- [Buttons](https://milligram.io/#buttons)
- [Lists](https://milligram.io/#lists)
- [Forms](https://milligram.io/#forms)
- [Tables](https://milligram.io/#tables)
- [Grids](https://milligram.io/#grids)
- [Code](https://milligram.io/#code)
- [Utilities](https://milligram.io/#utilities)
- [Tips](https://milligram.io/#tips)
- [Browser Support](https://milligram.io/#browser-support)
- [Examples](https://milligram.io/#examples)

## Contributing

Want to contribute? Follow these [recommendations](https://github.com/milligram/milligram/contribute).

## License

Designed with ♥ by [CJ Patoilo](https://twitter.com/cjpatoilo). Licensed under the [MIT License](https://cjpatoilo.com/license).
