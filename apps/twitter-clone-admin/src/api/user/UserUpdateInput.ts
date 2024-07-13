import { InputJsonValue } from "../../types";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  bio?: string | null;
  avatar?: InputJsonValue;
  likes?: LikeUpdateManyWithoutUsersInput;
  comments?: CommentUpdateManyWithoutUsersInput;
};
