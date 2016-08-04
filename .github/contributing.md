# Contributing

We would love for you to contribute to Milligram and help us make this even better! Start reading this document to see it is not difficult as you might have imagined.


## Table of Contents

- [Open an Issue](#open-an-issue)
- [Submit a Pull Request](#submit-a-pull-request)
- [Building](#building)
- [Style Guide](#style-guide)
- [Test](#test)
- [Code of Conduct](#code-of-conduct)
- [License](#license)


## Open an Issue

[Open an Issue](https://github.com/milligram/milligram/issues/new) to report any problems or improvements. When necessary, use [Codepen](http://codepen.io/) to show the problem. Be sure to include some description to explain the problem.


## Submit a Pull Request

To submit a new feature, make sure that changes are done to the source code. [Follow our style guide](#style-guide) and do not forget the tests and attach the link [Codepen](http://codepen.io/) along with the description.

Try to solve a problem for each pull request, this increases the chances of acceptance. When in doubt, open a [new issue](#open-an-issue) so we can answer you. Look existing issues for ideas or to see if a similar issue has already been submitted.

1. Fork the Github repo: `git clone https://github.com/milligram/milligram.git`
1. Create a new branch: `git checkout -b issuenumber-feature-name`
1. Commit your changes: `git commit -m 'issuenumber-feature-name'`
1. Push to the branch: `git push origin my-feature-name`
1. Submit a pull request!

*Note: For issues relating to the site, please use the [milligram.github.io](https://github.com/milligram/milligram.github.io)*


## Building

First install [Node.js](https://nodejs.org/en/download/) for the build process. Now install all the dependencies, run `npm install` from the project directory. Once you have the dependencies installed, run `npm start`. This will run the build task which compiles the Sass files into Milligram.css file in the expanded and compressed version.


## Style Guide

Milligram use [Sass](http://sass-lang.com/) to give super powers to CSS. Look at how the code is being maintained, we must always be consistent. We try to follow best practices as much as possible. In addition, here are some tips you should follow:

- Properties and selectors are sorted in alphabetical order
- Always use tab to indentation, no spaces
- Always use single quote, i.e. `content: ''`
- Quote attribute values in selectors, i.e. `input[type='checkbox']`
- Avoid specifying units for zero-values, i.e. `margin: 0`
- Use `rem` unit instead of `px`
- Use lowercase and shorthand hex values, i.e. `#fff`
- Use one discrete selector per line in multi-selector rulesets
- Include a single space after colon and after each comma
- Separate each ruleset by a blank line
- Don't use prefixes, there is a task to generate this automatically

```sass
.selector-a,
.selector-b,
.selector-c,
.selector-d[type='text']
	box-sizing: border-box
	color: #333
	content: ''
	display: inline-block
	font-family: 'Helvetica-Neue', 'Helvetica', 'Arial', sans-serif
	margin-bottom: 0
	margin-left: 5.0rem

	.other-selector-a
		background: #fff

		.other-selector-b
			background: #fff

		&.increasing-the-specificity
			color: #000
```

*Note: This style guide was inspired by [Idiomatic.css](https://github.com/necolas/idiomatic-css). Milligram uses an `.editorconfig` file, which most editors support, to enforce these coding standards.*


## Test

Breaking CSS is easy. Checking every responsive page element is hard. That's why Milligram uses automated visual regression testing for responsive web UI by comparing DOM screenshots at various viewport sizes. To view the comparison run `npm test` after making changes to the source code.


## Code of Conduct

Help us keep Milligram open and inclusive. Please read and follow our thoughts on [Code of Conduct](http://confcodeofconduct.com/).


## License

By contributing your code, you agree to license your contribution under the [MIT license](https://github.com/milligram/milligram#license).
