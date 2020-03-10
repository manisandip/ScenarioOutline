package WebTest2;

import org.openqa.selenium.By;

public class HomePage extends Utils {
    String Url = "https://opensource-demo.orangehrmlive.com/";
    private By _username  = By.id("txtUsername");
    private By _password = By.id("txtPassword");
    private By _login = By.id("btnLogin");
    private By _actual = By.id( "spanMessage" );

    public void verifyUserIsOnHomepage(){
        //url for orange hrm homepage
        assertURL("https://opensource-demo.orangehrmlive.com/");
    }

    public void userEntersLoginDetails(String invalid_username, String invalid_password)
    {
        //user enters username
        SendText(_username, invalid_username);
        //user enters password
        SendText(_password, invalid_password);

    }
    public void userClickOnLogin(){
        //user click on login button
        clickOnElement(_login);
    }
    public void userShouldSeeErrorMessage(String Error_Message)
    {
        //expected error message
        String expected = Error_Message;
        //verifying actual message with the expected
        assertTextMessage( "message displayed  ", expected, _actual );
    }

}



