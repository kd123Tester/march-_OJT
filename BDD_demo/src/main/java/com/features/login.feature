@login
Feature: JBK Offline application

@JBK
Scenario Outline: login test

Given user should be on login page
When user enter "<UNAME>" and "<PASS>"
Then user should be on home page

Examples:
|UNAME          |  PASS|
|kiran@gmail.com|123456|
|kunal@gmail.com|456987|
|sumit@gmail.com|147852|

Scenario: logo test

Given user should be on login page
Then user should see JBK logo