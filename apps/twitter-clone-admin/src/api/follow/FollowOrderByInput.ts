import { SortOrder } from "../../util/SortOrder";

export type FollowOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  following?: SortOrder;
  follower?: SortOrder;
};
