import { UserAuth as TUserAuth } from "../api/userAuth/UserAuth";

export const USERAUTH_TITLE_FIELD = "otp";

export const UserAuthTitle = (record: TUserAuth): string => {
  return record.otp?.toString() || String(record.id);
};
