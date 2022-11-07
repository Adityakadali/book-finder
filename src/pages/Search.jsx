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
  }, []);

  return (
    <div className="py-10">
      <h1 className="text-xl font-bold">Showing results for {key}</h1>
      <div className="md: grid grid-cols-1 md:grid-cols-2">
        {items.map((e, i) => {
          return (
            <div key={i} className="mt-7">
              <div className="flex">
                <img
                  className="w-20"
                  src={e?.volumeInfo?.imageLinks?.smallThumbnail}
                  alt={e?.volumeInfo?.title}
                />
                <div className="px-7 py-4">
                  <h1 className="text-lg font-bold">{e?.volumeInfo?.title}</h1>
                  <p className="mt-2">
                    <span className="font-bold">Author: </span>
                    {e?.volumeInfo?.authors}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Search;
