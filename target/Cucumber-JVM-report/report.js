$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginTest.feature");
formatter.feature({
  "line": 2,
  "name": "Login function for OGNOMY Application",
  "description": "",
  "id": "login-function-for-ognomy-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "To verify Login function",
  "description": "",
  "id": "login-function-for-ognomy-application;to-verify-login-function",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "OGNOMY Application is Launch",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User click on I Acknowledge tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters valid Email Address \"\u003cemailaddress\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters valid Password \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User close the Browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "login-function-for-ognomy-application;to-verify-login-function;",
  "rows": [
    {
      "cells": [
        "emailaddress",
        "password"
      ],
      "line": 14,
      "id": "login-function-for-ognomy-application;to-verify-login-function;;1"
    },
    {
      "cells": [
        "admin@ognomy.com",
        "@Ognomy123"
      ],
      "line": 15,
      "id": "login-function-for-ognomy-application;to-verify-login-function;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 15,
  "name": "To verify Login function",
  "description": "",
  "id": "login-function-for-ognomy-application;to-verify-login-function;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@LoginTest"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "OGNOMY Application is Launch",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User click on I Acknowledge tab",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters valid Email Address \"admin@ognomy.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User enters valid Password \"@Ognomy123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "User click on Login button",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition_LoginPageTest.ognomy_Application_is_Launch()"
});
formatter.result({
  "duration": 35821657000,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_LoginPageTest.user_click_on_I_Acknowledge_tab()"
});
formatter.result({
  "duration": 1012680301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin@ognomy.com",
      "offset": 33
    }
  ],
  "location": "StepDefinition_LoginPageTest.user_enters_valid_Email_Address(String)"
});
formatter.result({
  "duration": 263490300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@Ognomy123",
      "offset": 28
    }
  ],
  "location": "StepDefinition_LoginPageTest.user_enters_valid_Password(String)"
});
formatter.result({
  "duration": 85587300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_LoginPageTest.user_click_on_Login_button()"
});
formatter.result({
  "duration": 68565700,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition_LoginPageTest.user_close_the_Browser()"
});
formatter.result({
  "duration": 334090700,
  "status": "passed"
});
});