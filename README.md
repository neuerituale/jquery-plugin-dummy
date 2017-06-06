# README #

Template for jQuery Plugins

### Use ###

```javascript
// init plugin
$('.selectors').pluginname({
	option1: 'HELLO WORLD'
});

// instance
var $instance = $('.selectors').pluginname().data('pluginname');

// do something
$instance.public();
```