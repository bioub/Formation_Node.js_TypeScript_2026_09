import { Controller, Get, NotFoundException } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {

    // throw new NotFoundException('User not found');

    return this.appService.getHello();
  }
}
