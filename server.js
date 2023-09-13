const app = require('./app');
const config = require('./app/config.js');

const PORT = config.app.port;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
