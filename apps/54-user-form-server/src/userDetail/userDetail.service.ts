import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserDetailServiceBase } from "./base/userDetail.service.base";

@Injectable()
export class UserDetailService extends UserDetailServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
