import MyPosts from "./MyPosts/MyPosts";
import styles from "./Profile.module.css";

const Profile = () => {
  return (
    <div >
      <img src="https://images.unsplash.com/photo-1468434453985-b1ca3b555f00?ixlib=rb-4.0.3" alt="main img" />

      <div>descr</div>

      <MyPosts />
    </div>
  );
};

export default Profile;
