import { UserAuth } from "../userAuth/UserAuth";

export type UserDetail = {
  createdAt: Date;
  dateofbirth: Date;
  email: string;
  id: string;
  name: string;
  occupation: string | null;
  pan: string;
  updatedAt: Date;
  userAuth?: UserAuth;
};
