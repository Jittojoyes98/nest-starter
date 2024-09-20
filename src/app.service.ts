import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getUser(userId:string):string{
    return `Hi user ${userId}, Jitto`
  }
}
