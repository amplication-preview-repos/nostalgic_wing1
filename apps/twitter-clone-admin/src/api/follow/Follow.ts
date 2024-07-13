export type Follow = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  following: string | null;
  follower: string | null;
};
