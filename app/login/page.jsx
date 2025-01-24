import React from "react";

import SignIn from "@/app/components/SignIn";
const LoginPage = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignIn type={"LogIn"} />
    </main>
  );
};

export default LoginPage;
