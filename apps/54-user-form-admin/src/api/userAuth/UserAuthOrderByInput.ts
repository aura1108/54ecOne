import { SortOrder } from "../../util/SortOrder";

export type UserAuthOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  otp?: SortOrder;
  pan?: SortOrder;
  phoneNumber?: SortOrder;
  updatedAt?: SortOrder;
  verified?: SortOrder;
};
