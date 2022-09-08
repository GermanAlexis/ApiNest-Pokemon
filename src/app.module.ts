import { join } from 'path';
import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';

import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@cluster0.tletb.mongodb.net/?retryWrites=true&w=majority',
    ),
    PokemonModule,
    CommonModule,
  ],
})
export class AppModule {}
