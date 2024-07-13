import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";

export type Tweet = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  comments?: Array<Comment>;
  author: string | null;
  likes?: Array<Like>;
};
