const axios = require("axios");
const cheerio = require("cheerio");
const REQUEST_URL = "https://www.imdb.com/chart/top/";

const print = async (searchresults) => {
  var id = [];

  await axios.get(REQUEST_URL).then(async function (response) {
    const $ = cheerio.load(response.data);

    const list = $(".lister-list tr .titleColumn a");

    for (var i = 0; i < searchresults; i++) {
      const itm = $(list[i]).attr("href");

      var res = itm.split("/");

      id.push(res[2]);
    }
  });

  return id;
};
module.exports = {
  findMovies: async (totalNumber) => {
    //
    var id = [];
    const res = await print(totalNumber);
    return res;
  },
};
