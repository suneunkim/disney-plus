import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";

import Main from "./pages/Main";
import Detail from "./pages/Detail";
import Search from "./pages/Search";

const Layout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="search" element={<Search />} />
          <Route path=":movieId" element={<Detail />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
