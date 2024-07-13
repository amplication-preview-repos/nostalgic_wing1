import { CommentUpdateManyWithoutTweetsInput } from "./CommentUpdateManyWithoutTweetsInput";
import { LikeUpdateManyWithoutTweetsInput } from "./LikeUpdateManyWithoutTweetsInput";

export type TweetUpdateInput = {
  content?: string | null;
  comments?: CommentUpdateManyWithoutTweetsInput;
  author?: string | null;
  likes?: LikeUpdateManyWithoutTweetsInput;
};
