import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return All Movies';
  }

  @Get(':id')
  getOne(@Param('id') movieId: string) {
    return `This will return One Movie with id:${movieId}`;
  }

  @Post()
  create() {
    return 'This will create a movie';
  }

  @Delete(':id')
  remove(@Param('id') movieId: string) {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch(':id')
  patch(@Param('id') movieId: string) {
    return `This will patch a movie with the id: ${movieId}`;
  }
}
