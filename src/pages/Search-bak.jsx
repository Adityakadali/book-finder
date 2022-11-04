import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Search() {
  const URL = "https://www.googleapis.com/books/v1/volumes?q=intitle:";
  const [items, setItems] = useState([]);
  let { key } = useParams();
  useEffect(() => {
    fetch(`${URL}${key}`)
      .then((response) => response.json())
      .then((object) => {
        setItems(object.items);
      });
  }, []);
  return (
    <div className="flex flex-wrap gap-4">
      {items.map((e, i) => {
        return (
          <div
            key={i}
            className="flex w-44 flex-col overflow-hidden rounded-md shadow-md"
          >
            <img
              className="object-contain"
              src={e?.volumeInfo?.imageLinks?.thumbnail}
              alt={e?.volumeInfo?.title}
            />
            <div className="rounded-md px-4">
              <h2 className="mt-6 text-xl font-bold">{e?.volumeInfo?.title}</h2>
              <h3 className="my-2 text-sm">{e?.volumeInfo?.authors}</h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Search;
