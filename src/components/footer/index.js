import React from "react";
import { GrGroup } from "react-icons/gr";
import { BiCameraMovie } from "react-icons/bi";
import "./index.css";

export default function Footer() {
  return (
    <footer>
      <nav>
        <ul>
          <li>
            <BiCameraMovie className="icon" />
            Movie
          </li>
          <li>
            <GrGroup className="icon" />
            Profile
          </li>
        </ul>
      </nav>
    </footer>
  );
}
