describe('worker-module', () => {
	it('loads batch size from ENV vars', () => {
		const testVal = (Math.random() * 1000).toFixed(0);
		process.env.BATCH_SIZE = testVal;
		// todo: where are we getting the getBatchSize() method?
		const actual = getBatchSize();
		expect(actual).toEqual(testVal);
	});
});
