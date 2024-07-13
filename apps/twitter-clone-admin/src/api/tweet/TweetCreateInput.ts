import { CommentCreateNestedManyWithoutTweetsInput } from "./CommentCreateNestedManyWithoutTweetsInput";
import { LikeCreateNestedManyWithoutTweetsInput } from "./LikeCreateNestedManyWithoutTweetsInput";

export type TweetCreateInput = {
  content?: string | null;
  comments?: CommentCreateNestedManyWithoutTweetsInput;
  author?: string | null;
  likes?: LikeCreateNestedManyWithoutTweetsInput;
};
