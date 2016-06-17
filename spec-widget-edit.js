// spec.js
describe('Angular.js Demo App', function() {

	beforeEach(function() {
		browser.get('http://localhost:8080');
	});

	it('edit the second widget', function() {

		var editButton = element(by.repeater('widget in widgets').row(1))
			.element(by.css('button:first-child'));

		editButton.click();

		element(by.model('widget.name')).clear().sendKeys('Modified Widget Name');

		element(by.partialButtonText('Save Widget')).click();

		var td = element(by.repeater('widget in widgets').row(1).column('widget.name'));

		expect(td.getInnerHtml()).toEqual('Modified Widget Name');

  });

	// exercise #6 - write a spec which modifies a widget's color, save the change
	// and assert the change on the widget list

	// select option code
	// change blue to the desired color
	// element(by.model('widget.color')).element(By.xpath('//option[text() = \'Blue\']')).click();

	// exercise #7 - create a new spec file for creating a widget, write a spec creating
	// a widget, and validate the creation in the widget list

	// exercise #8 - create a new spec file for deleting a widget, write a spec deleting
	// a widget, and validate the deletion in the widget list
});
