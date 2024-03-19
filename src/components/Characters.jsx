// import "../styles/Characters.css";

export default function Characters({ data, onClick }) {
  return (
    <div className="characters">
      {data.map((dataItem) => {
        return (
          <div
            className="card"
            key={dataItem.id}
            style={{
              background: `url(${dataItem.thumbnail.path}.${dataItem.thumbnail.extension}) no-repeat center`,
              backgroundSize: "cover",
            }}
            // onClick={() => onClick(dataItem.id)}
          >
            <div className="cardTitle">{dataItem.name}</div>
          </div>
        );
      })}
    </div>
  );
}
