package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features="src/main/java/com/features",
		glue="com.stepdef",
		dryRun=false,//it is used to compile feature file
		monochrome=true,
		plugin="html:target",
		 tags="@JBK" // tags are used to run specific scenario
		)

public class TestRunner {

}
