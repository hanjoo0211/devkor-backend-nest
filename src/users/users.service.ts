import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';

// let users: object[] = [];

@Injectable()
export class UsersService {
    private users: UserDto[] = [];

    getUsers(): object[] {
        return this.users;
    }

    addUser(addUserDto: UserDto): string {
        const id: number = addUserDto.id;
        if (this.users.find(user => user.id === id)) {
            return `The ID ${id} is already exist!`;
        }
        else {
            const newUser: UserDto = addUserDto;
            this.users.push(newUser);
            return "Successfully added!";
        }
    }

    getUserById(id: number): UserDto|string {
        let userToFind: UserDto = this.users.find(user => user.id === id);
        if (!userToFind) {
            return `User ID ${id} is not found!`;
        }
        else {
            return userToFind;
        }
    }

    updateUserById(id: number, updateUserDto: UserDto): string {
        let userToFind: UserDto = this.users.find(user => user.id === id);
        if (!userToFind) {
            return `User ID ${id} is not found!`;
        }
        else {
            userToFind.age = updateUserDto.age;
            userToFind.role = updateUserDto.role;
            return "Successfully updated!"
        }
    }

    deleteUserById(id: number): string {
        let userToFind: UserDto = this.users.find(user => user.id === id);
        if (!userToFind) {
            return `User ID ${id} is not found!`;
        }
        else {
            this.users.splice(this.users.indexOf(userToFind), 1);
            return 'Successfully deleted!'
        }
    }
}
