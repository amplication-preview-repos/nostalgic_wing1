import { JsonValue } from "type-fest";
import { Like } from "../like/Like";
import { Comment } from "../comment/Comment";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  bio: string | null;
  avatar: JsonValue;
  likes?: Array<Like>;
  comments?: Array<Comment>;
};
