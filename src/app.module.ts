import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MovieModule } from './movies/movies.module';
import ormconfig from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig as TypeOrmModuleOptions),
    MovieModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
