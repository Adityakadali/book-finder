import Nav from "./components/Nav";
import Hero from "./pages/Hero";
import Explore from "./pages/Explore";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Search from "./pages/Search";
function App() {
  return (
    <>
      <Nav />
      <main className="container mx-auto max-w-5xl px-6">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="search/:key" element={<Search />} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
