import "./post.css";

export default function post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/5608969/pexels-photo-5608969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Entertainment</span>
          <span className="postCat">Personal Experience</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 Hour ago</span>
        <p className="postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit vero
          enim accusantium ipsum sit consequuntur, in, itaque nisi sed ad
          assumenda, quidem voluptate? Error fuga vitae voluptatum ullam nam
          aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Fugit vero enim accusantium ipsum sit consequuntur, in, itaque nisi
          sed ad assumenda, quidem voluptate? Error fuga vitae voluptatum ullam
          nam aspernatur.Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Fugit vero enim accusantium ipsum sit consequuntur, in, itaque
          nisi sed ad assumenda, quidem voluptate? Error fuga vitae voluptatum
          ullam nam aspernatur.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugit vero enim accusantium ipsum sit consequuntur,
          in, itaque nisi sed ad assumenda, quidem voluptate? Error fuga vitae
          voluptatum ullam nam aspernatur.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Fugit vero enim accusantium ipsum sit consequuntur,
          in, itaque nisi sed ad assumenda, quidem voluptate? Error fuga vitae
          voluptatum ullam nam aspernatur.
        </p>
      </div>
    </div>
  );
}
