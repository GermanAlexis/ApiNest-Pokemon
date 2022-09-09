import { join } from 'path';
import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/app.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
    }),

    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),

    //*  access a Data base on MongoAtlas
    MongooseModule.forRoot(process.env.MONGODB),
    //*  access a Data base on local with Docker and Use SEED
    //? MongooseModule.forRoot(process.env.MONGODBLOCAL),

    PokemonModule,
    CommonModule,
    SeedModule,
  ],
})
export class AppModule {}
