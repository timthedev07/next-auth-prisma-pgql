import { NextPage, GetServerSideProps } from "next";
import { BuiltInProviderType } from "next-auth/providers";
import {
  ClientSafeProvider,
  getProviders,
  LiteralUnion,
  signIn,
  useSession,
} from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { OAuthButton } from "react-auth-provider-buttons";

interface Props {
  providers: Record<
    LiteralUnion<BuiltInProviderType, string>,
    ClientSafeProvider
  > | null;
}

const SignIn: NextPage<Props> = ({ providers }) => {
  const { push, isReady, query } = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (isReady && session && session.user) push(query.callbackUrl as string);
  }, [isReady, session]);

  return (
    <div className="w-screen h-[456px] flex flex-col justify-start items-center pt-36 gap-8">
      <h2>Sign In</h2>
      <div className="flex flex-col justify-center items-center min-w-[350px]">
        {Object.values(providers as any).map((each: any) => (
          <OAuthButton
            onClick={async () => {
              await signIn(each.id);
            }}
            provider={each.id as any}
            key={each.name}
          />
        ))}
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return {
    props: {
      providers: await getProviders(),
    },
  };
};

export default SignIn;
