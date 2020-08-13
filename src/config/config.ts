export const config = {
  PORT: process.env.PORT || 3000,
  HOST: process.env.HOST || 'http://localhost',

  ALLOWED_ORIGIN: process.env.ALLOWED_ORIGIN || 'http://localhost:4200;http://localhost:3000;http://localhost:5000',

  serverRateLimits: {
    period: 15 * 60 * 1000, // 15 minutes
    maxRequests: 1000,
  },

  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost:27017/test_task',
};
