import { Actor } from './movies/entities/actors.entity';
import { Movie } from './movies/entities/movies.entity';
import { Category } from './movies/entities/categories.entity';
import { Image } from './movies/entities/images.entity';

const types = process.env.TYPEORM_CONNECTION;
console.log(types);

export default {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '6Hjof8TT',
  database: 'kinoteka',
  autoLoadEntities: false,
  synchronize: false,

  // Run migrations automatically,
  // you can disable this if you prefer running migration manually.
  migrationsRun: true,
  logging: true,
  logger: 'file',

  entities: [Actor, Movie, Category, Image],

  // Allow both start:prod and start:dev to use migrations
  // __dirname is either dist or src folder, meaning either
  // the compiled js in prod or the ts in dev.
  migrations: [__dirname + '/migrations/**/*{.ts,.js}'],
  cli: {
    // Location of migration should be inside src folder
    // to be compiled into dist/ folder.
    migrationsDir: 'src/migrations',
  },
};
