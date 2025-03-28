Feature: Demo Feature

    @demo
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Search with <SearchItem>
        Then Click on the first search result
        Then The URL should match <ExpectedURL>
        
        Examples:
            | TestID     | SearchItem | ExpectedURL |
            | DEMO_TC001 | wdio       | "https://webdriver.io/" |