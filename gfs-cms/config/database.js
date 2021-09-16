module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'firestore',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', '.tmp/data.db'),
        // projectId: 'gfs-web-app',
      },
      options: {
        useNullAsDefault: true,
      }
    },
  },
});
