import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { UserDetailService } from "./userDetail.service";
import { UserDetailControllerBase } from "./base/userDetail.controller.base";

@swagger.ApiTags("userDetails")
@common.Controller("userDetails")
export class UserDetailController extends UserDetailControllerBase {
  constructor(protected readonly service: UserDetailService) {
    super(service);
  }
}
