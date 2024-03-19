import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import md5 from "md5";
import axios from "axios";

// importing component
import ComicList from "../components/ComicList";

export default function CharacterPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);

  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_PRIVATE_KEY;

  useEffect(() => {
    const fetchCharacter = async () => {
      const ts = new Date().getTime();
      const hash = md5(`${ts}${privateKey}${publicKey}`);
      try {
        const response = await axios.get(
          `https://gateway.marvel.com/v1/public/characters/${id}`,
          {
            params: {
              ts: ts,
              apikey: publicKey,
              hash: hash,
            },
          }
        );
        setCharacter(response.data.data.results[0]);
      } catch (error) {
        console.error("Unexpected Error! ", error);
      }
    };
    fetchCharacter();
  }, [id, publicKey, privateKey]);

  return (
    <div className="characterDetailBox">
      <h2>{character?.name}</h2>
      <p>{character?.description || "Description Not Provided By API"}</p>
      <h3>Notable Appearances</h3>
      <ComicList comics={character?.comics.items || []} />
      <Link className="backButton" to="/">
        Back
      </Link>
    </div>
  );
}
