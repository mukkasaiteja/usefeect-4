import "./App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [fetchData, setFetchData] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("software");

  useEffect(() => {
    get_git_data();
  }, [query]);
  const get_git_data = async () => {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=Y-OOXtwlVEcx_poIg3l69XvusdENNDQp-XjgFZaAorM`
    );
    console.log(response);
    const data = await response.json();
   

    setFetchData(data.results);

   
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
   
  };
  function getSearch(e) {
    e.preventDefault();
    setQuery(search);

    setSearch("");
  }

  return (
    <div className="App">
      <form className="" onSubmit={getSearch}>
        <input
          className=""
          id="input"
          type="search"
          placeholder="Search Name..."
          aria-label="Search"
          value={search}
          onChange={updateSearch}
        />
        <button id="btn" className="" type="submit">
          Search
        </button>
      </form>
      <div className="container">
        {fetchData.map((item, key) => {
        

          return (
            <div className="pictures" key={key}>
              <img
                src={item.urls.small}
                style={{ width: "100%" }}
                alt="images"
              />
              <a href={item.links.download} target="_blank">
                download
              </a>
              <h6>user :{item.user.name}</h6>
              <h6>created_at :{item.created_at}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}