import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserAuthWhereUniqueInput } from "../userAuth/UserAuthWhereUniqueInput";

export type UserDetailWhereInput = {
  dateofbirth?: DateTimeFilter;
  email?: StringFilter;
  id?: StringFilter;
  name?: StringFilter;
  occupation?: StringNullableFilter;
  pan?: StringFilter;
  userAuth?: UserAuthWhereUniqueInput;
};
