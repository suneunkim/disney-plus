import { Routes, Route, Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Login from "./pages/Login";
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
          <Route index element={<Login />} />
          <Route path="main" element={<Main />} />
          <Route path=":movieId" element={<Detail />} />
          <Route path="search" element={<Search />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
