/** @type {import('next').NextConfig} */
const { withSuperjson } = require("next-superjson");

module.exports = {
  env: {
    TWITCH_CHANNEL: process.env.TWITCH_CHANNEL,
    TWITCH_CLIENT_ID: process.env.TWITCH_CLIENT_ID,
    TWITCH_TOKEN: process.env.TWITCH_TOKEN,
    TWITCH_REDIRECT_URI: process.env.TWITCH_REDIRECT_URI,
    TWITCH_USER: process.env.TWITCH_USER,
  },
};

module.exports = withSuperjson()({});
