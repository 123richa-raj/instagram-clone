export interface User {
  id: string;
  username: string;
  fullName: string;
  avatar: string;
  isVerified?: boolean;
}

export interface Post {
  id: string;
  user: User;
  image: string;
  caption: string;
  likes: number;
  comments: Comment[];
  timestamp: Date;
}

export interface Comment {
  id: string;
  user: User;
  content: string;
  timestamp: Date;
}