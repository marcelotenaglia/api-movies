import { Injectable, NotFoundException } from '@nestjs/common';

const base_url : string = 'http://localhost:3031/movies/'

@Injectable()
export class MoviesService {

    async getMovies() : Promise<iMovie[]> {
        const res = await fetch (base_url)
        const movies = await res.json()
        return movies;
    }

    async getMovieById (id: string) : Promise<iMovie> {
        try {
            const res = await fetch (base_url+id)
            const movie = await res.json() 
            if (Object.keys(movie).length)
            return movie
        } catch (error) {
            throw new NotFoundException (`la película con id ${id} no existe`)
        }
    }
}
