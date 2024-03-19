import React from "react";

export default function ComicList({ comics }) {
  return (
    <ul>
      {comics.map((comic) => (
        <li key={comic.resourceURI}>{comic.name}</li>
      ))}
    </ul>
  );
}
