import { UserDetailWhereInput } from "./UserDetailWhereInput";
import { UserDetailOrderByInput } from "./UserDetailOrderByInput";

export type UserDetailFindManyArgs = {
  where?: UserDetailWhereInput;
  orderBy?: Array<UserDetailOrderByInput>;
  skip?: number;
  take?: number;
};
