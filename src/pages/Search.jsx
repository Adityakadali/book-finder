import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Search() {
  const GOOGLE_BOOKS_API =
    "https://www.googleapis.com/books/v1/volumes?q=intitle:";
  const [items, setItems] = useState([]);
  let { key } = useParams();
  useEffect(() => {
    fetch(`${GOOGLE_BOOKS_API}${key}`)
      .then((response) => response.json())
      .then((object) => {
        setItems(object.items);
      });
  }, [key]);

  return (
    <div className="py-10">
      <h1 className="text-xl font-bold">Showing results for {key}</h1>
      <div className="grid-cols-1 md:grid md:grid-cols-2">
        {items.map((e, i) => {
          return (
            <div key={i} className=" mt-6 flex">
              <img
                className="w-20"
                src={e?.volumeInfo?.imageLinks?.smallThumbnail}
                alt={e?.volumeInfo?.title}
              />
              <div className="px-7 py-4">
                <h2 className="text-lg font-bold">{e?.volumeInfo?.title}</h2>
                <p className="mt-2">
                  <span className="font-bold">Author: </span>
                  {e?.volumeInfo?.authors}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
