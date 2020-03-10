$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/invalidScenario.feature");
formatter.feature({
  "line": 1,
  "name": "user should not be able to login successfully with invalid credential",
  "description": "",
  "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "user should not be able to login with invalid credential",
  "description": "",
  "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential;user-should-not-be-able-to-login-with-invalid-credential",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@invalidscenario"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters \"\u003cinvalid_username\u003e\" and \"\u003cinvalid_password\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should not be able to see \"\u003cInvalid_credentials\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential;user-should-not-be-able-to-login-with-invalid-credential;",
  "rows": [
    {
      "cells": [
        "invalid_username",
        "invalid_password",
        "Invalid_credentials"
      ],
      "line": 12,
      "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential;user-should-not-be-able-to-login-with-invalid-credential;;1"
    },
    {
      "cells": [
        "Admin",
        "admin12",
        "Invalid credentials"
      ],
      "line": 13,
      "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential;user-should-not-be-able-to-login-with-invalid-credential;;2"
    },
    {
      "cells": [
        "Admin",
        "admin13",
        "Invalid credentials"
      ],
      "line": 14,
      "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential;user-should-not-be-able-to-login-with-invalid-credential;;3"
    },
    {
      "cells": [
        "Admin",
        "admin1",
        "Invalid credentials"
      ],
      "line": 15,
      "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential;user-should-not-be-able-to-login-with-invalid-credential;;4"
    },
    {
      "cells": [
        "Admin",
        "",
        "Password cannot be empty"
      ],
      "line": 16,
      "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential;user-should-not-be-able-to-login-with-invalid-credential;;5"
    },
    {
      "cells": [
        "",
        "admin123",
        "Username cannot be empty"
      ],
      "line": 17,
      "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential;user-should-not-be-able-to-login-with-invalid-credential;;6"
    },
    {
      "cells": [
        "admin1",
        "admin123",
        "Invalid credentials"
      ],
      "line": 18,
      "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential;user-should-not-be-able-to-login-with-invalid-credential;;7"
    },
    {
      "cells": [
        "Admin",
        "Admin12",
        "Invalid credentials"
      ],
      "line": 19,
      "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential;user-should-not-be-able-to-login-with-invalid-credential;;8"
    },
    {
      "cells": [
        "",
        "",
        "Username cannot be empty"
      ],
      "line": 20,
      "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential;user-should-not-be-able-to-login-with-invalid-credential;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 12223814400,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_home_page()"
});
formatter.result({
  "duration": 119769800,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "user should not be able to login with invalid credential",
  "description": "",
  "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential;user-should-not-be-able-to-login-with-invalid-credential;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@invalidscenario"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters \"Admin\" and \"admin12\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should not be able to see \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    },
    {
      "val": "admin12",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.user_enters_and(String,String)"
});
formatter.result({
  "duration": 186648800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_Login()"
});
formatter.result({
  "duration": 856071400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.user_should_not_be_able_to_see(String)"
});
formatter.result({
  "duration": 35273900,
  "error_message": "java.lang.AssertionError: Invalid credentials expected [Invalid credentials] but found [ ]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat WebTest2.Utils.assertTextMessage(Utils.java:28)\r\n\tat WebTest2.HomePage.userShouldSeeErrorMessage(HomePage.java:30)\r\n\tat WebTest2.MyStepDefs.user_should_not_be_able_to_see(MyStepDefs.java:31)\r\n\tat ✽.Then user should not be able to see \"Invalid credentials\"(src/test/resources/Features/invalidScenario.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 499773600,
  "status": "passed"
});
formatter.before({
  "duration": 10796913100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_home_page()"
});
formatter.result({
  "duration": 7141000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "user should not be able to login with invalid credential",
  "description": "",
  "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential;user-should-not-be-able-to-login-with-invalid-credential;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@invalidscenario"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters \"Admin\" and \"admin13\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should not be able to see \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    },
    {
      "val": "admin13",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.user_enters_and(String,String)"
});
formatter.result({
  "duration": 172944600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_Login()"
});
formatter.result({
  "duration": 1125397800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.user_should_not_be_able_to_see(String)"
});
formatter.result({
  "duration": 35294600,
  "error_message": "java.lang.AssertionError: Invalid credentials expected [Invalid credentials] but found [ ]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat WebTest2.Utils.assertTextMessage(Utils.java:28)\r\n\tat WebTest2.HomePage.userShouldSeeErrorMessage(HomePage.java:30)\r\n\tat WebTest2.MyStepDefs.user_should_not_be_able_to_see(MyStepDefs.java:31)\r\n\tat ✽.Then user should not be able to see \"Invalid credentials\"(src/test/resources/Features/invalidScenario.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 434140600,
  "status": "passed"
});
formatter.before({
  "duration": 11111736900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_home_page()"
});
formatter.result({
  "duration": 6334500,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "user should not be able to login with invalid credential",
  "description": "",
  "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential;user-should-not-be-able-to-login-with-invalid-credential;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@invalidscenario"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters \"Admin\" and \"admin1\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should not be able to see \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    },
    {
      "val": "admin1",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.user_enters_and(String,String)"
});
formatter.result({
  "duration": 162341700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_Login()"
});
formatter.result({
  "duration": 935833200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.user_should_not_be_able_to_see(String)"
});
formatter.result({
  "duration": 60634900,
  "error_message": "java.lang.AssertionError: Invalid credentials expected [Invalid credentials] but found [ ]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat WebTest2.Utils.assertTextMessage(Utils.java:28)\r\n\tat WebTest2.HomePage.userShouldSeeErrorMessage(HomePage.java:30)\r\n\tat WebTest2.MyStepDefs.user_should_not_be_able_to_see(MyStepDefs.java:31)\r\n\tat ✽.Then user should not be able to see \"Invalid credentials\"(src/test/resources/Features/invalidScenario.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 406169200,
  "status": "passed"
});
formatter.before({
  "duration": 10964196900,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_home_page()"
});
formatter.result({
  "duration": 6053500,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "user should not be able to login with invalid credential",
  "description": "",
  "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential;user-should-not-be-able-to-login-with-invalid-credential;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@invalidscenario"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters \"Admin\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should not be able to see \"Password cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    },
    {
      "val": "",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.user_enters_and(String,String)"
});
formatter.result({
  "duration": 159610700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_Login()"
});
formatter.result({
  "duration": 105043000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password cannot be empty",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.user_should_not_be_able_to_see(String)"
});
formatter.result({
  "duration": 32541200,
  "error_message": "java.lang.AssertionError: Password cannot be empty expected [Password cannot be empty] but found [ ]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat WebTest2.Utils.assertTextMessage(Utils.java:28)\r\n\tat WebTest2.HomePage.userShouldSeeErrorMessage(HomePage.java:30)\r\n\tat WebTest2.MyStepDefs.user_should_not_be_able_to_see(MyStepDefs.java:31)\r\n\tat ✽.Then user should not be able to see \"Password cannot be empty\"(src/test/resources/Features/invalidScenario.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 485786200,
  "status": "passed"
});
formatter.before({
  "duration": 11073965700,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_home_page()"
});
formatter.result({
  "duration": 6446900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "user should not be able to login with invalid credential",
  "description": "",
  "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential;user-should-not-be-able-to-login-with-invalid-credential;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@invalidscenario"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters \"\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should not be able to see \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "admin123",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.user_enters_and(String,String)"
});
formatter.result({
  "duration": 150803600,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_Login()"
});
formatter.result({
  "duration": 108116700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.user_should_not_be_able_to_see(String)"
});
formatter.result({
  "duration": 45304400,
  "error_message": "java.lang.AssertionError: Username cannot be empty expected [Username cannot be empty] but found [ ]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat WebTest2.Utils.assertTextMessage(Utils.java:28)\r\n\tat WebTest2.HomePage.userShouldSeeErrorMessage(HomePage.java:30)\r\n\tat WebTest2.MyStepDefs.user_should_not_be_able_to_see(MyStepDefs.java:31)\r\n\tat ✽.Then user should not be able to see \"Username cannot be empty\"(src/test/resources/Features/invalidScenario.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 442867200,
  "status": "passed"
});
formatter.before({
  "duration": 11507719800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_home_page()"
});
formatter.result({
  "duration": 5618900,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "user should not be able to login with invalid credential",
  "description": "",
  "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential;user-should-not-be-able-to-login-with-invalid-credential;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@invalidscenario"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters \"admin1\" and \"admin123\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should not be able to see \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "admin1",
      "offset": 13
    },
    {
      "val": "admin123",
      "offset": 26
    }
  ],
  "location": "MyStepDefs.user_enters_and(String,String)"
});
formatter.result({
  "duration": 182578700,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_Login()"
});
formatter.result({
  "duration": 430786100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.user_should_not_be_able_to_see(String)"
});
formatter.result({
  "duration": 40988500,
  "error_message": "java.lang.AssertionError: Invalid credentials expected [Invalid credentials] but found [ ]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat WebTest2.Utils.assertTextMessage(Utils.java:28)\r\n\tat WebTest2.HomePage.userShouldSeeErrorMessage(HomePage.java:30)\r\n\tat WebTest2.MyStepDefs.user_should_not_be_able_to_see(MyStepDefs.java:31)\r\n\tat ✽.Then user should not be able to see \"Invalid credentials\"(src/test/resources/Features/invalidScenario.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 430336900,
  "status": "passed"
});
formatter.before({
  "duration": 11752270100,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_home_page()"
});
formatter.result({
  "duration": 6002500,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "user should not be able to login with invalid credential",
  "description": "",
  "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential;user-should-not-be-able-to-login-with-invalid-credential;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@invalidscenario"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters \"Admin\" and \"Admin12\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should not be able to see \"Invalid credentials\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Admin",
      "offset": 13
    },
    {
      "val": "Admin12",
      "offset": 25
    }
  ],
  "location": "MyStepDefs.user_enters_and(String,String)"
});
formatter.result({
  "duration": 174393800,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_Login()"
});
formatter.result({
  "duration": 843767500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid credentials",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.user_should_not_be_able_to_see(String)"
});
formatter.result({
  "duration": 38339500,
  "error_message": "java.lang.AssertionError: Invalid credentials expected [Invalid credentials] but found [ ]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat WebTest2.Utils.assertTextMessage(Utils.java:28)\r\n\tat WebTest2.HomePage.userShouldSeeErrorMessage(HomePage.java:30)\r\n\tat WebTest2.MyStepDefs.user_should_not_be_able_to_see(MyStepDefs.java:31)\r\n\tat ✽.Then user should not be able to see \"Invalid credentials\"(src/test/resources/Features/invalidScenario.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 441212900,
  "status": "passed"
});
formatter.before({
  "duration": 11457232800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "user is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "MyStepDefs.user_is_on_home_page()"
});
formatter.result({
  "duration": 6131200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "user should not be able to login with invalid credential",
  "description": "",
  "id": "user-should-not-be-able-to-login-successfully-with-invalid-credential;user-should-not-be-able-to-login-with-invalid-credential;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@invalidscenario"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "user enters \"\" and \"\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user click on Login",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user should not be able to see \"Username cannot be empty\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 13
    },
    {
      "val": "",
      "offset": 20
    }
  ],
  "location": "MyStepDefs.user_enters_and(String,String)"
});
formatter.result({
  "duration": 124465200,
  "status": "passed"
});
formatter.match({
  "location": "MyStepDefs.user_click_on_Login()"
});
formatter.result({
  "duration": 91805400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Username cannot be empty",
      "offset": 32
    }
  ],
  "location": "MyStepDefs.user_should_not_be_able_to_see(String)"
});
formatter.result({
  "duration": 42346200,
  "error_message": "java.lang.AssertionError: Username cannot be empty expected [Username cannot be empty] but found [ ]\r\n\tat org.testng.Assert.fail(Assert.java:97)\r\n\tat org.testng.Assert.assertEqualsImpl(Assert.java:136)\r\n\tat org.testng.Assert.assertEquals(Assert.java:118)\r\n\tat org.testng.Assert.assertEquals(Assert.java:575)\r\n\tat WebTest2.Utils.assertTextMessage(Utils.java:28)\r\n\tat WebTest2.HomePage.userShouldSeeErrorMessage(HomePage.java:30)\r\n\tat WebTest2.MyStepDefs.user_should_not_be_able_to_see(MyStepDefs.java:31)\r\n\tat ✽.Then user should not be able to see \"Username cannot be empty\"(src/test/resources/Features/invalidScenario.feature:10)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 490973800,
  "status": "passed"
});
});