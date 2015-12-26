# [Milligram](http://milligram.github.io)

| A minimalist CSS framework.


## Why it's awesome

Milligram provides a minimal setup of styles for a fast and clean starting point. Just it! **Only 2kb gzipped!** It's not about a UI framework. Specially designed for better performance and higher productivity with fewer properties to reset resulting in cleaner code. Hope you enjoy!


## Getting Started

There are some ways to get started. First, see all download options available below, then choose the most suitable option for your need. Now you should add the main file of the Milligram and the CSS Reset in the header of your project. Just that!


**Install with Bower**

Milligram is available to install using Bower.

```sh
$ bower install milligram
```

**Install with npm**

Milligram is also available to install using npm.

```sh
$ npm install milligram
```

**What's included**

Once downloaded, extract the compressed folder to see the main file in the uncompressed and minified version.

```sh
milligram/
├── .gitignore
├── bower.json
├── component.json
├── demo/
├── dist/
│   ├── milligram.css
│   └── milligram.min.css
├── gruntfile.js
├── license
├── package.json
├── readme.md
├── sass/
└── test/
```

**Usage**

First, use any method mentioned above to download Milligram. Then, just add these tags in the head. Milligram is also available via [CDN](#).

```html
<!-- Google Fonts -->
<link rel="stylesheet" target="blank" href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic">

<!-- CSS Reset -->
<link rel="stylesheet" target="blank" href="https://raw.githubusercontent.com/necolas/normalize.css/master/normalize.css">

<!-- Milligram CSS minified -->
<link rel="stylesheet" href="milligram/dist/milligram.min.css">

<!-- You should properly set the path from the main file. -->
```
See more examples of **getting started** [here](http://milligram.github.io/getting-started.html).


## Typography

CSS3 introduces a few new units, including the `rem` unit, which stands for *"root em"*. The rem unit is relative to the font-size of the root element `<html>`. That means that we can define a single font size on the root element, and define all `rem` units to be a percentage of that. The typography has `font-size` defined in 1.6rem (16px) and `line-height` in 1.6 (24px). Milligram uses the `font-family` [Roboto](https://www.google.com/fonts/specimen/Roboto), created by Christian Robertson, and provided by Google.

```html
<!-- Base font-size and line-height -->
<p>The base type is 1.6rem (16px) over 1.6 line height (24px)</p>

<!-- Other elements to text markup -->
<a>Archor</a>
<em>Emphasis</em>
<small>Small</small>
<strong>Strong</strong>
<u>Underline</u>

<!-- Default Headings -->
<h1>Heading</h1>
<h2>Heading</h2>
<h3>Heading</h3>
<h4>Heading</h4>
<h5>Heading</h5>
<h6>Heading</h6>

<!-- The base font-size is set at 62.5% for having the convenience of sizing rems in a way that is similar to using px. So basically 1.6rem = 16px. -->
````

See more examples of **typography** [here](http://milligram.github.io/typography.html).


## Blockquotes

The Blockquote represents a section that is quoted from another source.

```html
<blockquote>
  <p><em>Yeah!! Milligram is amazing.</em></p>
</blockquote>
```

See more examples of **blockquotes** [here](http://milligram.github.io/blockquotes.html).


## Buttons

The Button, an essential part of any user experience. Buttons come in three basic styles in Milligram: The `<button>` element has flat color by default, whereas .button-outline has a simple outline around, and `.button-clear` is entirely clear.

```html
<!-- Default Button -->
<a class="button" href="#">Default Button</a>

<!-- Outlined Button -->
<button class="button button-outline">Outlined Button</button>

<!-- Clear Button -->
<input class="button button-clear" type="submit" value="Clear Button">

<!-- Easily apply the .button class for button style in the anchor element. -->
```

See more examples of **buttons** [here](http://milligram.github.io/buttons.html).


## Lists

The List is a very versatile and common way to display items. Milligram has three types of lists: The unordered list use `<ol>` element will be marked with a outline circles, the ordered list use `<ul>` element and your items will be marked with numbers, the description list use `<dl>` element and your items will not be marking, only spacings.

```html
<!-- Description list -->
<dl>
  <dt>Description list title 1</dt>
  <dt>Description list title 2</dt>
</dl>

<!-- Unordered list -->
<ul>
  <li>Unordered list item 1</li>
  <li>Unordered list item 2</li>
</ul>

<!-- Ordered list -->
<ol>
  <li>Ordered list item 1</li>
  <li>Ordered list item 2</li>
</ol>

<!-- Easily change any <dl>, <ul> or an <ol> to get clear lists, number lists or outline circles. -->
```

See more examples of **lists** [here](http://milligram.github.io/lists.html).


## Forms

The Form has never been exactly fun, and it can be downright painful on a mobile device with its on-screen keyboard. Milligram help to make this much easier with design focused on the user experience.

```html
<form>
  <fieldset>
    <label for="nameField">Name</label>
    <input type="text" placeholder="CJ Patoilo" id="nameField">
    <label for="commentField">Comment</label>
    <textarea placeholder="Hi CJ …" id="commentField"></textarea>
    <div class="example-send-yourself-copy">
      <input type="checkbox" id="confirmField">
      <label class="label-inline" for="confirmField">Send a copy to yourself</label>
    </div>
    <input class="button-primary" type="submit" value="Send">
  </fieldset>
</form>

<!-- Always wrap checkbox and radio inputs in a label and use a <span class="label-inline"> inside of it -->
```

See more examples of **forms** [here](http://milligram.github.io/forms.html).


## Tables

The Table element represents data in two dimensions or more. We encourage the use of proper formatting with `<thead>` and `<tbody>` to create a `<table>`. The code becomes cleaner without disturbing understanding.

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Height</th>
      <th>Location</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Stephen Curry</td>
      <td>27</td>
      <td>1,91</td>
      <td>Akron, OH</td>
    </tr>
    <tr>
      <td>Klay Thompson</td>
      <td>25</td>
      <td>2,01</td>
      <td>Los Angeles, CA</td>
    </tr>
  </tbody>
</table>

<!-- Prior to the creation of CSS, HTML <table> elements were often used as a method for page layout. This usage has been discouraged since HTML4, and the <table> element should not be used for layout purposes. -->
```

See more examples of **tables** [here](http://milligram.github.io/tables.html).


## Grids

The Grid is a fluid system with a max width of `112.0rem` (1200px), that shrinks with the browser/device at smaller sizes. The max width can be changed with one line of CSS and all columns will resize accordingly. Milligram is different than most because of its use of the **CSS Flexible Box Layout Module standard**. The advantage is the simplicity, and we know that a functional code is very important for maintainability and scalability. Simply add columns you want in a row, and they'll evenly take up the available space. If you want three columns, add three columns, if you want five columns, add five columns. There is no restriction on number of columns, but we advise you to follow a design pattern of grid system. See more tips on best practices in the [tips](http://milligram.github.io/tips.html).

```html
<!-- .container is main centered wrapper -->
<div class="content">

  <div class="row">
    <div class="column">.column</div>
    <div class="column">.column</div>
    <div class="column">.column</div>
    <div class="column">.column</div>
  </div>

  <div class="row">
    <div class="column column">.column</div>
    <div class="column column-50 column-offset-25">.column column-50 column-offset-25</div>
  </div>

</div>

<!-- Every .column added inside a .row will automatically receive an equal amount of the available area. -->
```

See more examples of **grids** [here](http://milligram.github.io/grids.html).


## Codes

The Code element represents a fragment of computer code. Just wrap anything in a `<code>` and it will appear like this. if you need a block, by default, enter the `<code>` within the `<pre>` element.

```html
<pre><code>
.milligram {
  color: #9b4dca;
}
</code></pre>
```

See more examples of **codes** [here](http://milligram.github.io/codes.html).


## Utilities

Milligram has some functional classes to improve the performance and productivity everyday.

```html
<!-- Functional Classes -->

<!-- Clear any float  -->
<div class="clearfix">

  <!-- Float either directions -->
  <div class="float-left"></div>
  <div class="float-right"></div>

</div>
```

See more examples of **utilities** [here](http://milligram.github.io/utilities.html).


## Tips

Tips, techniques, and best practice on using Cascading Style Sheets.

**Mobile First**

The Mobile First is the design strategy that takes priority development for mobile devices like smartphones and tablets. It means all styles outside of a media queries apply to all devices, then larger screens are targeted for enhancement. This prevents small devices from having to parse tons of unused CSS. Milligram use some breakpoints like these:

**Mobile**: 40.0rem (400px)
**Tablet**: 80.0rem (800px)
**Desktop**: 120.0rem (1200px)

```css
/* Mobile First Media Queries */

/* Base style */
{ ... }

/* Larger than mobile screen */
@media (min-width: 40.0rem) { ... }

/* Larger than tablet screen */
@media (min-width: 80.0rem) { ... }

/* Larger than desktop screen */
@media (min-width: 120.0rem) { ... }
```

See more examples of **tips** [here](http://milligram.github.io/tips.html).

**Extending The Inheritances**

The style of an element can be defined in several different locations, which interact in a complex way. It is form of interaction makes CSS powerful, but it can make it confusing and difficult to debug.

```css
/* Extending The Inheritances */

/* Applying color variation */
.button-black {
  background-color: black;
  border-color: black;
}
.button-black.button-outline {
  color: black;
}
.button-black.button-clear {
  color: black;
}

/* Applying size variation */
.button-small {
  font-size: .8rem;
  height: 2.8rem;
  line-height: 2.8rem;
  padding: 0 1.5rem;
}

.button-large {
  font-size: 1.4rem;
  height: 4.5rem;
  line-height: 4.5rem;
  padding: 0 2rem;
}
```

See more examples of **tips** [here](http://milligram.github.io/tips.html).


## Browser Support

While not designed for old browsers, Milligram has support for some old versions, but we recommend using the latest versions of their browsers.

- Chrome latest
- Firefox latest
- IE latest
- Opera latest
- Safari latest



See more examples of **browser support** [here](http://milligram.github.io/browser-support.html).


## Examples

You can view more examples of using Milligram.

- [Getting Started](http://milligram.github.io/getting-started.html)
- [Typography](http://milligram.github.io/typography.html)
- [Blockquotes](http://milligram.github.io/blockquotes.html)
- [Buttons](http://milligram.github.io/buttons.html)
- [Lists](http://milligram.github.io/lists.html)
- [Forms](http://milligram.github.io/forms.html)
- [Tables](http://milligram.github.io/tables.html)
- [Grids](http://milligram.github.io/grids.html)
- [Codes](http://milligram.github.io/codes.html)
- [Utilities](http://milligram.github.io/utilities.html)
- [Tips](http://milligram.github.io/tips.html)
- [Browser Support](http://milligram.github.io/browser-support.html)

See more examples of **examples** [here](http://milligram.github.io/examples.html).


## Contributing

Help improve these docs. Open an [issue](https://github.com/milligram/milligram/issues/new) or submit a pull request.

- Navigate to the main page of the repository
- [Fork it!](https://github.com/milligram/milligram#fork-destination-box)
- Create your feature branch: git checkout -b my-new-feature
- Commit your changes: git commit -m 'Add some feature'
- Push to the branch: git push origin my-new-feature
- Submit a pull request =D


## License

[MIT License](http://cjpatoilo.mit-license.org/) @ CJ Patoilo