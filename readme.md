#Html to jade
Convert html pages to jade templates

```shell
npm install gulp-html2jade --save-dev
```

###Options:
#### options.double
Type: `Boolean`
Default value: `false`
Desc: use double quotes for attributes

#### options.nspaces
Type: `Number`
Default value: `2`
Desc: the number of spaces to indent generated files with. Default is 2 spaces

#### options.tabs
Type: `Bolean`
Default value: `false`
Desc: use tabs instead of spaces

#### options.bodyless
Type: `Bolean`
Default value: `false`
Desc: do not output enveloping html and body tags

#### options.numeric
Type: `Bolean`
Default value: `false`
Desc: use numeric character entities

#### options.donotencode
Type: `Boolean`
Default value: `false`
Desc: do not html encode charact


#### options.scalate
Type: `Boolean`
Default value: `false`
Desc: generate Scalate variant of jade syntax


##Example
```javascript
var html2jade = require('gulp-html2jade');

gulp.task('html2jade', function() {
	var dest = gulp.dest('jade');

	gulp
		.src('html/**/*.html')
		.pipe(html2jade())
		.pipe(dest);
});
```

Enspired by [html2jade](https://github.com/donpark/html2jade)