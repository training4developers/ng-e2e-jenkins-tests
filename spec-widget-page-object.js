'use strict';

function HomePage() {

	this.getWidgetRow = function(rowIndex) {
		return element(by.repeater('widget in widgets').row(rowIndex));
	};

	this.getWidgetRowEditButton = function(rowIndex) {
		// using css
		return this.getWidgetRow(rowIndex).element(by.css('button:first-child'));
	};

	this.getWidgetRowViewButton = function(rowIndex) {
		// using partial button text
		return this.getWidgetRow(rowIndex).element(by.partialButtonText('View'));
	};

	this.getWidgetRowColumn = function(rowIndex, modelPropName) {
		return element(by.repeater('widget in widgets').row(rowIndex).column(modelPropName));
	};

}

function EditWidgetPage() {

	this.widgetNameInput = element(by.model('widget.name'));
	this.widgetColorSelect = element(by.model('widget.color'));

	this.selectOption = function(selectControl, selectValue) {
		selectControl.element(By.xpath('//option[text() = \'' + selectValue + '\']')).click();
	};

	this.saveWidgetButton = element(by.partialButtonText('Save Widget'));
}

describe('Angular.js Demo App', function() {

	beforeEach(function() {
		browser.get('http://localhost:8080');
	});

	it('edit the second widget', function() {

		var homePage = new HomePage();
		homePage.getWidgetRowEditButton(1).click();

		var editWidgetPage = new EditWidgetPage();
		editWidgetPage.widgetNameInput.clear().sendKeys('Modified Widget Name');
		// example of selecting an option
		// editWidgetPage.selectOption(editWidgetPage.widgetColorSelect, 'Green');
		editWidgetPage.saveWidgetButton.click();

		expect(homePage.getWidgetRowColumn(1, 'widget.name')
			.getInnerHtml()).toEqual('Modified Widget Name');

  });

	// exercise #9 - recode exercise #5 in a new spec file using a page object

});
