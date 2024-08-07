import { cookies } from "next/headers";
import React from "react";

const fetchUserProfile = async (token) => {
  const res = await fetch("/api/protected", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  if (res.ok) {
    return res.json();
  }
  throw new Error("Failed to fetch profile");
};

const ProfilePage = async () => {
  const token = cookies().get("session_token")?.value;

  let message = "";

  if (token) {
    try {
      const data = await fetchUserProfile(token);
      message = data;
    } catch (err) {
      message = "An error occured";
    }
  }

  return <div>{message}</div>;
};

export default ProfilePage;
