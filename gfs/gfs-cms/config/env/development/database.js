const path = require('path');

module.exports = ({ env }) => ({
	defaultConnection: 'default',
	connection: {
    client: 'sqlite',
    connection: {
      filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
    },
    useNullAsDefault: true,
  },
});
