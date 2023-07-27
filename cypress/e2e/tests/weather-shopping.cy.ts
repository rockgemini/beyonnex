import { HomePage } from "../pages/homePage";
import { Common } from "../pages/common";

let homePage = new HomePage();
let common = new Common();
let temperature: number;

describe("Weathershopper tests", () => {
  beforeEach(() => {
    homePage.load();
    homePage.getTemperature().then((temp) => {
        temperature = temp;
      });
  });

  it("Shop for items", () => {
    if (temperature < 19) {
        homePage.clickBuyMoisturizers();
        common.selectCheapestItemByWord("aloe");
        common.selectCheapestItemByWord("almond");
    };
    if (temperature > 34) {
        homePage.clickBuySunscreens();
      common.selectCheapestItemByWord("SPF-50");
      common.selectCheapestItemByWord("SPF-30");
    };
    common.clickCart();
  });
});
