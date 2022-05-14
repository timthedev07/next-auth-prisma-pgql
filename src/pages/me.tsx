import { GetServerSideProps, NextPage } from "next";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";

interface Props {
  user: Session["user"];
}

const Me: NextPage<Props> = ({ user }) => {
  return (
    <>
      <pre className="m-4 p-4 bg-slate-200 rounded-md text-opacity-75">
        {JSON.stringify(user, null, 2)}
      </pre>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (ctx) => {
  const session = await getSession(ctx);
  let redirect = undefined;

  if (!session || !session.user) {
    redirect = {
      destination: "/auth/signin",
      permanent: false,
    };
  }

  return {
    props: {
      user: session?.user,
    },
    redirect,
  };
};

export default Me;
