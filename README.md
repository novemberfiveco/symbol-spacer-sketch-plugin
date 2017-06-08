symbol-spacer-sketch-plugin
=========
[![GitHub release](https://badge.fury.io/gh/novemberfiveco%2Fsymbol-spacer-sketch-plugin.svg?maxAge=3600)](https://github.com/novemberfiveco/symbol-spacer-sketch-plugin/releases)

Automatically resizes symbol to original size when switching from one spacing to another spacing symbol

## Blog post
How we use this plugin in combination with AnimApp: 
https://novemberfive.co/blog/animapp-sketch-spacings/

## Functionality
When you change a symbol that starts with the string `@spacing` (default) and deselect, our plugin will automatically trigger Sketch’s “reset to original size” function. The symbol will be updated, and its size will be updated to the new symbol’s original size.
 
As a default, the spacings layer names should always start with "@spacing": @spacing-16, spacing / @spacing-32,... This is the naming we use, but you can change this to match your own conventions in the Settings.
 
Unlike Sketch’s own default setting, **our plugin updates the layer name to match the name of the updated symbol**.

![Symbol Spacer](https://raw.githubusercontent.com/novemberfiveco/symbol-spacer-sketch-plugin/master/src/images/spacing-plugin.gif)

## Installation

### From a release (simplest)

* [Download](https://github.com/novemberfiveco/symbol-spacer-sketch-plugin/releases/latest) the latest release of the plugin
* Un-zip
* Double-click on novemberfive-symbol-spacer.sketchplugin
* Install

### From the sources

* Clone the repo
* Install the dependencies (`npm install`)
* Build (`npm run build`)
* Double-click on novemberfive-symbol-spacer.sketchplugin
