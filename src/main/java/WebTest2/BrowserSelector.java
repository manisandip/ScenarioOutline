package WebTest2;

import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.remote.DesiredCapabilities;

import java.util.concurrent.TimeUnit;

public class BrowserSelector extends Utils
{

    public void OpenBrowser (){
        LoadProp loadProp = new LoadProp();
        String browser = loadProp.getProperty("browser");
        System.out.println(browser);
        if (browser.equalsIgnoreCase("Chrome"))
        {
            System.setProperty("webdriver.chrome.driver", "src/test/Resources/BrowserDriver/chromedriver.exe");
            driver = new ChromeDriver();
            driver.manage().window().maximize();
            driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
            driver.get("https://opensource-demo.orangehrmlive.com/");
        } else if (browser.equalsIgnoreCase("firefox")) {
            System.setProperty("webdriver.gecko.driver", "src/test/Resources/BrowserDriver/geckodriver.exe");
            driver = new FirefoxDriver();
            driver.manage().window().maximize();
            driver.manage().timeouts().implicitlyWait(50, TimeUnit.SECONDS);
            driver.get("https://opensource-demo.orangehrmlive.com/");
        } else if (browser.equalsIgnoreCase("ie")) {
            System.setProperty("webdriver.ie.driver", "src/test/Resources/BrowserDriver/IEDriverServer.exe");
            DesiredCapabilities ieCapabilities = DesiredCapabilities.internetExplorer();
            ieCapabilities.setCapability("nativeEvents", false);
            ieCapabilities.setCapability("unexpectedAlertBehaviour", "accept");
            ieCapabilities.setCapability("ignoreProtectedModeSettings", true);
            ieCapabilities.setCapability("disable-popup-blocking", true);
            ieCapabilities.setCapability("enablePersistentHover", true);
            ieCapabilities.setCapability("ignoreZoomSetting", true);
            driver = new InternetExplorerDriver(ieCapabilities);
            driver.manage().window().maximize();
            driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
            driver.get("https://opensource-demo.orangehrmlive.com/");
        } else {
            System.out.println("Incorrect browser :" + browser);
        }
    }

    public void CloseBrowser()
    {

        driver.close();



    }
}
