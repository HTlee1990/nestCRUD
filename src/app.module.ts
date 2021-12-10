import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenusController } from './menus/menus.controller';
import { MenusModule } from './menus/menus.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lunch } from './entities/lunchLists.entity';

@Module({
  imports: [
    MenusModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '!dlgudxo90',
      database: 'lunch',
      entities: [Lunch], // 사용할 entity의 클래스명을 넣어둔다.
      synchronize: true, // prod.일때에는 false로 해두는 게 안전하다.
      autoLoadEntities: true,
    }),
  ],
  controllers: [AppController, MenusController],
  providers: [AppService],
})
export class AppModule {}
