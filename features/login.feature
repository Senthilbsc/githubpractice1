Feature: SauceDemo login
  As a user I want to log in to SauceDemo so I can see the inventory

  Scenario: Successful login
    Given I am on the login page
    When I login with valid credentials
    Then I should see the inventory page
