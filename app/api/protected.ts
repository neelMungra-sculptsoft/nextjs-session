import { getSession, getSessionToken } from "@/lib/sessions";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = getSessionToken(req);

  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  const session = getSession(token);

  if (!session) {
    return res.status(401).json({ message: "Invalid or expired session" });
  }

  res
    .status(200)
    .json({ message: "This is a protectd route", userId: session.userId });
}
