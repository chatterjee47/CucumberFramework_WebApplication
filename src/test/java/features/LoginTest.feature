
Feature: Login function for OGNOMY Application

  @LoginTest
  Scenario Outline: To verify Login function
    When OGNOMY Application is Launch
    And User click on I Acknowledge tab
    Then User enters valid Email Address "<emailaddress>"
    Then User enters valid Password "<password>"
    Then User click on Login button
    Then User close the Browser

    Examples: 
      | emailaddress     | password   |
      | admin@ognomy.com | @Ognomy123 |
