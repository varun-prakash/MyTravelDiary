import "./singlePost.css";

export default function singlePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/10298360/pexels-photo-10298360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          className="singlPostImg"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          <div className="postEdit">
            <i className="postIcon fas fa-edit"></i>
            <i className="postIcon fas fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="postAuthor">
            Author: <b>Varun Prakash</b>
          </span>
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          modi ducimus? Quo expedita quod quae voluptatem est ad enim, corrupti
          aspernatur voluptatibus rerum a at velit dicta in deleniti dolore.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          modi ducimus? Quo expedita quod quae voluptatem est ad enim, corrupti
          aspernatur voluptatibus rerum a at velit dicta in deleniti dolore.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          modi ducimus? Quo expedita quod quae voluptatem est ad enim, corrupti
          aspernatur voluptatibus rerum a at velit dicta in deleniti dolore.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          modi ducimus? Quo expedita quod quae voluptatem est ad enim, corrupti
          aspernatur voluptatibus rerum a at velit dicta in deleniti dolore.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          modi ducimus? Quo expedita quod quae voluptatem est ad enim, corrupti
          aspernatur voluptatibus rerum a at velit dicta in deleniti dolore.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          modi ducimus? Quo expedita quod quae voluptatem est ad enim, corrupti
          aspernatur voluptatibus rerum a at velit dicta in deleniti dolore.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          modi ducimus? Quo expedita quod quae voluptatem est ad enim, corrupti
          aspernatur voluptatibus rerum a at velit dicta in deleniti dolore.
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
          modi ducimus? Quo expedita quod quae voluptatem est ad enim, corrupti
          aspernatur voluptatibus rerum a at velit dicta in deleniti dolore.
        </p>
      </div>
    </div>
  );
}
