import {
  getSessionToken,
  removeSession,
  removeSessionCookie,
} from "@/lib/sessions";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const token = getSessionToken(req);

    if (token) {
      removeSession(token);
      removeSessionCookie(res);
    }
    res.status(200).json({ message: "Logged out successfully." });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
