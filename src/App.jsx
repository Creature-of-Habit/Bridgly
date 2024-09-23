import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Demo from "./components/Demo/Demo";
import DemoHeader from "./components/Demo/DemoHeader";
import HomeHeader from "./components/Home/HomeHeader";
import { Blog } from "./Context/Context";

function App() {
  const {currentUser} =  Blog();
  return (
    <div className="bg-[url('src/components/Demo/bg_img.jpeg')] bg-cover">
    <>
      {currentUser ? <HomeHeader /> : <DemoHeader />}
      <Routes>
        {currentUser && <Route path="/" element={<Home />} />}
        {!currentUser && <Route path="/demo" element={<Demo />} />}
      <Route path='*' element={<Navigate to={!currentUser ? "/demo" : "/"}/>} />
      </Routes>
    </>
    </div>
  );
}

export default App
