import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Lunch } from '../entities/lunchLists.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MenusService {
  constructor(
    @InjectRepository(Lunch) private lunchRepository: Repository<Lunch>,
  ) {}

  findAll(): Promise<Lunch[]> {
    return this.lunchRepository.find();
  }

  addMenu(m: {
    name: string;
    category: string;
    menu: string;
    distance: string;
    isNoodle: string;
  }) {
    const newMenu = {
      ...m,
      lastVisit: Date(),
      count: 1,
    };

    this.lunchRepository.insert(newMenu);
    return newMenu;
  }
}
