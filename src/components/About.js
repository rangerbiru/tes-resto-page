import React from "react";
import "./style.css";
import imgAbout from "./images/about.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="flex items-center py-36 px-20 max-lg:flex-col-reverse max-lg:px-6 max-lg:gap-10"
    >
      <div className="w-1/2 flex flex-col items-center justify-center px-16 max-lg:w-full max-lg:px-0">
        <h2 className="title text-7xl">Discover</h2>
        <h4 className="sub-title -mt-9 text-5xl max-lg:text-center">
          Our Store
        </h4>

        <span className="mt-10 mb-5 text-xs text-gray-300 flex gap-1">
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </span>

        <p className="text-center text-gray-400 leading-normal max-lg:text-justify">
          Voluptatibus quaerat laboriosam fugit non Ut consequatur animi est
          molestiae enim a voluptate totam natus modi debitis dicta impedit
          voluptatum quod sapiente illo saepe explicabo quisquam perferendis
          labore et illum suscipit
        </p>

        <div className="mt-8 max-lg:mt-14">
          <a
            href="#menu"
            className="transition duration-300 hover:text-yellow-600 max-lg:text-xl"
          >
            Order Now !
          </a>
        </div>
      </div>
      <div className="w-1/2 max-lg:w-full">
        <div className="image-about px-16 max-lg:px-0">
          <img
            src={imgAbout}
            alt="Image About"
            className="object-cover max-lg:rounded-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
