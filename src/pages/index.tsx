// import { signIn, signOut, useSession } from "next-auth/react";
// import { type NextPage } from "next";
import { NewTweetForm } from "../components/NewTweetForm";

function Home() {
  return <>
    <header className="sticky top-0 border-b bg-white pt-2">
      <h1 className="mb-2 px-4 text-lg font-bold">Home</h1>
    </header>
    <NewTweetForm />
  </>
  
};

export default Home;