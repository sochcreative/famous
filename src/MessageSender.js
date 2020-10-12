import { Avatar } from '@material-ui/core';
import React,{useState} from 'react';
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";



function MessageSender() {
    const[input , setInput] = useState("");
    const[imageURL , setimageURL] = useState("");
    const [ {user} , dispatch ]= useStateValue();

    const handleSubmit = (e) =>{
        e.preventDefault();

//Firebase Db Connection is here

db.collection('posts').add({
    message: input,
    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    profilePic: user.photoURL,
    username: user.displayName,
    image: imageURL,
})




        setInput("");
        setimageURL("");

    }
    return (
        <div className="messageSender">

        <div className="messageSenderTop">
            <Avatar src={user.photoURL} />

            <form>
                <input value={input}
                onChange={(e) => setInput(e.target.value)}
                 className="messageSenderInput" placeholder={`What's on your mind, ${user.displayName}?`} />

                <input value={imageURL}
                onChange={(e) => setimageURL(e.target.value)}
                 placeholder={`image URL (optional)`} />

                <button onClick={handleSubmit} type="submit">Hidden Submit</button>
            </form>
        </div>
        <div className="messageSenderBottom">
                <div className="messageSenderOption">
                    <VideocamIcon style={{color:"red"}} />
                    <h3>Live Video</h3>
                </div>
                <div className="messageSenderOption">
                    <PhotoLibraryIcon style={{color:"green"}} />
                    <h3>Photo/Video</h3>
                </div>
              
                <div className="messageSenderOption">
                    <InsertEmoticonIcon style={{color:"orange"}} />
                    <h3>Feeling/Activity</h3>
                </div>
        </div>
            
        </div>
    )
}

export default MessageSender;
