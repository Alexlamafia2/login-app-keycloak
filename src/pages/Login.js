import { json, redirect } from "react-router-dom";

import LoginForm from "../components/LoginForm";

export default function LoginPage() {
  return <LoginForm />;
}

export async function action({ request, params }) {
  const data = await request.formData();
  const eventData = {
    id: Math.random(),
    email: data.get("email"),
    password: data.get("password"),
  };
  const response = await fetch(
    "https://login-router-pa-default-rtdb.firebaseio.com/loginInfo.json",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    }
  );
  if (!response.ok) {
    throw json({ message: "Could not save event." }, { status: 500 });
  }

  return redirect("/");
}
