import Sidebar from "../../components/sidebar/sidebar";
import "./Setting.css";

export default function Setting() {
  return (
    <div className="setting">
      <div className="settingWrapper">
        <div className="settingTitle">
          <span className="settingUpdate">Update Account Information</span>
          <span className="settingDelete">Delete Account</span>
        </div>
        <form className="settingForm">
          <label>Profile Picture</label>
          <div className="settingPP">
            <img
              src="https://images.pexels.com/photos/9940536/pexels-photo-9940536.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingIcon fas fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>User Name</label>
          <input type="text" placeholder="Varun" />
          <label>User Email</label>
          <input type="email" placeholder="varunprakash652@gmail.com" />
          <label>Password</label>
          <input type="password" />
          <button className="settingbtn">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
