export class Movie {
    id:String
    moviename : String;
    imglink : String;
    description : String;
    releaseDate:String;
    showTime : String;
    price : String;
    A1:seat;
    A2:seat;
    A3:seat;
    A4:seat;
    A5:seat;
    A6:seat;
    A7:seat;
    A8:seat;
    A9:seat;
    A10:seat;
   
}
interface seat {
    available: boolean;
    occupiedby: string;
 }