$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "JBK Offline application",
  "description": "",
  "id": "jbk-offline-application",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 5,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application;login-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@JBK"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enter \"\u003cUNAME\u003e\" and \"\u003cPASS\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "jbk-offline-application;login-test;",
  "rows": [
    {
      "cells": [
        "UNAME",
        "PASS"
      ],
      "line": 12,
      "id": "jbk-offline-application;login-test;;1"
    },
    {
      "cells": [
        "kiran@gmail.com",
        "123456"
      ],
      "line": 13,
      "id": "jbk-offline-application;login-test;;2"
    },
    {
      "cells": [
        "kunal@gmail.com",
        "456987"
      ],
      "line": 14,
      "id": "jbk-offline-application;login-test;;3"
    },
    {
      "cells": [
        "sumit@gmail.com",
        "147852"
      ],
      "line": 15,
      "id": "jbk-offline-application;login-test;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14587985100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application;login-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 4,
      "name": "@JBK"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enter \"kiran@gmail.com\" and \"123456\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 37047536100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kiran@gmail.com",
      "offset": 12
    },
    {
      "val": "123456",
      "offset": 34
    }
  ],
  "location": "LoginStepdef.user_enter_and(String,String)"
});
formatter.result({
  "duration": 29789561300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 156355100,
  "status": "passed"
});
formatter.after({
  "duration": 5419921000,
  "status": "passed"
});
formatter.before({
  "duration": 8878497500,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application;login-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 4,
      "name": "@JBK"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enter \"kunal@gmail.com\" and \"456987\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 3768054300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "kunal@gmail.com",
      "offset": 12
    },
    {
      "val": "456987",
      "offset": 34
    }
  ],
  "location": "LoginStepdef.user_enter_and(String,String)"
});
formatter.result({
  "duration": 470324000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 13695600,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Dashboard]\u003e but was:\u003cJavaByKiran | [Log in]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdef.LoginStepdef.user_should_be_on_home_page(LoginStepdef.java:50)\r\n\tat ✽.Then user should be on home page(login.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 165644900,
  "status": "passed"
});
formatter.before({
  "duration": 3269136600,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "login test",
  "description": "",
  "id": "jbk-offline-application;login-test;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@login"
    },
    {
      "line": 4,
      "name": "@JBK"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user should be on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enter \"sumit@gmail.com\" and \"147852\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user should be on home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdef.user_should_be_on_login_page()"
});
formatter.result({
  "duration": 9123181400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sumit@gmail.com",
      "offset": 12
    },
    {
      "val": "147852",
      "offset": 34
    }
  ],
  "location": "LoginStepdef.user_enter_and(String,String)"
});
formatter.result({
  "duration": 395393800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdef.user_should_be_on_home_page()"
});
formatter.result({
  "duration": 7979300,
  "error_message": "org.junit.ComparisonFailure: expected:\u003cJavaByKiran | [Dashboard]\u003e but was:\u003cJavaByKiran | [Log in]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.stepdef.LoginStepdef.user_should_be_on_home_page(LoginStepdef.java:50)\r\n\tat ✽.Then user should be on home page(login.feature:9)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 128850400,
  "status": "passed"
});
});