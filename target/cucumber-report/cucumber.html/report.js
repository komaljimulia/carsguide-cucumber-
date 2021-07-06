$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/featurefile/buy.feature");
formatter.feature({
  "line": 1,
  "name": "Search functionality",
  "description": "As a User I should able to check search functionality",
  "id": "search-functionality",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"\u003cmake\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"\u003cmodel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"\u003clocation\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"\u003cprice\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"\u003cmake\u003e\" in results",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;",
  "rows": [
    {
      "cells": [
        "make",
        "model",
        "location",
        "price"
      ],
      "line": 17,
      "id": "search-functionality;search-the-buy-car-with-model;;1"
    },
    {
      "cells": [
        "Hyundai",
        "IX35",
        "NSW - Hunter",
        "$20,000"
      ],
      "line": 18,
      "id": "search-functionality;search-the-buy-car-with-model;;2"
    },
    {
      "cells": [
        "Honda",
        "CR-V",
        "NSW - Newcastle",
        "$25,000"
      ],
      "line": 19,
      "id": "search-functionality;search-the-buy-car-with-model;;3"
    },
    {
      "cells": [
        "BMW",
        "2 Series",
        "NSW - All",
        "$80,000"
      ],
      "line": 20,
      "id": "search-functionality;search-the-buy-car-with-model;;4"
    },
    {
      "cells": [
        "Audi",
        "A3",
        "NSW - All",
        "$30,000"
      ],
      "line": 21,
      "id": "search-functionality;search-the-buy-car-with-model;;5"
    },
    {
      "cells": [
        "Suzuki",
        "Liana",
        "NSW - All",
        "$50,000"
      ],
      "line": 22,
      "id": "search-functionality;search-the-buy-car-with-model;;6"
    },
    {
      "cells": [
        "Jeep",
        "Patriot",
        "NSW - Newcastle",
        "$40,000"
      ],
      "line": 23,
      "id": "search-functionality;search-the-buy-car-with-model;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11626584300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Hyundai\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"IX35\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Hunter\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$20,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Hyundai\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 394678400,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 452924600,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 2990569400,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 337045100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 15
    }
  ],
  "location": "BuyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 302945600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IX35",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 374896500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Hunter",
      "offset": 19
    }
  ],
  "location": "BuyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 284883500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$20,000",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 3219974900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4985547100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hyundai",
      "offset": 23
    }
  ],
  "location": "BuyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 431159500,
  "status": "passed"
});
formatter.after({
  "duration": 1374669600,
  "status": "passed"
});
formatter.before({
  "duration": 7923668700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Honda\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"CR-V\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Newcastle\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$25,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Honda\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 36700,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 681060800,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 2265923300,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 107058900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 15
    }
  ],
  "location": "BuyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 236900500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CR-V",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 249782700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Newcastle",
      "offset": 19
    }
  ],
  "location": "BuyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 289708900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$25,000",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 3209243500,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4906721500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Honda",
      "offset": 23
    }
  ],
  "location": "BuyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 297377700,
  "status": "passed"
});
formatter.after({
  "duration": 1383258200,
  "status": "passed"
});
formatter.before({
  "duration": 7945314900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"BMW\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"2 Series\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$80,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"BMW\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 35400,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 405655200,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 2493022000,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 575474200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 15
    }
  ],
  "location": "BuyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 237184500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 Series",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 298710900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 281401900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$80,000",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 3201124700,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6209399400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BMW",
      "offset": 23
    }
  ],
  "location": "BuyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 179647400,
  "status": "passed"
});
formatter.after({
  "duration": 1690015700,
  "status": "passed"
});
formatter.before({
  "duration": 7388713000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Audi\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"A3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$30,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Audi\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 26400,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 693819800,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 2060836100,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 93357700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 15
    }
  ],
  "location": "BuyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 227857700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A3",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 350639200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 263127500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$30,000",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 3202634500,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 6697766200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Audi",
      "offset": 23
    }
  ],
  "location": "BuyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 336019100,
  "status": "passed"
});
formatter.after({
  "duration": 1677851000,
  "status": "passed"
});
formatter.before({
  "duration": 7918408200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Suzuki\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Liana\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - All\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$50,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Suzuki\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 36500,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 396594500,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 2214079500,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 92334700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suzuki",
      "offset": 15
    }
  ],
  "location": "BuyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 230867400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Liana",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 683680900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - All",
      "offset": 19
    }
  ],
  "location": "BuyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 309131000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$50,000",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 3166273900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4653422600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Suzuki",
      "offset": 23
    }
  ],
  "location": "BuyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 234582800,
  "status": "passed"
});
formatter.after({
  "duration": 1727077100,
  "status": "passed"
});
formatter.before({
  "duration": 7427925500,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Search the buy car with model",
  "description": "",
  "id": "search-functionality;search-the-buy-car-with-model;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I mouse hover on “buy+sell” tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I click Search Cars",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I navigate to new and used car search page",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I select make \"Jeep\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I select model \"Patriot\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I select location \"NSW - Newcastle\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I select price \"$40,000\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I click on Find My Next Car tab",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the make \"Jeep\" in results",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "BuyStepdefs.iAmOnHomepage()"
});
formatter.result({
  "duration": 29600,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iMouseHoverOnBuySellTab()"
});
formatter.result({
  "duration": 608874200,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickSearchCars()"
});
formatter.result({
  "duration": 2712042400,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iNavigateToNewAndUsedCarSearchPage()"
});
formatter.result({
  "duration": 339600400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 15
    }
  ],
  "location": "BuyStepdefs.iSelectMake(String)"
});
formatter.result({
  "duration": 273645200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Patriot",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectModel(String)"
});
formatter.result({
  "duration": 448692800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NSW - Newcastle",
      "offset": 19
    }
  ],
  "location": "BuyStepdefs.iSelectLocation(String)"
});
formatter.result({
  "duration": 274759200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "$40,000",
      "offset": 16
    }
  ],
  "location": "BuyStepdefs.iSelectPrice(String)"
});
formatter.result({
  "duration": 3173148900,
  "status": "passed"
});
formatter.match({
  "location": "BuyStepdefs.iClickOnFindMyNextCarTab()"
});
formatter.result({
  "duration": 4321406100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jeep",
      "offset": 23
    }
  ],
  "location": "BuyStepdefs.iShouldSeeTheMakeInResults(String)"
});
formatter.result({
  "duration": 313835700,
  "status": "passed"
});
formatter.after({
  "duration": 1492811600,
  "status": "passed"
});
});