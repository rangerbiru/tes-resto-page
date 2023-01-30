import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Home from "./components/Home";
import Menu from "./components/Menu";
import ReactLoading from "react-loading";
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  });
  return (
    <>
      {loading ? (
        <div className="flex justify-center h-screen items-center gap-2">
          <h2 className="text-2xl font-semibold">Loading</h2>
          <ReactLoading type={"spin"} color={"blue"} height={50} width={50} />
        </div>
      ) : (
        <div>
          <Header />
          <div className="main">
            <Home />
            <About />
            <Menu />
            <Contact />
          </div>
        </div>
      )}
    </>
  );
}

export default App;
