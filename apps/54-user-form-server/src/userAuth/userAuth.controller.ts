import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserAuthService } from "./userAuth.service";
import { UserAuthControllerBase } from "./base/userAuth.controller.base";

@swagger.ApiTags("userAuths")
@common.Controller("userAuths")
export class UserAuthController extends UserAuthControllerBase {
  constructor(protected readonly service: UserAuthService) {
    super(service);
  }
}
