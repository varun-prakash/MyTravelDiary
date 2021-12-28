import "./Single.css";
import Post from "../../components/post/post";
import Sidebar from "../../components/sidebar/sidebar";
import SinglePost from "../../components/singlePost/singlePost";

export default function Single() {
  return (
    <div>
      <SinglePost />
      <Sidebar />
    </div>
  );
}
