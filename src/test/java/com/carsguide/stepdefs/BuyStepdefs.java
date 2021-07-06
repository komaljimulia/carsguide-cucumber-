package com.carsguide.stepdefs;

import com.carsguide.pages.HomePage;
import com.carsguide.pages.NewAndUsedCarPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class BuyStepdefs {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I mouse hover on “buy\\+sell” tab$")
    public void iMouseHoverOnBuySellTab() {
        new HomePage().mouseHoverToBuySellLink();
    }

    @And("^I click Search Cars$")
    public void iClickSearchCars() {
        new HomePage().clickOnSearchLink();
    }

    @Then("^I navigate to new and used car search page$")
    public void iNavigateToNewAndUsedCarSearchPage() {
        Assert.assertEquals("New & Used Car Search - carsguide",new NewAndUsedCarPage().verifyNewAndUsedCarText());
    }

    @And("^I select make \"([^\"]*)\"$")
    public void iSelectMake(String make) throws Throwable {
        new NewAndUsedCarPage().selectMakeofCarFromDropdown(make);
    }

    @And("^I select model \"([^\"]*)\"$")
    public void iSelectModel(String model)  {
        new NewAndUsedCarPage().selectModelofCarFromDropdown(model);
    }

    @And("^I select location \"([^\"]*)\"$")
    public void iSelectLocation(String location)  {
        new NewAndUsedCarPage().selectCarLocationFromDropdown(location);
    }

    @And("^I select price \"([^\"]*)\"$")
    public void iSelectPrice(String price) throws InterruptedException {
        Thread.sleep(3000);
        new NewAndUsedCarPage().selectCarPriceFromDropdown(price);
    }
    @And("^I click on Find My Next Car tab$")
    public void iClickOnFindMyNextCarTab() {
        new NewAndUsedCarPage().clickOnFindMyCarBtn();
    }
    @Then("^I should see the make \"([^\"]*)\" in results$")
    public void iShouldSeeTheMakeInResults(String make)  {
        Assert.assertTrue(make,new NewAndUsedCarPage().getTitleText().contains(make));

    }
}
