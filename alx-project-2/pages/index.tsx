import React from "react";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
   <div className="h-screen flex flex-col">
    <Header/>

    <main className="flex flex-grow items-center justify-center bg-gradient-to-b from-blue-500 to-red-500 text-white">
      <div className="text-center">
       <h1 className="font-bold text-xl md:text-5xl">Welcome to alx-project-2 application</h1>
       <p className="mt-2 text-sm md:text-xl">We're glad you're here. Explore and enjoy your'e experience</p>
      </div>
    </main>

    


   </div>
  );
}
export default Home;
