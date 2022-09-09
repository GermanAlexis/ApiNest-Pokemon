import { Module } from '@nestjs/common';
import { AxiosAdapter } from './adapter/axios.adapter';

@Module({
  providers: [AxiosAdapter],
  exports: [AxiosAdapter],
})
export class CommonModule {}
