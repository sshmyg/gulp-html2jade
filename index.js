'use strict';

var through = require('through2'),
	html2jade = require('html2jade'),
	gutil = require('gulp-util'),
	PluginError = gutil.PluginError;

module.exports = function(options) {
	var stream, content, pathIndex;

	options = options || {};

	stream = through.obj(function(file, enc, callback) {

		if ( file.isBuffer() ) content = file.contents.toString();
		
		if (!content) throw new PluginError('grunt-html2jade', 'Missing content');

		// Change file extension
		pathIndex = file.path.lastIndexOf('.');
		file.path = file.path.slice(0, pathIndex + 1) + 'jade';

		options.outdir = false;

		html2jade.convertHtml(content, options, function (err, jade) {
			file.contents = new Buffer(jade);
			this.push(file);
			callback();
		}.bind(this));
	});

	return stream;
}