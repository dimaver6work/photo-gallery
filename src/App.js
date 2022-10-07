import React from "react";
import "./index.scss";
import { useEffect, useState } from "react";
import { Collection } from "./Collection";
import { Pagination } from "./Pagination";
import { MultiSelect } from "./Select";

const navbarStyles = [
  {
    name: "Normal",
    type: "",
  },
  {
    name: "Blur",
    type: "?blur=10",
  },
  {
    name: "Grayscale",
    type: "?grayscale",
  },
];

function App() {
  const [limit, setLimit] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const [collections, setCollections] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [type, setType] = useState("");
  useEffect(() => {
    fetch(`https://picsum.photos/v2/list?page=${activePage}&limit=${limit}`)
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Error");
      });
  }, [activePage, limit]);

  return (
    <div className="App">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {navbarStyles.map((obj) => (
            <li
              onClick={() => {
                setType(obj.type);
              }}
              className={obj.type === type ? "active" : ""}
              key={obj.name}
            >
              {obj.name}
            </li>
          ))}
        </ul>
        <MultiSelect limit={limit} onChange={(value) => setLimit(value)} />
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input"
          placeholder="Поиск по автору"
        />
      </div>
      <div className="content">
        {collections

          .filter((obj) =>
            obj.author.toLowerCase().includes(searchValue.toLocaleLowerCase())
          )

          .map((obj) => (
            <Collection
              key={obj.id}
              author={obj.author}
              url={obj.download_url + type}
              id={obj.id}
            />
          ))}
      </div>
      <Pagination activePage={activePage} setActivePage={setActivePage} />
    </div>
  );
}

export default App;
