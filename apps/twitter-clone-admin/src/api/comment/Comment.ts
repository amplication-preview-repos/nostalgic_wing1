import { Tweet } from "../tweet/Tweet";
import { User } from "../user/User";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  text: string | null;
  tweet?: Tweet | null;
  user?: User | null;
};
