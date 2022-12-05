/**
 * @jest-environment jsdom
 */

 import { IMovie } from "../ts/models/Movie";
 import { getData } from "../ts/services/movieservice";
 import { mockData } from "../ts/services/__mock__/movieservice";
 
 
 
 jest.mock("axios", () => ({
    get: async () => {
      return new Promise((resolve) => {
        resolve({
          data: {
            Search: mockData,
          },
        });
      });
    },
  }));
 
test ("should get mock data", async () => {
    let searchText: string = "Harry Potter";
    let response: IMovie[] = await getData(searchText);
    expect(response[0].Title).toContain("Harry Potter");
})

test ("should not get mock data", async () => {
    let searchText: string = "";
    let response: IMovie[] = await getData(searchText);
    expect(response).toBeNull;
});
