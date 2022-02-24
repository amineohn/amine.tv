import axios from "axios";
import { configuration } from "../utils/configuration";
const endpoint = `https://api.twitch.tv/helix/users?login=${configuration.twitch.twitchChannel}`;
const topGames = `https://api.twitch.tv/helix/games/top`;
export const getUser = async () => {
  return await axios.get(endpoint, 
    {
        headers: {
          "Client-ID": `${configuration.twitch.clientId}`,
          Authorization: `Bearer ${configuration.twitch.clientSecret}`,
        },
      }
  );
};
export const getGames = async () => {
    return await axios.get(topGames, 
      {
          headers: {
            "Client-ID": `${configuration.twitch.clientId}`,
            Authorization: `Bearer ${configuration.twitch.clientSecret}`,
          },
        }
    );
  };