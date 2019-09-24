import { Controller, Get, Req, Post, HttpCode } from '@nestjs/common';
import { create } from 'istanbul-reports';

@Controller('cats')
export class CatsController {
  @Post()
  @HttpCode(204)
  create() {
    return 'This adds a new cat';
  }

  @Get()
  findAll(): string {
    return 'This action returns all cats';
  }
}
