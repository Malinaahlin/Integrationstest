import { movieSort } from "../ts/functions";
import { IMovie } from "../ts/models/Movie";
import { mockData } from "../ts/services/__mock__/movieservice";

test ("should sort title from a-ö", () => {
    let movies: IMovie[] = mockData;
    movieSort(movies, true);
    expect(movies[0].Title).toBe("Harry Potter och A");
    expect(movies[1].Title).toBe("Harry Potter och B");
});

test ("should sort title from ö-a", () => {
    let movies: IMovie[] = mockData;
    movieSort(movies, false);
    expect(movies[0].Title).toBe("Harry Potter och D")
    expect(movies[1].Title).toBe("Harry Potter och C")
});

test ("should not sort title", () => {
    let movies: IMovie[] = mockData;
    movieSort(movies, true);
    expect(movies[1].Title).toBe("Harry Potter och B");
})

test ("should not sort title if false", () => {
    let movies: IMovie[] = mockData;
    movieSort(movies, false);
    expect(movies[1].Title).toBe("Harry Potter och C");
});

// test ("should return 0", () => {
//     let movies: IMovie[] = mockData;
//     movieSort(movies);
//     expect(mockData[]).toBe(0);
// });