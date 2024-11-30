import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, PlusSquare, Heart, User } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';

export function Header() {
  const user = useAuthStore((state) => state.user);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold">Instagram</Link>
        
        <div className="flex-1 max-w-xs mx-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-gray-100 rounded-lg py-1.5 px-4 pl-10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
          </div>
        </div>

        <nav className="flex items-center space-x-6">
          <Link to="/" className="hover:text-gray-600"><Home className="w-6 h-6" /></Link>
          <Link to="/explore" className="hover:text-gray-600"><Search className="w-6 h-6" /></Link>
          <Link to="/create" className="hover:text-gray-600"><PlusSquare className="w-6 h-6" /></Link>
          <Link to="/activity" className="hover:text-gray-600"><Heart className="w-6 h-6" /></Link>
          <Link to="/profile" className="hover:text-gray-600">
            {user?.avatar ? (
              <img src={user.avatar} alt="Profile" className="w-6 h-6 rounded-full" />
            ) : (
              <User className="w-6 h-6" />
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}