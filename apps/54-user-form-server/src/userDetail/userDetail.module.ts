import { Module } from "@nestjs/common";
import { UserDetailModuleBase } from "./base/userDetail.module.base";
import { UserDetailService } from "./userDetail.service";
import { UserDetailController } from "./userDetail.controller";
import { UserDetailResolver } from "./userDetail.resolver";

@Module({
  imports: [UserDetailModuleBase],
  controllers: [UserDetailController],
  providers: [UserDetailService, UserDetailResolver],
  exports: [UserDetailService],
})
export class UserDetailModule {}
