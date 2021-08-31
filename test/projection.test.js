import MoviesDAO from "../src/dao/moviesDAO"

describe("Projection", () => {
  beforeAll(async () => {
    await MoviesDAO.injectDB(global.mflixClient)
  })

  test("Can perform a country search for one country", async () => {
    const kosovoList = ["Kosovo"]
    console.log("\n")
    console.log(
      "This is where the Single country test occures for Kossow only  \n",
    )

    console.log("Kos list size: ", kosovoList.length)
    const movies = await MoviesDAO.getMoviesByCountry(kosovoList)
    expect(movies.length).toEqual(kosovoList.length)
  })

  test("Can perform a country search for three countries", async () => {
    const countriesList = ["Russia", "Japan", "Mexico"]
    console.log("This is my list : ", countriesList, ": \n")
    console.log("List count : ", countriesList.length)
    //looking to see if movies countries
    const movies = await MoviesDAO.getMoviesByCountry(countriesList)
    expect(movies.length).toEqual(3)

    console.log("Movie Size: ", movies.length, "/n")

    movies.map(movie => {
      const movieKeys = Object.keys(movie).sort()
      const expectedKeys = ["_id", "title"]
      expect(movieKeys).toEqual(expectedKeys)
    })
  })
})
