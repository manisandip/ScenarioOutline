package WebTest2;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepDefs {
    HomePage homePage = new HomePage();
    @Given("^user is on home page$")
    public void user_is_on_home_page()  {
        //user should be on home page
        homePage.verifyUserIsOnHomepage();

    }

    @When("^user enters \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enters_and( String invalid_username, String invalid_password  )
    {
        //user enters username and password
        homePage.userEntersLoginDetails(invalid_username, invalid_password );

    }

    @And("^user click on Login$")
    public void user_click_on_Login()  {
        //user clicks on login button
        homePage.userClickOnLogin();

    }


    @Then("^user should see \"([^\"]*)\"$")
    public void userShouldSee(String Error_Message)  {
        //user should see error message
        homePage.userShouldSeeErrorMessage(Error_Message);
    }
}
