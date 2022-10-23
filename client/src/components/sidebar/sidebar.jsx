import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="itemTitle">ABOUT US</span>
        <img
          src="https://images.pexels.com/photos/12284667/pexels-photo-12284667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem id
          reprehenderit, at delectus hic error repellat quae eveniet magna.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="itemTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="itemTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className=" sidebarIcon fab fa-facebook"></i>
          <i className="sidebarIcon fab fa-instagram"></i>
          <i className="sidebarIcon fab fa-twitter"></i>
          <i className="sidebarIcon fab fa-linkedin"></i>
        </div>
      </div>
    </div>
  );
}
