// spec.js
describe('Angular.js Demo App', function() {

	beforeEach(function() {
		browser.get('http://localhost:8080');
	});

	it('view the second widget', function() {

		var viewButton = element(by.repeater('widget in widgets').row(1))
			.element(by.css('button:nth-child(2)'));

		viewButton.click();

		var divName = browser.findElement(By.css('div > div:first-child'));

    expect(divName.getInnerHtml()).toEqual('Name: Medium Blue Widget');

  });

	// exercise #3 - modify the above spec to do the assertion based upon a value
	// retrieved from the original list, instead of the hard coded text on line 17

	// exercise #4 - create a spec to view the fourth widget, validate the size and quantity

	// exercise #5 - create a spec to view the first widget, validate the color, then click
	// return to list, and verify the list length of 4

});
