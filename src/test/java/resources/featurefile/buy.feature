Feature: Search functionality
  As a User I should able to check search functionality
  @Sanity
  Scenario Outline:  Search the buy car with model
    Given I am on homepage
    When I mouse hover on “buy+sell” tab
    And I click Search Cars
    Then I navigate to new and used car search page
    And I select make "<make>"
    And I select model "<model>"
    And I select location "<location>"
    And I select price "<price>"
    And I click on Find My Next Car tab
    Then I should see the make "<make>" in results

    Examples:
      | make    | model    | location        | price   |
      | Hyundai | IX35     | NSW - Hunter    | $20,000 |
      | Honda   | CR-V     | NSW - Newcastle | $25,000 |
      | BMW     | 2 Series | NSW - All       | $80,000 |
      | Audi    | A3       | NSW - All       | $30,000 |
      | Suzuki  | Liana    | NSW - All       | $50,000 |
      | Jeep    | Patriot  | NSW - Newcastle | $40,000 |
