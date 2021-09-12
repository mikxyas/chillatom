import { providers, signIn, getSession, csrfToken } from "next-auth/client";
import Card from '../components/Card'



function signin({ providers }) {
  return (
    <div>
      {Object.values(providers).map((provider) => {
        return (
          <div className='flex items-center h-1/2 mt-3 justify-center' key={provider.name}>
            <div className='lg:w-2/5 w-full'>
            <Card content={
              <div className='flex w-full h-full bg-black bg-opacity-5 rounded-xl items-center justify-center'>
                <button className='w-max rounded-md bg-white  bg-opacity-20 shadow-sm font-bold text-white pl-5 pr-5 pt-2 pb-2' onClick={() => signIn(provider.id)}>
                  Sign in with {provider.name}
                </button>
              </div>
            }/>
            </div>

          </div>
        );
      })}
    </div>
  );
}

export default signin;

export async function getServerSideProps(context) {
  const { req } = context;
  const session = await getSession({ req });

  if (session) {
    return {
      redirect: { destination: "/" },
    };
  }

  return {
    props: {
      providers: await providers(context),
      csrfToken: await csrfToken(context),
    },
  };
}