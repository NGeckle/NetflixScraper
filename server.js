var mongoose = require("mongoose");
var puppeteer = require("puppeteer");
var express = require("express");

var db = require("./models");
var PORT = 3000;

var app = express();

mongoose.connect("mongodb://localhost/netflixscraper");

let scrape1 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=1");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape2 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=2");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape3 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=3");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape4 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=4");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape5 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=5");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape6 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=6");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape7 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=7");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape8 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=8");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape9 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=9");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape10 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=10");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape11 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=11");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape12 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=12");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape13 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=13");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape14 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=14");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape15 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=15");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape16 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=16");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape17 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=17");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape18 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=18");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape19 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=19");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape20 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=20");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape21 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=21");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape22 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=22");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape23 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=23");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape24 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=24");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape25 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=25");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape26 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=26");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape27 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=27");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape28 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=28");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape29 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=29");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape30 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=30");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape31 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=31");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape32 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=32");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape33 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=33");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

let scrape34 = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto("https://media.netflix.com/en/only-on-netflix#/all?page=34");
  await page.waitFor(2000);

  const result = await page.evaluate(() => {
    let data = [];
    let elements = document.querySelectorAll(".item");

    for (var element of elements) {
      let title = element.querySelector(".oon-name").querySelector("span").innerText;
      let category = element.querySelector(".oon-type").innerText;
      let distribution = element.querySelector(".oon-hide-mobile").querySelector("span").innerText;

      data.push({ title, category, distribution });
    }
    return data;
  });
  browser.close();
  return result;
};

setTimeout(() => {
  scrape1().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 2000);

setTimeout(() => {
  scrape2().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 5000);

setTimeout(() => {
  scrape3().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 8000);

setTimeout(() => {
  scrape4().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 11000);

setTimeout(() => {
  scrape5().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 14000);

setTimeout(() => {
  scrape6().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 17000);

setTimeout(() => {
  scrape7().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 20000);

setTimeout(() => {
  scrape8().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 23000);

setTimeout(() => {
  scrape9().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 26000);

setTimeout(() => {
  scrape10().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, );

setTimeout(() => {
  scrape11().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 29000);

setTimeout(() => {
  scrape12().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 32000);

setTimeout(() => {
  scrape13().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 35000);

setTimeout(() => {
  scrape14().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 38000);

setTimeout(() => {
  scrape15().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 41000);

setTimeout(() => {
  scrape16().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 44000);

setTimeout(() => {
  scrape17().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 47000);

setTimeout(() => {
  scrape18().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 50000);

setTimeout(() => {
  scrape19().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 53000);

setTimeout(() => {
  scrape20().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 56000);

setTimeout(() => {
  scrape21().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 59000);

setTimeout(() => {
  scrape22().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  setTimeout(() => {
  }, 62000);

});

setTimeout(() => {
  scrape23().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 65000);

setTimeout(() => {
  scrape24().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 68000);

setTimeout(() => {
  scrape25().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 71000);

setTimeout(() => {
  scrape26().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 74000);

setTimeout(() => {
  scrape27().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 77000);

setTimeout(() => {
  scrape28().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 80000);

setTimeout(() => {
  scrape29().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 83000);

setTimeout(() => {
  scrape30().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 86000);

setTimeout(() => {
  scrape31().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 89000);

setTimeout(() => {
  scrape32().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 92000);

setTimeout(() => {
  scrape33().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 95000);

setTimeout(() => {
  scrape34().then((value) => {
    console.log(value);
    db.Show.create(value)
      .catch(function(err) {
        return res.json(err);
      });
  });
}, 98000);


app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});