package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class NewAndUsedCarPage extends Utility {
    private static final Logger log= LogManager.getLogger(NewAndUsedCarPage.class.getName());
    @FindBy(xpath = "//h1[contains(text(),'New & Used Car Search - carsguide')]")
    WebElement newAndUsedCarsTxt;
    @FindBy(xpath = "//select[@id='makes']")
    WebElement AnyMake;
    @FindBy(xpath = " //select[@id='models']")
    WebElement AnyModel;
    @FindBy(xpath = "//select[@id='locations']")
    WebElement AnyLocation;
    @FindBy(xpath = "//select[@id='priceTo']")
    WebElement carPrice;
    @FindBy(xpath = "//input[@id='search-submit']")
    WebElement myNextCarTab;
    @FindBy(xpath = "//h1[@class='listing-search-title']")
    WebElement getSearchTitleTxt;

    public String verifyNewAndUsedCarText(){
        log.info("Verifing new and UsedCar Text from element:"+newAndUsedCarsTxt.toString());
        return getTextFromElement(newAndUsedCarsTxt);
    }
    public void selectMakeofCarFromDropdown(String make){
        log.info("Selecting Car Make from drop down menu list of select element"+AnyMake.toString());
        selectByVisibleTextFromDropDown(AnyMake,make);
    }
    public void selectModelofCarFromDropdown(String model){
        log.info("Selecting Car Model from dropdown menu list of Select element"+AnyModel.toString());
        selectByValueFromDropDown(AnyModel,model);
    }
    public void selectCarLocationFromDropdown(String location){
        log.info("Selecting Car Location from dropdown menu list of select element "+AnyLocation.toString());
        selectByVisibleTextFromDropDown(AnyLocation,location);
    }
    public void selectCarPriceFromDropdown(String price){
        log.info("Selecting car price from drop down menu list of select element"+carPrice.toString());
        selectByVisibleTextFromDropDown(carPrice,price);
    }
    public void clickOnFindMyCarBtn(){
        log.info("Clicking on Find My next car button "+myNextCarTab.toString());
        clickOnElement(myNextCarTab);
    }
    public String getTitleText(){
        return getSearchTitleTxt.getText();
    }

}











