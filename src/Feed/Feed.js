import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel/StoryReel';
import MessageSender from './MessageSender/MessageSender';
import Post from './Post/Post';

function Feed() {
  return (
    <div className='feed'>
      <StoryReel />
      <MessageSender />

      <Post
        profilePic='https://avatars1.githubusercontent.com/u/59509899?s=400&u=deb281d291b0b15bb715e2f20e4c20842ce7c752&v=4'
        image='https://static.toiimg.com/photo/msid-73070532/73070532.jpg?resizemode=4&width=400'
        username='Sonny Tonight'
        timestamp='Thi is now!'
        message='Hello brothers'
      />

      {/* Posts */}
    </div>
  )
}

export default Feed
