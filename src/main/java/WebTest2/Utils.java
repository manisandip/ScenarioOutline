package WebTest2;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.junit.Assert;

public class Utils extends BasePage
{
    public static void SendText(By by, String text){
        driver.findElement(by).sendKeys(text);
    }
    public void clickOnElement(By by)
    {
        //method for clicking on an element
        driver.findElement(by).click();
    }
    public static void assertURL(String text)
    {
        //verify user should be on correct page
        Assert.assertTrue(driver.getCurrentUrl().contains(text));
    }
    public static String getTextFromElement(By by){

        return driver.findElement(by).getText();
    }


    public static void assertTextMessage(String message,String expected,By by)
    {
        //verify actual message with expected
        String actual = getTextFromElement(by);
        Assert.assertEquals(message,expected,actual);
    }

}
