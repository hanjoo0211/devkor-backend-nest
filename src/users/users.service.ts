import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) {}

    getUsers(): Promise<Users[]> {
        return this.usersRepository.find();
    }

    async addUser(addUserDto: UserDto): Promise<void> {
        await this.usersRepository.insert(addUserDto);
    }

    getUserById(id: number): Promise<Users> {
        return this.usersRepository.findOneBy({ id });
    }

    async updateUserById(id: number, updateUserDto: UserDto): Promise<void> {
        await this.usersRepository.update(id, { age: updateUserDto.age, role: updateUserDto.role });
    }

    async deleteUserById(id: number): Promise<void> {
        await this.usersRepository.delete(id);
    }
}
