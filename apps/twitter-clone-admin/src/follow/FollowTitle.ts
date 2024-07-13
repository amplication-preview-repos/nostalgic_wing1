import { Follow as TFollow } from "../api/follow/Follow";

export const FOLLOW_TITLE_FIELD = "following";

export const FollowTitle = (record: TFollow): string => {
  return record.following?.toString() || String(record.id);
};
