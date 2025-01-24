import SignIn from "@/app/components/SignIn";
import Image from "next/image";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignIn type={"Sign Up"} />
    </main>
  );
}
