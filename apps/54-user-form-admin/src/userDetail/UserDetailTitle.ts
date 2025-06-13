import { UserDetail as TUserDetail } from "../api/userDetail/UserDetail";

export const USERDETAIL_TITLE_FIELD = "name";

export const UserDetailTitle = (record: TUserDetail): string => {
  return record.name?.toString() || String(record.id);
};
