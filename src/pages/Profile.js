import { Fragment } from "react";
import CardProfile from "../components/CardProfile";
import "./Profile.css";
export default function Movie() {
  const data = [
    {
      name: "Nis ",
      id: 1,
      rate: 4,
      NIM: "21111111",
      img1: "https://i.pinimg.com/564x/12/69/10/1269106e5cb919b6654f48062c0e053b.jpg",
    },
    {
      name: "Leon",
      id: 2,
      rate: 4,
      NIM: "2111111",
      img1: "https://i.pinimg.com/564x/12/69/10/1269106e5cb919b6654f48062c0e053b.jpg",
    },
    {
      name: "Roy",
      id: 3,
      rate: 4,
      NIM: "21111111",
      img1: "https://i.pinimg.com/564x/12/69/10/1269106e5cb919b6654f48062c0e053b.jpg",
    },
    {
      name: "AB",
      id: 4,
      rate: 4,
      NIM: "21111111",
      img1: "https://i.pinimg.com/564x/12/69/10/1269106e5cb919b6654f48062c0e053b.jpg",
    },
  ];
  return (
    <>
      <div className="text-container">
        <div className="con">
          <p className="text">Anggota Kelompok 5</p>
        </div>
      </div>
      {data.map((item, index) => (
        <Fragment key={item.id}>
          <CardProfile name={item.name} img1={item.img1} NIM={item.NIM} onClick={() => alert("item id = " + item.id)} />
          {data.length === index + 1 && (
            <div
              style={{
                marginBottom: 80,
              }}
            />
          )}
        </Fragment>
      ))}
    </>
  );
}
