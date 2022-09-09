import { Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';
import { HttpAdapter } from './../interfaces/http.interfaces';

@Injectable()
export class AxiosAdapter implements HttpAdapter {
  private axios: AxiosInstance = axios;

  async get<T>(url: string): Promise<T> {
    try {
      console.log(url);
      const { data } = await this.axios.get<T, any>(url);
      return data;
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
