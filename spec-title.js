// spec.js
describe('Angular.js Demo App', function() {

  it('should have a title', function() {

		browser.get('http://localhost:8080');

    expect(browser.getTitle()).toEqual('Angular.js Demo App');

  });

	// exercise #1 - move the browser.get function call to a before each, and use the following code
	// to take a screenshot before the 'expect'

	// browser.takeScreenshot().then(function(png) {
	// 	var stream = fs.createWriteStream("./iscreenshot.png");
	// 	stream.write(new Buffer(png, 'base64'));
	// 	stream.end();
	// });

});
