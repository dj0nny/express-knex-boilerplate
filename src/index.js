const dotenv = require('dotenv');

dotenv.config();

const app = require('./app');

const PORT = process.env.PORT || 7895;

app.listen(PORT, () => {
  console.log(`🚀 Server's up at http://localhost:${PORT}`);
});
