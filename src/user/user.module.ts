import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { ExternalService } from '../external/external.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, ExternalService],
  exports: [UserModule],
})
export class UserModule {}
