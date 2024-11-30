import React from 'react';

const stories = [
  {
    id: '1',
    username: 'your_story',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&h=150&fit=crop',
    isUser: true,
  },
  {
    id: '2',
    username: 'john_doe',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  },
  {
    id: '3',
    username: 'jane_smith',
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop',
  },
];

export function Stories() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
      <div className="flex space-x-4 overflow-x-auto">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center space-y-1 flex-shrink-0">
            <div className={`w-16 h-16 rounded-full p-[2px] ${story.isUser ? 'bg-gray-200' : 'bg-gradient-to-tr from-yellow-400 to-pink-600'}`}>
              <img
                src={story.avatar}
                alt={story.username}
                className="w-full h-full rounded-full border-2 border-white"
              />
            </div>
            <span className="text-xs">{story.username}</span>
          </div>
        ))}
      </div>
    </div>
  );
}