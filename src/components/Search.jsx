import { useState, useEffect } from "react";
import md5 from "md5";
import Characters from "./Characters";

export default function Search() {
  const [name, setName] = useState("");
  const [data, setData] = useState(null);

  const publicKey = import.meta.env.VITE_PUBLIC_KEY;
  const privateKey = import.meta.env.VITE_PRIVATE_KEY;

  useEffect(() => {
    const getCharacterData = async () => {
      setData(null);

      if (name.trim() === "") {
        return;
      }

      const ts = new Date().getTime();
      const hash = md5(ts + privateKey + publicKey);

      try {
        const response = await fetch(
          `https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&hash=${hash}&ts=${ts}&nameStartsWith=${name}&limit=100`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setData(result.data);
      } catch (error) {
        console.error("There was an error:", error);
      }
    };

    getCharacterData();
  }, [name, publicKey, privateKey]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter A Marvel Character"
        onChange={handleChange}
      />

      {data && data.results && name.trim() !== "" && (
        <Characters data={data.results} />
      )}
    </>
  );
}
