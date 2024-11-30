import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react';
import type { Post as PostType } from '../types';

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <article className="bg-white border border-gray-200 rounded-lg mb-4">
      <div className="p-4 flex items-center">
        <img
          src={post.user.avatar}
          alt={post.user.username}
          className="w-8 h-8 rounded-full"
        />
        <div className="ml-3">
          <span className="font-semibold">{post.user.username}</span>
          {post.user.isVerified && (
            <span className="ml-1 text-blue-500">✓</span>
          )}
        </div>
      </div>

      <img src={post.image} alt="" className="w-full" />

      <div className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsLiked(!isLiked)}
              className={`hover:text-gray-600 ${isLiked ? 'text-red-500' : ''}`}
            >
              <Heart className="w-6 h-6" fill={isLiked ? 'currentColor' : 'none'} />
            </button>
            <button className="hover:text-gray-600">
              <MessageCircle className="w-6 h-6" />
            </button>
            <button className="hover:text-gray-600">
              <Send className="w-6 h-6" />
            </button>
          </div>
          <button className="hover:text-gray-600">
            <Bookmark className="w-6 h-6" />
          </button>
        </div>

        <div className="font-semibold mb-2">{post.likes.toLocaleString()} likes</div>

        <div className="space-y-2">
          <p>
            <span className="font-semibold mr-2">{post.user.username}</span>
            {post.caption}
          </p>
          {post.comments.length > 0 && (
            <button className="text-gray-500">
              View all {post.comments.length} comments
            </button>
          )}
        </div>

        <time className="text-xs text-gray-500 mt-2 block">
          {new Date(post.timestamp).toLocaleDateString()}
        </time>
      </div>

      <div className="p-4 border-t">
        <input
          type="text"
          placeholder="Add a comment..."
          className="w-full outline-none"
        />
      </div>
    </article>
  );
}