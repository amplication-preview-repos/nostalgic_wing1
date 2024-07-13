import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type FollowWhereInput = {
  id?: StringFilter;
  following?: StringNullableFilter;
  follower?: StringNullableFilter;
};
