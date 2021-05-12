
# Interordi CSS Base

This set of CSS rules are designed to serve as a base for any page, site or web application. The included styles are simple, sensitive defaults, plus are easy to override.

Both light and dark modes are provided, in order to have a working base for any type of website. Include one or the other stylesheet to quickly change.

This is currently used on the [Interordi](https://www.interordi.com/) family of sites.


## Why

I wanted to establish a base that would look good across multiple browsers and platforms while not requiring additional markup. Include `normalize.css` and `base.css` (or `base-dark.css`) and you're ready to go, no extra adjustments necessary.

Many CSS toolkits try to come with everything but the kitchen sink, or require tons of additional HTML tags to work as expected. Others will apply their defaults automatically, but they're strongly opiniated and/or include fonts and colors that then need to be overriden for each individual site, which I didn't want.

The Interordi CSS Base aims to work just like the browser defaults, but with a more modern appearance, while looking the same on multiple platforms. It also adds a few optional conveniences. Nothing more, nothing less.


## Additions

A few elements are added beyond the default styling.

### Toggles

These are situational replacements for checkboxes, made popular with mobile apps and newer software.

Syntax: `<input type="checkbox" class="toggle"`>

### Forms

`form-horizontal` and `form-vertical` will define the two basic visual types for forms. Structure sample:

```
<form class="form-vertical">
  <div class="form-group">
    <label>First label</label>
    <input type="text" />
  </div>

  <div class="form-group">
    <label>Second label</label>
    <input type="text" />
  </div>
</form>
```

### Alerts and main actions

Use the following five classes on various items to create a standardized visual.

`alert-primary`  
`alert-success`  
`alert-error`  
`alert-warning`  
`alert-info`  

Using these on a `<div>` will display IT as a notification banner. Adding it to a `<button>` or any relevant form element will highlight these elements, making them stand out to users.


## Requirements

Get a copy of [normalize.css](https://necolas.github.io/normalize.css/), either downloaded or linked, then include your choice of `base.css` or `base-dark.css`.

## Demo

The included `test_css_light.html` and `test_css_dark.html` will preview all styled HTML elements.

You can also view live copies here:
* [Light theme](https://www.interordi.com/tools/css-base/test_css_light.html)
* [Dark theme](https://www.interordi.com/tools/css-base/test_css_dark.html)
* [Side-by-side comparison](https://www.interordi.com/tools/css-base/test_compare.html)