// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "mongoose",
//       settings: {
//         client: "mongo",
//         uri: env("DATABASE_URI"),
//         database: env("DATABASE_NAME"),
//       },
//       options: {
//         ssl: true,
//       },
//     },
//   },
// });

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "sqlite",
        filename: env("DATABASE_FILENAME", ".tmp/quantum.db"),
      },
      options: {
        ssl: true,
        useNullAsDefault: true,
      },
    },
  },
});
