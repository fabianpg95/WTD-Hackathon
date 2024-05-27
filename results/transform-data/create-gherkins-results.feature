```gherkin
Feature: Login Functionality

  Scenario: Login with valid credentials
    Given the user is on the login page
    When the user enters a valid username
    And the user enters a valid password
    And the user clicks on the login button
    Then the user is redirected to the dashboard page

  Scenario: Login with invalid credentials
    Given the user is on the login page
    When the user enters an invalid username
    And the user enters an invalid password
    And the user clicks on the login button
    Then the error message "Invalid username or password" is displayed

Feature: Password Reset Functionality

  Scenario: Password reset with valid email
    Given the user is on the password reset page
    When the user enters a valid email address
    And the user clicks on the "Reset Password" button
    Then a confirmation message "Password reset link has been sent to your email" is displayed

  Scenario: Password reset with invalid email
    Given the user is on the password reset page
    When the user enters an invalid email address
    And the user clicks on the "Reset Password" button
    Then the error message "Please enter a valid email address" is displayed

Feature: User Registration Functionality

  Scenario: Register with all valid fields
    Given the user is on the registration page
    When the user enters a valid first name
    And the user enters a valid last name
    And the user enters a valid email address
    And the user enters a valid password
    And the user confirms the password
    And the user clicks on the "Register" button
    Then the user is registered and redirected to the welcome page

  Scenario: Register with missing required fields
    Given the user is on the registration page
    When the user leaves one or more required fields empty
    And the user clicks on the "Register" button
    Then the error message "Please fill out this field" is displayed for each empty required field

Feature: Profile Update Functionality

  Scenario: Update profile with valid data
    Given the user is logged in and on the profile page
    When the user enters valid profile data
    And the user clicks on the "Save" button
    Then the profile is updated successfully with a confirmation message "Profile updated successfully"

  Scenario: Update profile with invalid data
    Given the user is logged in and on the profile page
    When the user enters invalid profile data (e.g., incorrect email format)
    And the user clicks on the "Save" button
    Then the error message "Please enter valid data" is displayed

Feature: Search Functionality

  Scenario: Search with valid search query
    Given the user is on the search page
    When the user enters a valid search query
    And the user clicks on the "Search" button
    Then relevant search results are displayed

  Scenario: Search with no results found
    Given the user is on the search page
    When the user enters a search query that has no matching results
    And the user clicks on the "Search" button
    Then the message "No results found" is displayed
```