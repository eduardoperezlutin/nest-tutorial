import { Controller, Get, Post, HttpCode, Header, Param } from '@nestjs/common';

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  @HttpCode(204)
  create() {
    return 'This adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }

  @Get(':id')
  findOne(@Param('id') id): string {
    console.log(id);
    return `This action returns a #${id} cat`;
  }
}
