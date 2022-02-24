import { NextApiResponse } from "next";
import { getGames } from "../../../libs/twitch";

export default async (_, res: NextApiResponse) => {
  const response = await getGames();

  const user = response.data.data;
  return res.status(200).json(user);
};