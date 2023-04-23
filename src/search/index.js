import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { findBeerByName } from "../services/beer/beers-service";
import NavigationSidebar from "../navigation-sidebar";
function Search() {
  const { searchTerm } = useParams();
  const navigate = useNavigate();
  const [search, setSearch] = useState(searchTerm);
  const [results, setResults] = useState([]);
  const searchBeers = async () => {
    const results = await findBeerByName(search);
    console.log(results)
    setResults(results);
    navigate(`/search/${search}`);
  };
  useEffect(() => {
    if (searchTerm) {
      setSearch(searchTerm);
      searchBeers();
    }
  }, [searchTerm]);
  return (
    <div className="row my-2">
      <div className="col-auto">
        <NavigationSidebar />
      </div>
      <div className="col">
        <h1>Beers Search Screen {searchTerm}</h1>
        <div className="form-group">
          <label>Search</label>
          <input
            type="text"
            className="form-control"
            value={search}
            placeholder="Search for beers by name or brand"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button onClick={searchBeers} className="btn btn-primary my-2">
            Search
          </button>
          <div className="">
            <ul className="list-group">
              {results.map((result) => {
                return (
                  <li className="list-group-item">
                    <Link to={`/details/${result.id}`} className="row align-items-center">
                      <img src={result.image} className="image-thumbnail col-3" style={{ maxWidth: 140 }} alt=""
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src = "/default_beer.png";
                        }}></img>
                      <h3 className="align-middle col">{result.name}</h3>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div >
    </div>
  );
}

export default Search;