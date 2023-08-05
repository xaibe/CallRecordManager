import { Injectable } from '@nestjs/common';
import { CreateBitrixDto } from './dto/create-bitrix.dto';
import { UpdateBitrixDto } from './dto/update-bitrix.dto';

@Injectable()
export class BitrixService {
  create(createBitrixDto: CreateBitrixDto) {
    return 'This action adds a new bitrix';
  }

  findAll() {
    return `This action returns all bitrix`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bitrix`;
  }

  update(id: number, updateBitrixDto: UpdateBitrixDto) {
    return `This action updates a #${id} bitrix`;
  }

  remove(id: number) {
    return `This action removes a #${id} bitrix`;
  }
}
