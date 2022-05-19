import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";



const MyPosts = (props) => {

// ________Кнопка с колбеком___________

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  }


let postElements = 
props.postData.map( (p) => <Post message = {p.message} like = {p.like} />);


  let onPostChange = (e) => {
    let text = e.target.value;
      props.dispatch(updateNewPostTextActionCreator(text));
  }
    return (
    <div className={s.content}>
      <div className={s.item}><h3>My posts</h3></div>
      <div>
      <textarea onChange={onPostChange}  value={props.newPostText} />

        </div>


        <div className="_____ПРОВЕРКА КНОООПКИ_________">
        <button onClick = { addPost }>Add</button>  
      </div>


      <div className={s.posts}>
      { postElements }
      </div>
      
    </div>
  );
};
export default MyPosts;
