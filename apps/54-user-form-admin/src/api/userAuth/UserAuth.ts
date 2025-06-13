import { UserDetail } from "../userDetail/UserDetail";

export type UserAuth = {
  createdAt: Date;
  id: string;
  otp: string | null;
  pan: string;
  phoneNumber: string;
  updatedAt: Date;
  userDetails?: Array<UserDetail>;
  verified: boolean;
};
