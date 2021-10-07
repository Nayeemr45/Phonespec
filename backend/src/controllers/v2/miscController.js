const request = require("request-promise");
const cheerio = require("cheerio");
const { json, errorJson } = require("../../utils/response");

exports.index = async (req, res) => {
  try {
    const url = `https://www.gsmarena.com`;
    const htmlResult = await request.get(url);
    const $ = await cheerio.load(htmlResult);
    const title = "Latest Devices";
    const phones = [];
    $(".module-latest")
      .find("a")
      .each((index, el) => {
        const phone_name = $(el).text();
        const image = $(el).find("img").attr("src");
        const slug = $(el).attr("href").replace(".php", "");
        phones.push({
          phone_name,
          slug,
          image,
          detail: req.protocol + "://" + req.get("host") + "/v2/" + slug,
        });
      });

    return json(res, {
      title,
      phones,
    });
  } catch (error) {
    return errorJson(res, error);
  }
};
exports.news = async (req, res) => {
  try {
    let page = req.params.page;
    let url;
    if (page === undefined || page == 1) {
      url = `https://www.gsmarena.com/news.php3`;
      page = 1;
    } else {
      url1 = `https://www.gsmarena.com/news.php3/?iPage=${page}`;
      url = decodeURI(url1);
    }
    const htmlResult = await request.get(url);

    const $ = await cheerio.load(htmlResult);
    const title = "News";
    const news = [];
    const find_last_page = [];
    $(".nav-pages")
      .find("a")
      .each((index, el) => {
        find_last_page.push($(el).text());
      });
    const last_page = parseInt(find_last_page[find_last_page.length - 1]);

    $(".news-item").each((index, el) => {
      const news_title = $(el).find("img").attr("alt");
      const slug = $(el).find("a").attr("href");

      const image = $(el).find("img").attr("src");
      const reviewDate = $(el).find("span").text();
      const description = $(el).find("p").text();

      news.push({
        news_title,
        slug,
        image,
        reviewDate,
        description,
        detail: req.protocol + "://" + req.get("host") + "/v2/" + slug,
      });
    });

    return json(res, {
      title,
      current_page: parseInt(page),
      last_page,
      news,
    });
    // return json(res, {
    //   htmlResult,
    // });
  } catch (error) {
    return errorJson(res, error);
  }
};

exports.topInterest = async (req, res) => {
  try {
    const url = `https://www.gsmarena.com`;
    const htmlResult = await request.get(url);
    const $ = await cheerio.load(htmlResult);
    const title = "Top By Daily Interest";
    const phones = [];
    $('h4:contains("interest")')
      .next()
      .find("tbody")
      .find("tr")
      .each((index, el) => {
        const phone_name = $(el).find("th").text();
        if (phone_name) {
          const slug = $(el)
            .find("th")
            .find("a")
            .attr("href")
            .replace(".php", "");
          const hits = $(el).find("td").eq(1).text();
          phones.push({
            phone_name,
            slug,
            hits: parseInt(hits.replace(/,/g, "")),
            detail: req.protocol + "://" + req.get("host") + "/v2/" + slug,
          });
        }
      });

    return json(res, {
      htmlResult,
      // title,
      // phones,
    });
  } catch (error) {
    return errorJson(res, error);
  }
};

exports.topFans = async (req, res) => {
  try {
    const url = `https://www.gsmarena.com`;
    const htmlResult = await request.get(url);
    const $ = await cheerio.load(htmlResult);
    const title = "Top By Daily Interest";
    const phones = [];
    $('h4:contains("fans")')
      .next()
      .find("tbody")
      .find("tr")
      .each((index, el) => {
        const phone_name = $(el).find("th").text();
        if (phone_name) {
          const slug = $(el)
            .find("th")
            .find("a")
            .attr("href")
            .replace(".php", "");
          const favorites = $(el).find("td").eq(1).text();
          phones.push({
            phone_name,
            slug,
            favorites: parseInt(favorites.replace(/,/g, "")),
            detail: req.protocol + "://" + req.get("host") + "/v2/" + slug,
          });
        }
      });

    return json(res, {
      title,
      phones,
    });
  } catch (error) {
    return errorJson(res, error);
  }
};
