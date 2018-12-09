const { loadPage } = require( 'axe-puppeteer' );
const { WP_BASE_URL } = require( './support/config' );
const formatAxeResults = require( './support/format-axe-results' );

describe( 'a11y', () => {
	it( 'runs sample test', async () => {
		const axeBuilder = await loadPage( browser, WP_BASE_URL );
		const results = await axeBuilder.analyze();
		const formattedResults = formatAxeResults( results );
		expect( formattedResults ).toHaveLength( 0 );
	} );
} );
