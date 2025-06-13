import { Module } from "@nestjs/common";
import { UserAuthModuleBase } from "./base/userAuth.module.base";
import { UserAuthService } from "./userAuth.service";
import { UserAuthController } from "./userAuth.controller";
import { UserAuthResolver } from "./userAuth.resolver";

@Module({
  imports: [UserAuthModuleBase],
  controllers: [UserAuthController],
  providers: [UserAuthService, UserAuthResolver],
  exports: [UserAuthService],
})
export class UserAuthModule {}
