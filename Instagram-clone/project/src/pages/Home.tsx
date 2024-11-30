import React from 'react';
import { Header } from '../components/Header';
import { Stories } from '../components/Stories';
import { Post } from '../components/Post';
import { Suggestions } from '../components/Suggestions';

const posts = [
  {
    id: '1',
    user: {
      id: '1',
      username: 'john_doe',
      fullName: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
      isVerified: true,
    },
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?w=1200&h=1200&fit=crop',
    caption: 'Beautiful sunset at the beach! 🌅 #nature #photography',
    likes: 1234,
    comments: [],
    timestamp: new Date(),
  },
  {
    id: '2',
    user: {
      id: '2',
      username: 'jane_smith',
      fullName: 'Jane Smith',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    image: 'https://images.unsplash.com/photo-1682687221038-404670f09ef1?w=1200&h=1200&fit=crop',
    caption: 'Coffee time ☕️ #coffeelover',
    likes: 856,
    comments: [],
    timestamp: new Date(),
  },
];

export function Home() {
  return (
    <div className="bg-gray-50 min-h-screen pt-16">
      <Header />
      
      <main className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <Stories />
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
        
        <div className="col-span-1">
          <Suggestions />
        </div>
      </main>
    </div>
  );
}