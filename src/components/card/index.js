import React from "react";
import "./index.css";

export default function index({ data, onClick }) {
  //melakukan
  if (!data || !data.i) {
    return null; // Tidak ada data atau data tidak memiliki properti "i", maka tidak ada yang ditampilkan
  }
  return (
    <div className="card" onClick={onClick}>
      {data ? (
        <>
          <figure>
            <img src={data.i.imageUrl} alt={data.l} />
          </figure>
          <div className="card-info">
            <h3>{data.l}</h3>
            <p>{data.q}</p>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
