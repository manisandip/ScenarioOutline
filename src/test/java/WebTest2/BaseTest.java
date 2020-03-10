package WebTest2;

import org.testng.annotations.BeforeTest;

public class BaseTest extends Utils {
    BrowserSelector browserSelector = new BrowserSelector();

    @BeforeTest
    public void OpenBrowser() {
        browserSelector.OpenBrowser();
    }
}