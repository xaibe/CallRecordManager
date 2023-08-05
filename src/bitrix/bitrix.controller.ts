import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BitrixService } from './bitrix.service';
import { CreateBitrixDto } from './dto/create-bitrix.dto';
import { UpdateBitrixDto } from './dto/update-bitrix.dto';

@Controller('bitrix')
export class BitrixController {
  constructor(private readonly bitrixService: BitrixService) {}
  
@Post('/webhook')
async handleWebhook(
  @Body() payload: any, 
  ): Promise<void> {
 console.log("payload",payload);
 
  }

  @Post()
  create(@Body() createBitrixDto: CreateBitrixDto) {
    return this.bitrixService.create(createBitrixDto);
  }

  @Get()
  findAll() {
    return this.bitrixService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bitrixService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBitrixDto: UpdateBitrixDto) {
    return this.bitrixService.update(+id, updateBitrixDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bitrixService.remove(+id);
  }
}
