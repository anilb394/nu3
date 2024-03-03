const { Builder, By, Key, until } = require('selenium-webdriver');

// Function to perform valid login test
async function performvalidLoginTest() {
  // Initialize the WebDriver 
  // Note:WebDriver path needs to be updated in the script to include the correct path to the ChromeDriver executable
  const driver = await new Builder().forBrowser('chrome').build();

  try {
    // Navigating to the login page
    await driver.get('https://www.nu3.de/account/login');

    // Find and input valid Email and password
    await driver.findElement(By.id('CustomerEmail')).sendKeys('test.email@gmail.com');
    await driver.findElement(By.id('CustomerPassword')).sendKeys('Test_password@123');

    // Click on the login button using xpath 
    await driver.findElement(By.xpath('/html/body/main/div[2]/div/div[2]/div/div/div[2]/form/p[1]/input')).click();

    // Wait for the login to complete and check the redirect or any success element
    //Note:( This needs to replaced with actual locator value on redirect or finding success element)
    await driver.wait(until.elementLocated(By.id('dashboard')), 5000);

    // Print success message
    console.log('Login test passed successfully!');
  } catch (error) {
    // Print error message if login fails
    console.error('Login test failed:', error);
  } finally {
    // Close the browser window
    await driver.quit();
  }
}

// Execute the login test
performvalidLoginTest();
