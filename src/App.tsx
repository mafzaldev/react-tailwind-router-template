import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Post from "./pages/post";
import AboutUs from "./pages/aboutUs";
import NotFound from "./pages/notFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

export default App;
