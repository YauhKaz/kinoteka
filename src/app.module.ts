import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { MovieModule } from './movies/movies.module';
import { ConfigModule } from '@nestjs/config';
import ormconfig from './ormconfig';

const types = process.env.TYPEORM_CONNECTION;
console.log(types);

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormconfig as TypeOrmModuleOptions),
    MovieModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
