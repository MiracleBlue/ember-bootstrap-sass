# ember-bootstrap-sass

This is a very simple addon that provides an easy means of installing
[bootstrap-sass](https://github.com/twbs/bootstrap-sass) into an ember-cli application,
and including its styles and mixins in your Sass stylesheets.

This addon inspired heavily by [ember-foundation](https://github.com/joshforisha/ember-foundation).

## Installing this addon

* Ensure you have `ember-cli-sass` installed and that your application is configured
to use it
* `ember install ember-bootstrap-sass`
* In your `app.scss`, place the following line at the top of the file:
`@import "ember-bootstrap-sass";`
* Enjoy!

# Contributing

Please feel free to contribute to development, although this is designed to be
as simple and light-weight as possible.  I don't intend for this to include
any bootstrap component wrappers, as there are already a few out there which do
this.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
