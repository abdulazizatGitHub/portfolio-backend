// Runs before any test file or app module is required. Loads .env.test so
// Jest always talks to the disposable portfolio_test_db, never the dev
// database the running backend/admin/public servers are actually using.
// dotenv.config() never overwrites a variable already set in process.env,
// so setting it here first is what makes this override effective.
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env.test') });
