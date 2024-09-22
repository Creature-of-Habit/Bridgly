import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Demo from "./components/Demo/Demo";
import DemoHeader from "./components/Demo/DemoHeader";
import HomeHeader from "./components/Home/HomeHeader";

function App() {
  const auth = false;
  return (
    //<div className="bg-[url('src/components/Demo/bg_img.jpeg')]">
    <>
      {auth ? <HomeHeader /> : <DemoHeader />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </>
    //</div>
  );
}

export default App
