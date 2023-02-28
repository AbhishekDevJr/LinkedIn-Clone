import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import FeedPost from './FeedPost';
import { db } from './firebase';
import firebase from './firebase/compat/app';

function Feed(){
    const [inputState, setInputState] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id : doc.id,
                    data : doc.data(),
                }
            )))
        ))
    }, []);

    const handleChange = (event) => {
        setInputState(event.target.value);
    }

    function submitHandler(event){
        event.preventDefault();

        db.collection('posts').add({
            name : 'Abhishek Choudhari',
            title : 'This is a test Title',
            postContent : inputState,
            userPhotoUrl : '',
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInputState('');
    }

    let someContent = `Computer Science Student:

    - School
    DS&A, OOP, Computer Architecture, Linear Algebra, Java/C++/Python, Operating Systems, Calculus, Parallel Computing, Concurrency
    
    - Interview
    Arrays, Strings, Graphs, Sorting, Trees, Binary Search, BFS, DFS, Dynamic Programming, Linked Lists, Stacks, Queues,
    
    - Work
    Code Reviews, Angular, Scala, GoLang, Swift, RESTful Apis, CRUD Databases, SOLID Principles, Unit/Integration testing, Sprint planning, SCRUM, CI/CD, Version Control, System Design,
    `;
    return(
        <div className = "feed">
            <div className = "feed-top">
                <div className = "top-row1">
                    <a href = "#"><img src = "SidebarProfileImage.JPEG" alt = "Profile Picture SideBar" /></a>
                    <form onSubmit = {submitHandler}>
                        <input value = {inputState} type = "text" name = "post" placeholder = "Start a post" onChange = {handleChange} />
                    </form>
                </div>

                <div className = "top-row2">
                    <div className = "row2-item1">
                        <img src = "icons8-gallery-40.png" alt = "Photo Icon" />
                        <p>Photo</p>
                    </div>

                    <div className = "row2-item2">
                        <img src = "icons8-youtube-50.png" alt = "Video Icon" />
                        <p>Video</p>
                    </div>

                    <div className = "row2-item3">
                        <img src = "icons8-tear-off-calendar-80.png" alt = "Event Icon" />
                        <p>Event</p>
                    </div>

                    <div className = "row2-item4">
                        <img src = "icons8-news-48.png" alt = "Write Icon" />
                        <p>Write article</p>
                    </div>
                </div>
            </div>

            <div className = "feed-divider">
                <button id = "btn">
                    <div className = "divider-line"></div>
                    <p>Sort by: <strong>Top +</strong></p>
                </button>
            </div>

            {/* FeedPost Component */}

            {posts.map(({ id, data:{ name, title, postContent, userPhotoUrl } }) => {
                return(
                    <FeedPost
                    key = {id}
                    name = {name}
                    title = {title}
                    postContent = {postContent}
                    userPhotoUrl = {userPhotoUrl} 
                />
                ); 
            })}

            {/* <FeedPost 
            name = "Harvey Specter" 
            title = "Attorney/Managing Partner/ Best Closer" 
            postContent = {someContent} 
            /> */}
        </div>
    );
}

export default Feed;