let goodsArray = [];

webCrawler().then(() => {
  console.log(goodsArray);
});

async function webCrawler(params) {
  let urlParams = new URLSearchParams(window.location.search);
  let currentPage = parseInt(urlParams.get("page"));
  let priviousPage = currentPage - 1;

  while (priviousPage != currentPage) {
    try {
      let scrollHeight = document.body.scrollHeight / 4;
      for (let i = 1; i < 5; i++) {
        window.scroll({
          top: scrollHeight * i,
          behavior: "smooth",
        });
        await new Promise((r) => setTimeout(r, 1000));
      }

      let items = getPageItems();

      for (let i = 0; i < items.length; i++) {
        let element = items[i];
        let item = {};
        let title, img, price, link;
        try {
          title = getTitle(element);
          img = getImg(element);
          price = getPrice(element);
          link = getLink(element);

          item["title"] = title;
          item["img"] = img;
          item["price"] = price;
          item["link"] = link;
          goodsArray.push(item);
        } catch (error) {
          console.log("get part error: ", error);
          element.scrollIntoView(); //直截移動到此元素位置
          i--;
          await new Promise((r) => {
            setTimeout(r, 1000);
          });
        }
      }

      clickNextPage();
      urlParams = new URLSearchParams(window.location.search);
      currentPage = parseInt(urlParams.get("page"));
      priviousPage += 1;
    } catch (error) {
      console.log("err:", error);
      
    }
  }
}

function getPageItems() {
  return document.querySelectorAll(
    "#main > div > div.dYFPlI > div > div > div.sdzgsX > div.shopee-search-item-result > div.row.shopee-search-item-result__items> div"
  );
}

function getPrice(element) {
  let originalPrice = -1,
    lowPrice,
    Highprice,
    outputPrice;

  lowPrice = element.querySelector(
    "div > a > div > div > div.KMyn8J > div.hpDKMN > div > span:nth-child(2)"
  ).innerText;
  outputPrice = lowPrice;

  let originalPriceElement = element.querySelector(
    "div > a > div > div > div.KMyn8J > div.hpDKMN > div"
  );
  if (originalPriceElement !== null) {
    originalPrice = originalPriceElement.innerText;
    outputPrice = "original:" + originalPrice + " self:" + lowPrice;
  }

  let HighpriceElement = element.querySelector(
    "div > a > div > div > div.KMyn8J > div.hpDKMN > div > span:nth-child(4)"
  );
  if (HighpriceElement !== null) {
    Highprice = HighpriceElement.innerText;
    outputPrice = lowPrice + "~" + Highprice;
  }
  return outputPrice;
}

function getTitle(element) {
  return element.querySelector(
    "div > a > div > div > div.KMyn8J > div.dpiR4u > div.FDn--\\+>div"
  ).innerText;
}

function getLink(element) {
  return element.querySelector("div > a").href;
}

function getImg(element) {
  let img = element.querySelector("div> a > div > div > div> div > img").src;

  if (img === "") {
    throw new Error("img not get");
  } else {
    return img;
  }
}

function clickNextPage() {
  try {
    document.getElementsByClassName("shopee-icon-button--right")[0].click();
  } catch (error) {
    console.log("click err : ", error);
    throw error;
  }
}
