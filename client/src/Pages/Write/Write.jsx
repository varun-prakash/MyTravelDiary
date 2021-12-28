import "./Write.css";

export default function Write() {
  return (
    <div className="write">
      <img
        src="https://images.pexels.com/photos/9880331/pexels-photo-9880331.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        className="writeImg"
        alt=""
      />
      <div className="writeForm">
        <div className="formGroup">
          <label htmlFor="fileInput">
            <i className=" writeFile fas fa-plus-square"></i>
          </label>
          <input type="file" id="fileInput" style={{ display: "none" }} />
          <input
            type="text"
            autoFocus={true}
            placeholder="Title"
            className="writeInput"
          />
        </div>
        <div className="formGroup">
          <textarea
            placeholder="Write here..."
            className="writeInput writeText"
          ></textarea>
        </div>

        <button className="submit">Publish</button>
      </div>
    </div>
  );
}
