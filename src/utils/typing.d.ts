export interface UserData {
  users: {
    id: number;
    firstName: string;
    lastName: string;
    maidenName: string;
    age: number;
    gender: string;
    email: string;
    phone: string;
    username: string;
    password: string;
    birthDate: string;
    image: string;
    bloodGroup: string;
    height: number;
    weight: number;
    eyeColor: string;
    hair: {
      color: string;
      type: string;
    };
    domain: string;
    ip: string;
    address: {
      address: string;
      city: string;
      coordinates: {
        lat: number;
        lng: number;
      };
      postalCode: string;
      state: string;
    };
    macAddress: string;
    university: string;
    bank: {
      cardExpire: string;
      cardNumber: string;
      cardType: string;
      currency: string;
      iban: string;
    };
    company: {
      address: {
        address: string;
        city: string;
        coordinates: {
          lat: number;
          lng: number;
        };
        postalCode: string;
        state: string;
      };
      department: string;
      name: string;
      title: string;
    };
    ein: string;
    ssn: string;
    userAgent: string;
    crypto: {
      currency: string;
      flag: string;
      price: number;
    };
  };
}

export interface PostData {
  id?: number;
  title?: string;
  body?: string;
  userId?: number;
  tags?: string[];
  reactions?: number;
  message?: string
}
export interface PostApi {
  limit?: number;
  skip?: number;
  total?: number;
  posts?: PostData[];
  message?: string;
}

export interface CommentData {
  id?: number;
  postId?: number | string;
  name?: string;
  body?: string;
  user?: {
    id?: number;
    username?: string;
  };
  message?: string
}

export interface CommentApi {
  comments?: CommentData[];
  total?: number;
  skip?: number;
  limit?: number;
  message?: string
}

export interface commentPost {
  id: number;
  body: string;
  postId: string;
  user: {
    id: number;
    username: string;
  }
  message?: string
}


export interface PostStore {
  initialPost: {
    posts: PostData[];
  };
  isSearched: boolean;
  setSearch: () => void
  replacePost: (data: any) => ReactNode | void;
  resetPost: () => void
}