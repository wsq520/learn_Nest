import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("用户")
@Controller('users')
export class UsersController {
  // 依赖注入方式 引入service
  constructor(private readonly usersService: UsersService) {}

  // 使用装饰器修饰方法 表示使用Post请求 括号为路由
  @Post('create')
  // 接口的描述
  @ApiOperation({summary: '添加用户'})
  // @Body()就是把请求体中body的数据拿到 赋值给后面的变量createUserDto
  //  CreateUserDto实际上就是变量createUserDto的类型 这里对该变量进行类型约束
  create(@Body() createUserDto: CreateUserDto) {
    // return this.usersService.create(createUserDto);
    return createUserDto
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
