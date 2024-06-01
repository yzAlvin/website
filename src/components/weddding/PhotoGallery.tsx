"use client";

import { useEffect, useState } from "react";

export default function PhotoGallery() {
  const [images, setImages] = useState([]);
  const [state, setState] = useState<"NONE" | "LOADING" | "LOADED">("NONE");

  useEffect(() => {
    async function fetchImages() {
      const response = await fetch("/wedding/gallery", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(({ images }) => {
          images.length > 0 ? setState("LOADED") : setState("NONE");
          setImages(images);
        });
      return response;
    }
    setState("LOADING");
    fetchImages();
  }, []);

  if (state === "NONE") return <p>No Images.</p>;
  if (state === "LOADING") return <p>Loading..</p>;
  if (state === "LOADED")
    return images.map((imageUrl) => <img key={imageUrl} src={imageUrl} />);
}
