const { loadPage } = require('axe-puppeteer')

describe( "a11y", () => {
	it( "runs sample test", async () => {
		const axeBuilder = await loadPage(
			browser,
			'http://one.wordpress.test/'
		);
		const results = await axeBuilder.analyze();
		expect(results.violations.length).toBe(0);
	} );
});
