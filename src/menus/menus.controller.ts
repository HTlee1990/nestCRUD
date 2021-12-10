import { Body, Controller, Get, Post } from '@nestjs/common';
import { MenusService } from './menus.service';
import { Lunch } from '../entities/lunchLists.entity';
@Controller('menus')
export class MenusController {
  constructor(private readonly MenusService: MenusService) {}
  @Get()
  saySth(): Promise<Lunch[]> {
    // return 'working??';
    return this.MenusService.findAll();
  }

  @Post()
  addMenu(
    @Body()
    menu: {
      name: string;
      category: string;
      menu: string;
      isNoodle: string;
      distance: string;
    },
  ) {
    return this.MenusService.addMenu(menu);
  }
}
