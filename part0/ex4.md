```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User enters text and clicks 'save' button

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/new_notes
    activate server
    Note left of server: JS code on server for new_notes action is executed
    server-->>browser: HTTP status code 302
    deactivate server


    Note right of browser: status code 302 tells browser to request main.css, main.js and data.json again

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: updated data.json file with new entry
    deactivate server

    