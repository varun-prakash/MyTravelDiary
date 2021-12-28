import "./sidebar.css";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="itemTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/9944621/pexels-photo-9944621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
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
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Personal Experience</li>
          <li className="sidebarListItem">News</li>
          <li className="sidebarListItem">Society</li>
          <li className="sidebarListItem">Entertainment</li>
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
