import { createSession, setSessionCookie } from "@/lib/sessions";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { username, password } = req.body;

    if (username === "neel" && password === "neel") {
      const token = createSession("user_id_1");
      setSessionCookie(res, token);
      res.status(200).json({ message: "Logged in successfully" });
    } else {
      res.status(401).json({ message: "Invalid credentials" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
