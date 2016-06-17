// spec.js
describe('Angular.js Demo App', function() {

	beforeEach(function() {
		browser.get('http://localhost:8080');
	});

  it('should have a list of 4 widgets', function() {

		var tds = element.all(by.repeater('widget in widgets'));

		// tds.getInnerHtml().then(function(result) {
		// 	console.log(result);
		// });

    expect(tds.count()).toEqual(4);

  });

	it('should have a list of 4 widgets', function() {

		var td = element(by.repeater('widget in widgets').row(0).column('widget.color'));

    expect(td.getInnerHtml()).toEqual('Red');

  });

	// exercise #2 - write a spec which tests the widget name of the third row

});
