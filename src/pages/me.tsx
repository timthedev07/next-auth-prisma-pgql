import { NextPage } from "next";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Me: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (router.isReady) {
      if (!session?.user) {
        router.push("/auth/signin");
      }
    }
  }, [session, router.isReady]);

  return (
    <>
      {session && session.user ? (
        <pre className="m-4 p-4 bg-slate-200 rounded-md text-opacity-75">
          {JSON.stringify(session.user, null, 2)}
        </pre>
      ) : (
        "Loading"
      )}
    </>
  );
};

export default Me;
