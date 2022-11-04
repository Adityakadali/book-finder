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
    <div className="py-10">
      <h1 className="text-xl font-bold">Showing results for {key}</h1>
      {items.map((e, i) => {
        return (
          <div key={i} className="mt-7 flex flex-col gap-6">
            <div className="flex">
              <img
                className="w-48"
                src={e?.volumeInfo?.imageLinks?.smallThumbnail}
                alt={e?.volumeInfo?.title}
              />
              <div className="px-7 py-4">
                <h1 className="text-xl font-bold">{e?.volumeInfo?.title}</h1>
                <p className="mt-2">{e?.volumeInfo?.authors}</p>
              </div>
            </div>
          </div>
        );
      })}{" "}
    </div>
  );
}

export default Search;
