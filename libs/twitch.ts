import axios from "axios";
import { configuration } from "../util/configuration";
const endpoint = `https://api.twitch.tv/helix/users?login=${configuration.twitch.twitchChannel}`;
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