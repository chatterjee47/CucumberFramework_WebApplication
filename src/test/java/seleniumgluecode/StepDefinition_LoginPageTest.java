package seleniumgluecode;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;

import BaseClass.BrowserSetup;
import PageObjectRepository.AppointmentDetailsPage;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition_LoginPageTest extends BrowserSetup {
	static WebDriver driver;
	AppointmentDetailsPage ADP;
	static Logger log = Logger.getLogger(StepDefinition_LoginPageTest.class.getName());

	@When("^OGNOMY Application is Launch$")
	public void ognomy_Application_is_Launch() throws Throwable {
		String current = System.getProperty("user.dir");
		System.out.println("Current working directory in Java : " + current);
		File file = new File(System.getProperty("user.dir") + "\\config\\file.properties");
		FileInputStream fileInput = null;
		try {
			fileInput = new FileInputStream(file);
		} catch (FileNotFoundException e) {
			e.printStackTrace();
		}
		Properties prop = new Properties();
		try {
			prop.load(fileInput);
		} catch (IOException e) {
			e.printStackTrace();
		}
		driver = BrowserSetup.StartBrowser(prop.getProperty("BrowserType"), prop.getProperty("Url"));
		log.info("Application launched");

	}

	@When("^User click on I Acknowledge tab$")
	public void user_click_on_I_Acknowledge_tab() throws Throwable {
		ADP = new AppointmentDetailsPage(driver);
		ADP.clickOnacknowledgeButton();
		driver.manage().timeouts().implicitlyWait(8000, TimeUnit.SECONDS);

	}

	@Then("^User enters valid Email Address \"([^\"]*)\"$")
	public void user_enters_valid_Email_Address(String strEmailAddress) throws Throwable {
		driver.manage().timeouts().implicitlyWait(100, TimeUnit.SECONDS);
		ADP = new AppointmentDetailsPage(driver);
		ADP.setEmailAddress(strEmailAddress);

	}

	@Then("^User enters valid Password \"([^\"]*)\"$")
	public void user_enters_valid_Password(String strPassword) throws Throwable {
		ADP = new AppointmentDetailsPage(driver);
		ADP.setPassword(strPassword);

	}

	@Then("^User click on Login button$")
	public void user_click_on_Login_button() throws Throwable {
		ADP = new AppointmentDetailsPage(driver);
		ADP.clickOnLoginButton();
	}

	@Then("^User close the Browser$")
	public void user_close_the_Browser() throws Throwable {
		driver.close();
	}

}