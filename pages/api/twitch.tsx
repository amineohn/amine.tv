import { NextApiResponse } from "next";
import { getUser } from "../../libs/twitch";

export default async (_, res: NextApiResponse) => {
  const response = await getUser();

  const user = response.data.data[0];
  return res.status(200).json(user);
};