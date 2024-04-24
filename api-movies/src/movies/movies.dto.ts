import { IsString, IsInt } from "class-validator" 

class MoviesDto {
    @IsString()
    title : string;
    @IsInt()
    year : number;
    @IsString()
    director : string;
    @IsInt()
    duration: number;
    @IsString()
    poster: string;
    @IsString()
    genre: string[];
    @IsInt()
    rate: number
}