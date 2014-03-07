/**
 * New node file
 */

/**
 * Create a mongo Connect URL from the given options.
 *
 * Format of options
 * options {
 * 	 host: string - hostname of database
 *   port: string, optional - port of database
 *   database: string - name of database
 * }
 *
 * If the required parameters, (host and database) are missing, it will return
 * an empty string.
 *
 * @returns {string} valid url connection string or empty string.
 */
function createMongoConnectUrl(options) {
	var url = ['mongodb://'];

	if (!options || !options.host || !options.database) {
		return '';
	}
	url.push(options.host);
	if (options.port) {
		url.push(':');
		url.push(options.port);
	}
	url.push('/');
	url.push(options.database);
	return url.join('');
}

module.exports = {
	createMongoConnectUrl: createMongoConnectUrl
};