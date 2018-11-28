define( [], function () {
	'use strict';
	// *****************************************************************************
	// Dimensions & Measures
	// *****************************************************************************
	var dimensions = {
		uses: "dimensions"
	};
	var measures = {
		uses: "measures"
	};
	// *****************************************************************************
	// Appearance section
	// *****************************************************************************
	var myTextBox = {
		ref: "props.myTextBox",
		label: "My Text Box",
		type:	"string"
	}

	var appearanceSection = {
		uses: "settings",
		items:	{
					myNewHeader: {
								type: "items",
								label:	"My Header, containing a text box",
								items: {
									myTextBox: myTextBox
								}
					}
		}
	};


	// *****************************************************************************
	// Custom section
	// *****************************************************************************
	var header1_item1 = {
	    ref: "props.section1.item1",
	    label: "Section 1 / Item 1",
	    type: "string",
	    expression: "optional"
	},
	header1_item2 = {
	    ref: "props.section1.item2",
	    label: "Section 1 / Item 2",
	    type: "string",
	    expression: "optional"
	},
	header2_item1 ={
		ref: "props.section2.item2",
		label: "Section 2 / Item 1",
		type: "string",
		expression: "optional"
	},
	header2_item2 ={
		ref: "props.section2.item2",
		label: "Section 2 / Item 2",
		type: "string",
		expression: "optional"
	},
	myCustomSection = {
				component: "expandable-items",
				label: "My Customer Section",
				items: {
						header1: {
								type: "items",
								label: "Header 1",
								items: {
										header1_item1: header1_item1,
										header1_item2: header1_item2
								}
						},
						header2: {
								type: "items",
								label: "Header 2",
								items:	{
										header2_item1: header2_item1,
										header2_item2: header2_item2
								}

						}
				}
		}



	// *****************************************************************************
	// Main properties panel definition
	// Only what is defined here is returned from properties.js
	// *****************************************************************************
	return {
		type: "items",
		component: "accordion",
		items: {
			dimensions: dimensions,
			measures: measures,
			appearance: appearanceSection,
			customSection: myCustomSection
		}
	};
});
