Feature: user should not be able to login successfully with invalid credential

  Background:
    Given user is on home page

  @invalidscenario
  Scenario Outline: user should not be able to login with invalid credential
    When user enters "<invalid_username>" and "<invalid_password>"
    And user click on Login
    Then user should see "<Error_Message>"
    Examples:
      | invalid_username | invalid_password | Error_Message            |
      | Admin            | admin1234        | Invalid credentials      |
      | Admin            | admin134         | Invalid credentials      |
      | Admin            | admin1           | Invalid credentials      |
      | Admin            |                  | Password cannot be empty |
      |                  | admin123         | Username cannot be empty |
      | admin01          | admin123         | Invalid credentials      |
      | Admin            | Admin12          | Invalid credentials      |
      |                  |                  | Username cannot be empty |
