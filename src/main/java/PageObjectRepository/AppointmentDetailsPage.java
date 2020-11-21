package PageObjectRepository;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.AndroidElement;

public class AppointmentDetailsPage {
	WebDriver driver;
	public static AndroidDriver<AndroidElement> Mobiledriver;
	
	public AppointmentDetailsPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}

	//Capturing Xpath
	@FindBy(xpath = "//a[contains(text(),'I acknowledge')]")
	private WebElement acknowledgeButton;

	@FindBy(xpath = "//a[@class='btn btn-blue']")
	private WebElement LoginButton;
	
	@FindBy(xpath = "//input[@placeholder='Email Address']")
	private WebElement EmailAddress;
	
	@FindBy(xpath = "//input[@placeholder='Password']")
	private WebElement Password;

	//Creating Webelement
	public void clickOnacknowledgeButton() {
		acknowledgeButton.click();
	}

	public void clickOnLoginButton() {
		LoginButton.click();
	}

	public void setEmailAddress(String strEmailAddress) {
		EmailAddress.sendKeys(strEmailAddress);
	}

	public void setPassword(String strPassword) {
		Password.sendKeys(strPassword);
	}
}
