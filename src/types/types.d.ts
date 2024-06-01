export type IRegisterAuth = {
  email: string;
  username: string;
  fullname: string;
  password: string;
};

export interface IThreadImage {
  image?: string;
}

export interface IThread {
  id?: number;
  content?: string;
  ThreadImage?: IThread[];
  postedAt?: string;
  userId: number;
  threadId?: number;
  author?: IUser;
  _count?: ICount;
}

export interface IThreadPost {
  id?: number;
  content?: string;
  ThreadImage?: IThread[];
  postedAt?: string;
  userId: number;
  threadId?: number;
  author?: IUser;
}

export interface IUser {
  id: number;
  username: string;
  fullname: string;
  email: string;
  threads: IThread[];
  profile: IProfile;
  following: IFollowing[];
  follower: IFollowers[];
}

export interface IFollowing {
  followingId?: number;
}

export interface IFollowers {
  followerId?: number;
}

export interface ICount {
  replies?: number;
  like?: number;
}

export interface IProfile {
  bio?: string;
  cover?: string;
  avatar?: string;
  user: IUser;
}

export interface IProfileSearch {
  avatar?: string;
  bio?: string;
}

export interface IUserSearch {
  id: number;
  email: string;
  fullname: string;
  password: string;
  username: string;
  profile: IProfileSearch;
  following: IFollowing[];
  follower: IFollowers[];
}

export interface IOtherUser {
  id: number;
  username: string;
  fullname: string;
  avatar: string;
}

export interface IProfileUser {
  id: number;
  username: string;
  fullname: string;
  email: string;
  profile: IProfile;
  threads: IThread[]
  follower: IFollowers[];
  following: IFollowing[];
}

export interface IFollowersUser {
  id: number;
  username: string;
  fullname: string;
  profile: {
    avatar: string;
  };
}

export interface IFollowingUser {
  id: number;
  username: string;
  fullname: string;
  profile: {
    avatar: string;
  };
}
