import {Controller, Get} from "@nestjs/common";
import {UserService} from "./user.service";
import {ApiOperation, ApiTags} from "@nestjs/swagger";

@Controller('users')
@ApiTags('users')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    @ApiOperation({ summary: "user에 대한 정보를 조회합니다."})
    getUserDate() {
        return this.userService.getUserDate();
    }
}