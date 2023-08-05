import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BitrixService } from './bitrix.service';
import { CreateBitrixDto } from './dto/create-bitrix.dto';

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


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bitrixService.remove(+id);
  }
}
