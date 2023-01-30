import axios from "axios";
import React, { useEffect, useState } from "react";
import "./style.css";
import "tw-elements";
import ReactLoading from "react-loading";

const Menu = () => {
  const [food, setFood] = useState([]);

  const getFood = async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    // console.log(response.data.meals);
    setFood(response.data.meals);
  };

  useEffect(() => {
    getFood();
    showModalFood();
  }, []);

  //   modal menampilkan makanan
  const [modalFood, setModalFood] = useState([]);
  const [loading, setLoading] = useState(true);

  const showModalFood = async (id) => {
    try {
      const res = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
      );

      // Jadikan Nilai Loading Menjadi False (agar dapat menampilkan Data Makanannya)
      setTimeout(() => {
        // console.log(res.data.meals[0]);
        setLoading(false);
        setModalFood(res.data.meals[0]);
      }, 2000);

      // Balikan Nilainya menjadi TRUE
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section
      id="menu"
      className="bg-menu py-36 px-20 flex flex-col items-center max-lg:px-4"
    >
      <div className="title-menu text-center mb-5">
        <h2 className="title text-7xl tracking-wide">Discover</h2>
        <h4 className="sub-title -mt-10 text-6xl text-white">Our Menu</h4>
      </div>
      <div className="w-full h-auto bg-white rounded-lg my-5 p-10 flex gap-10 flex-wrap justify-center max-lg:p-4 max-lg:gap-4">
        {food.map((f) => (
          <div className="card-menu">
            <ul className="makanan" key={f.idMeal}>
              <li className="p-2">
                <img
                  src={f.strMealThumb}
                  alt="Seafood"
                  className="rounded-md "
                />
                <li className="pt-2">
                  <h2 className="my-4 px-4 text-center text-lg font-medium truncate overflow-hidden w-full">
                    {f.strMeal}
                  </h2>
                </li>

                <div className="text-center mt-8 mb-5">
                  <button
                    type="button"
                    className="transition duration-300 py-2 px-5 bg-yellow-600 text-white rounded-lg hover:bg-yellow-800"
                    data-bs-toggle="modal"
                    data-bs-target="#makanan"
                    value={modalFood}
                    onClick={(e) => showModalFood(f.idMeal)}
                  >
                    Lihat Menu
                  </button>

                  <div
                    class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="makanan"
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog modal-dialog-centered modal-xl relative w-auto pointer-events-none">
                      <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        {loading ? (
                          <div className="flex justify-center h-screen items-center gap-2">
                            <h2 className="text-2xl font-semibold">Loading</h2>
                            <ReactLoading
                              type={"spin"}
                              color={"blue"}
                              height={50}
                              width={50}
                            />
                          </div>
                        ) : (
                          <>
                            <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                              <h5
                                class="text-2xl font-semibold leading-normal text-gray-800"
                                id="exampleModalLabel"
                              >
                                {modalFood.strMeal}
                              </h5>
                              <button
                                type="button"
                                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body relative p-4 flex max-lg:flex-col max-lg:gap-5">
                              <div className="w-1/2 max-lg:w-full">
                                <div className="img-show-makanan">
                                  <img
                                    src={modalFood.strMealThumb}
                                    alt={modalFood.strMeal}
                                    className="rounded-md w-full h-full object-cover"
                                  />
                                </div>
                              </div>
                              <div className="w-1/2 max-lg:w-full px-5 text-justify max-lg:px-0">
                                <h2 className="text-2xl font-semibold">
                                  Country
                                </h2>
                                <p>{modalFood.strArea}</p>

                                <h2 className="text-2xl font-semibold mt-5">
                                  Instruction
                                </h2>
                                <p className=" py-2">
                                  {modalFood.strInstructions}
                                </p>
                              </div>
                            </div>
                            <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                              <a
                                href={modalFood.strSource}
                                target="_blank"
                                class="px-6
          py-2.5
          bg-yellow-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-yellow-700 hover:shadow-lg
          focus:bg-yellow-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-yellow-800 active:shadow-lg
          transition
          duration-150
          ease-in-out"
                              >
                                Lihat Sumber Makanan
                              </a>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
