import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserDetailListRelationFilter } from "../userDetail/UserDetailListRelationFilter";
import { BooleanFilter } from "../../util/BooleanFilter";

export type UserAuthWhereInput = {
  id?: StringFilter;
  otp?: StringNullableFilter;
  pan?: StringFilter;
  phoneNumber?: StringFilter;
  userDetails?: UserDetailListRelationFilter;
  verified?: BooleanFilter;
};
