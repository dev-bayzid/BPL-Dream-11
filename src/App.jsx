import { Suspense } from "react";
import "./App.css";
import Banner from "./components/homePage/Banner/Banner";
import Navbar from "./components/Navbar/Navbar";
import Players from "./components/homePage/Players/Players";

const playerPromise = fetch("/playerData.json").then((res) => res.json());

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Suspense
        fallback={<span className="loading loading-infinity loading-xl"></span>}
      >
        <Players playerPromise={playerPromise}></Players>
      </Suspense>
    </>
  );
}

export default App;
