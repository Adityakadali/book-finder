import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

function Nav() {
  const [search, setSearch] = useState("");

  return (
    <header>
      <nav className="container mx-auto flex  max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <NavLink to="/" className="flex items-center gap-4">
          <img src={logo} alt="brand logo" />
          <h1 className="font-mono text-2xl font-bold tracking-widest text-teal-800">
            BookFinder
          </h1>
        </NavLink>
        <div className="flex items-center gap-2">
          <input
            className="rounded-sm border border-slate-600 bg-inherit px-4 py-2 outline-2 outline-slate-500 focus:bg-white"
            type="text"
            onChange={(e) => setSearch(e.target.value)}
          />
          <NavLink
            to={`/search/${search}`}
            className="rounded-sm bg-teal-500 px-4 py-2 font-semibold text-slate-50"
          >
            Search
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Nav;
