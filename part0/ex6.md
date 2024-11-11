```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User enters text and clicks 'save' button
    Note right of browser: Browser creates new local note entry with text and date
    Note right of browser: New entry is pushed to ul 'notes' and ul is rerendered

    Note right of browser: New POST request with entry in .json format to server
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    Note left of server: Server creates new entry in 'notes' list
    server-->>browser: HTTP status code 201 'created'
    deactivate server
