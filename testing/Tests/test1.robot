*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}      http://localhost:3000/rsvp
*** Test Cases ***
Positive RSVP Submission Test
    Open Browser    ${URL}    Chrome
    Input Text      id=name   John Doe
    Input Text      id=email   johndoe@example.com
    Input Text      id=number   1234567890
    Click Button    id=rsvp
    Element Should Contain    id=confirm     Your information has to be successfully sent. Thank you for your RSVP. Invitation will be sent out soon using the information you submitted.
    Close Browser