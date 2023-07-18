import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private repository: Repository<UserEntity>,
  ) {}

  async findById(id: number) {
    return this.repository.findOneBy({
      id,
    });
  }
  async findByEmail(email: string) {
    return this.repository.findOneBy({
      email,
    });
  }
  async updateById(id: number, dto: UpdateUserDto) {
    return this.repository.update({ id }, dto);
  }
  create(dto: CreateUserDto) {
    return this.repository.save(dto);
  }
}
