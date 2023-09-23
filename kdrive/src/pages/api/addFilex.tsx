import { type NextApiRequest, type NextApiResponse } from "next";

const addFilex = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ text: "dflkj" });
};

export default addFilex;
