import React from 'react';

const suggestions = [
  {
    id: '1',
    username: 'photography_lover',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop',
    followedBy: 'john_doe',
  },
  {
    id: '2',
    username: 'travel_enthusiast',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop',
    followedBy: 'jane_smith',
  },
];

export function Suggestions() {
  return (
    <div className="bg-white rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold text-gray-500">Suggestions For You</span>
        <button className="text-sm font-semibold">See All</button>
      </div>

      {suggestions.map((suggestion) => (
        <div key={suggestion.id} className="flex items-center justify-between mb-3">
          <div className="flex items-center">
            <img
              src={suggestion.avatar}
              alt={suggestion.username}
              className="w-8 h-8 rounded-full"
            />
            <div className="ml-3">
              <div className="text-sm font-semibold">{suggestion.username}</div>
              <div className="text-xs text-gray-500">
                Followed by {suggestion.followedBy}
              </div>
            </div>
          </div>
          <button className="text-xs font-semibold text-blue-500">Follow</button>
        </div>
      ))}
    </div>
  );
}