import React from "react";

const Home = () => {
  return (
    <section id="home" className="bg-home h-screen">
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="title text-7xl max-lg:text-6xl">Welcome</h2>
        <h4 className="sub-title text-white -mt-8 text-6xl max-lg:text-5xl max-lg:-mt-6">
          THE RESTO
        </h4>

        <p className="text-gray-300 text-lg tracking-wide max-lg:text-center max-lg:text-base max-lg:mt-1 max-lg:px-2">
          Nikmati makanan yang berkualitas dan terbaik{" "}
          <strong className="text-white uppercase">hanya disini</strong>
        </p>
      </div>
    </section>
  );
};

export default Home;
