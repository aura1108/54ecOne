import { UserDetailUpdateManyWithoutUserAuthsInput } from "./UserDetailUpdateManyWithoutUserAuthsInput";

export type UserAuthUpdateInput = {
  otp?: string | null;
  pan?: string;
  phoneNumber?: string;
  userDetails?: UserDetailUpdateManyWithoutUserAuthsInput;
  verified?: boolean;
};
