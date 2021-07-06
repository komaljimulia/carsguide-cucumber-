package com.carsguide.pages;

import com.carsguide.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import javax.xml.ws.FaultAction;

public class HomePage extends Utility {
    private static final Logger log= LogManager.getLogger(HomePage.class.getName());
    @FindBy(xpath = "//a[text()='buy + sell']")
    WebElement buySellLink;
    @FindBy(xpath = "//a[text()='Search Cars']")
    WebElement searchCarsLink;

    public void mouseHoverToBuySellLink() {
        log.info("This will mouse hover on Buy + Sell Link " +buySellLink.toString());
        mouseHoverToElement(buySellLink);
    }
    public void clickOnSearchLink() {
        log.info("This will click on Search Cars Link " + searchCarsLink.toString());
       clickOnElement(searchCarsLink);
    }


}
