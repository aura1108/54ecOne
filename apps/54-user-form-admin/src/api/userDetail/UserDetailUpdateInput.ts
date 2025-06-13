import { UserAuthWhereUniqueInput } from "../userAuth/UserAuthWhereUniqueInput";

export type UserDetailUpdateInput = {
  dateofbirth?: Date;
  email?: string;
  name?: string;
  occupation?: string | null;
  pan?: string;
  userAuth?: UserAuthWhereUniqueInput;
};
