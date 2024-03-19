import React from "react";
import { Link } from "react-router-dom";

export default function Characters({ data }) {
  return (
    <div className="characters">
      {data.map((characterInfo) => {
        return (
          <Link
            key={characterInfo.id}
            to={`/character/${characterInfo.id}`}
            className="card"
            style={{
              background: `url(${characterInfo.thumbnail.path}.${characterInfo.thumbnail.extension}) no-repeat center`,
              backgroundSize: "cover",
            }}
          >
            <div className="cardTitle">{characterInfo.name}</div>
          </Link>
        );
      })}
    </div>
  );
}
