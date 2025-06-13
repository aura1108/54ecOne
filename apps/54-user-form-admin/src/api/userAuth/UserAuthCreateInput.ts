import { UserDetailCreateNestedManyWithoutUserAuthsInput } from "./UserDetailCreateNestedManyWithoutUserAuthsInput";

export type UserAuthCreateInput = {
  otp?: string | null;
  pan: string;
  phoneNumber: string;
  userDetails?: UserDetailCreateNestedManyWithoutUserAuthsInput;
  verified: boolean;
};
