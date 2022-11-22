import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  // 使用 swagger 和 TS进行参数约束
  @ApiProperty({ description: '邮箱' })
  email: string
  @ApiProperty({ description: '密码', default: '123456' })
  password: string
}
