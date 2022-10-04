import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get()
    getUsers(): object[] {
        return this.usersService.getUsers();
    }

    @Post()
    addUser(@Body() addUserDto: UserDto): string {
        return this.usersService.addUser(addUserDto);
    }

    @Get(':id')
    getUserById(@Param('id') id: number): UserDto|string {
        return this.usersService.getUserById(id);
    }

    @Put(':id')
    updateUser(@Param('id') id: number, @Body() updateUserDto: UserDto): string {
        return this.usersService.updateUserById(id, updateUserDto);
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number): string {
        return this.usersService.deleteUserById(id);
    }
}
