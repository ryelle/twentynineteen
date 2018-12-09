const { loadPage } = require( 'axe-puppeteer' );
const { WP_BASE_URL } = require( './support/config' );
const formatAxeResults = require( './support/format-axe-results' );

describe( 'theme accessibility', () => {
	it( 'header should have no violations', async () => {
		const axeBuilder = await loadPage( browser, WP_BASE_URL );
		// Only test a section of the page.
		axeBuilder.include( '.site-header' );
		const results = await axeBuilder.analyze();
		const formattedResults = formatAxeResults( results );
		expect( formattedResults ).toHaveLength( 0 );
	} );

	it( 'site content should have no violations', async () => {
		const axeBuilder = await loadPage( browser, WP_BASE_URL );
		// Only test a section of the page.
		axeBuilder.include( '.site-main' );
		const results = await axeBuilder.analyze();
		const formattedResults = formatAxeResults( results );
		expect( formattedResults ).toHaveLength( 0 );
	} );

	it( 'a single page should have no violations', async () => {
		const axeBuilder = await loadPage( browser, `${WP_BASE_URL}/?page_id=2` );
		const results = await axeBuilder.analyze();
		// Excluding site-header, checked earlier.
		axeBuilder.exclude( '.site-header' );
		const formattedResults = formatAxeResults( results );
		expect( formattedResults ).toHaveLength( 0 );
	} );
} );
