import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";

function SigninPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.replace("/");
    }
  }, [status]);

  const signinHandler = async () => {
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (!res.error) router.push("/");
  };

  return (
    <div className="signin-form">
      <h3>Login Form</h3>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={signinHandler}>Login</button>
      <div>
        <p>
          Create an account?
          <Link href="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}

export default SigninPage;
