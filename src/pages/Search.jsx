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
  });

  return (
    <ul>
      {items.map((e, i) => {
        return (
          <li key={i}>
            {e?.volumeInfo?.title} - {e?.volumeInfo?.averageRating}
          </li>
        );
      })}
    </ul>
  );
}

export default Search;
