import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";

function Explore() {
  const DataURL = "https://example-data.draftbit.com/books?_limit=10";
  const [data, setData] = useState([]);
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  useEffect(() => {
    fetch(DataURL)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <h1 className="mb-10 mt-4 text-3xl font-bold">Trending Books</h1>
      <Slider {...settings}>
        {data.map((e, i) => {
          const { title, image_url } = e;
          return (
            <div className="px-4">
              <img
                className="mx-auto mt-4 h-60"
                key={i}
                src={image_url}
                alt={title}
              />

              <h2 className="mt-4 text-center font-bold">{title}</h2>
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export default Explore;
