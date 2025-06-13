import * as graphql from "@nestjs/graphql";
import { UserAuthResolverBase } from "./base/userAuth.resolver.base";
import { UserAuth } from "./base/UserAuth";
import { UserAuthService } from "./userAuth.service";

@graphql.Resolver(() => UserAuth)
export class UserAuthResolver extends UserAuthResolverBase {
  constructor(protected readonly service: UserAuthService) {
    super(service);
  }
}
