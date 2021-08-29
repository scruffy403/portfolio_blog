import React, { useEffect, useState } from "react";

const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
      );
      const data = await res.json();
      setPhotoData(data);
    }
  }, []);

  if (!photoData) return <div></div>;

  return (
    <div className="bg-gray-700 flex p-10 mt-0 mb-0 mr-auto m-auto max-h-full">
      {photoData.media_type === "image" ? (
        <img
          className="w-1/2 md:w-auto md:h-auto md:h-full mr-11 object-contain max-h-screen md:mb-7 md:mb-0 "
          src={photoData.url}
          alt={photoData.title}
        />
      ) : (
        <iframe
          title="space-video"
          src={photoData.url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="photo"
        />
      )}
      <div>
        <h1 className="font-bold cursive text-4xl text-center mt-0 mb-0">
          {photoData.title}
        </h1>
        <p className="mt-0 mb-7 text-center">{photoData.date}</p>
        <p className="text-justify text-xl">{photoData.explanation}</p>
      </div>
    </div>
  );
}
