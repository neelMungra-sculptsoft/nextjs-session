import { redirect } from "next/navigation";

export async function loginAction(
  prevData: unknown,
  formData: FormData,
): Promise<{ message: string }> {
  const username = formData.get("username");
  const password = formData.get("password");

  const res = await fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (res.ok) {
    redirect("/profile");
  }

  return {
    message: "Login Failed",
  };
}
