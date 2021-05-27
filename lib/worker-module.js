module.exports = async () => {
	const batchSize = getBatchSize();

	console.log(`I did some work. batch size is: ${batchSize}`);
};

function getBatchSize(defaultBatchSize = 1000) {
	return process.env.BATCH_SIZE || defaultBatchSize;
}
