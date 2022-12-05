/** 
*@jest-environment jsdom 
*/

import { IMovie } from "../ts/models/Movie";
import * as functions from "../ts/movieApp";
import * as serviceFunctions from "../ts/services/movieservice";
import { movie } from "../ts/services/__mock__/movieApp";

// jest.mock("./../ts/services/movieservice.ts");

let thisMovie: IMovie[] = movie


jest.mock("axios", () => ({
  get: async () => {
    return new Promise((resolve) => {
      resolve({
        data: {
          Search: thisMovie,
        },
      });
    });
  },
}));

test("Should create HTML for movie", async () => {
    document.body.innerHTML = `<div id="movie-container"></div>`;
    let container: HTMLDivElement = document.getElementById(
      "movie-container"
    ) as HTMLDivElement;
    let searchText: string = "";
    let movies = await serviceFunctions.getData(searchText);
  
    await functions.createHtml(movies, container);
  
    expect(document.querySelectorAll("div.movie")?.length).toBe(1);
    expect(document.querySelectorAll("h3")?.length).toBe(1);
    expect(document.querySelectorAll("img")?.length).toBe(1);
    });


 beforeEach(() => {
      jest.resetModules();
      jest.restoreAllMocks();
    });
    test("Should display a message", () => {
      let container: HTMLDivElement = document.createElement("div") as HTMLDivElement;
      functions.displayNoResult(container);

      expect(container.innerHTML).toBe(`<p>Inga sökresultat att visa</p>`);
    });
