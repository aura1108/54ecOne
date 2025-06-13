import * as graphql from "@nestjs/graphql";
import { UserDetailResolverBase } from "./base/userDetail.resolver.base";
import { UserDetail } from "./base/UserDetail";
import { UserDetailService } from "./userDetail.service";

@graphql.Resolver(() => UserDetail)
export class UserDetailResolver extends UserDetailResolverBase {
  constructor(protected readonly service: UserDetailService) {
    super(service);
  }
}
