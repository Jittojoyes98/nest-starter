import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('users')
export class UsersController {
  
  @Get()
  showAll() {
    return [];
  }

  @Get("/:id")
  getCurrentUser(@Param('id') id: string):object{
    return {id};
  }

  @Post()
  create(@Body() user: {}){
    return user;
  }
}
