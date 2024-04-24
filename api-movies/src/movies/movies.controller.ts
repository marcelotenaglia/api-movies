import { Controller, Get, Res, HttpStatus, Param} from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getMovies() : Promise<iMovie[]> {
    return this.moviesService.getMovies();
  }

   @Get(':id')
   async getMovieById (@Param('id') id: string) : Promise<any> {
       return this.moviesService.getMovieById(id)
   }

  
    
}
