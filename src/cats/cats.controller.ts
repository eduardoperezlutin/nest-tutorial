import { Controller, Get, Req, Post } from '@nestjs/common';
import { create } from 'istanbul-reports';

@Controller('cats')
export class CatsController {
  @Post()
  create(): string {
    return 'This adds a new cat';
  }

  @Get()
  findAll(@Req() request: Request): string {
    return 'This action returns all cats';
  }
}
