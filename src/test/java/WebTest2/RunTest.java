package WebTest2;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = ".",tags = "@invalidscenario",plugin = {"pretty","html:target/Destination"})


public class RunTest {
}
