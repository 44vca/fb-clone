import React, { useState, useEffect } from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';
import { useStateValue } from '../StateProvider';
import db from '../firebase';

function Feed() {
  const [posts, setPosts] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    db.collection('posts').orderBy('timestamp', 'desc')
      .onSnapshot(snapshot =>
        setPosts(snapshot.docs.map(doc => (
          { id: doc.id, data: doc.data() })))
      );
  }, []);

  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      {posts.map(post => (
        <Post
          key={post.data.id}
          profilePic={post.data.profilePic}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          image={post.data.image}
        />
      ))}

      {/* Posts */}
    </div>
  )
}

export default Feed
