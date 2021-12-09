import { Controller, Get, Post } from '@nestjs/common';
import { MenusService } from './menus.service';
import { Lunch } from '../entities/lunchLists.entity';
@Controller('menus')
export class MenusController {
  constructor(private readonly MenusService: MenusService) {}
  @Get()
  saySth(): Promise<Lunch[]> {
    // return 'working??';
    console.log(this.MenusService.findAll());
    return this.MenusService.findAll();
  }
}
