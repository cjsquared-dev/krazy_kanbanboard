# krazy_kanbanboard


![License](https://img.shields.io/badge/license-MIT-blue.svg)

## Description
A Krazy Kanban Board to track tasks and move the tasks along a workflow.


# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [API](#api)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
Uploaded to Netifly. 

Website Link: https://krazy-kanbanboard.onrender.com/


## Usage
A website built to allow users to keep track of their tasks and their progress.

Main Page:
![Screenshot 2024-11-21 at 9 03 43 AM](https://github.com/user-attachments/assets/b04b15f3-96d9-48cb-998c-20d5482e97e3)

Click Login to open login prompt, and enter username and password.
![Screenshot 2024-11-21 at 9 03 58 AM](https://github.com/user-attachments/assets/7e73a73a-c859-4e7f-a538-609d1003e7bf)

Once logged in, you will have access to your Kanban board.

![Screenshot 2024-11-21 at 9 04 21 AM](https://github.com/user-attachments/assets/767ecb05-8624-4980-86d8-2eac2f931270)


From this page you will be able to either edit or delete an existing task or create a new one.

If you choose to edit you should see the following page:
![Screenshot 2024-11-21 at 9 04 29 AM](https://github.com/user-attachments/assets/c5d5407a-8c8c-4800-9351-25eea56ab96c)

If you choose to create a ticket, you will see a page allowing you to create by filling in the details:
![Screenshot 2024-11-21 at 9 04 39 AM](https://github.com/user-attachments/assets/102cc099-df86-423b-b266-7d262eb85ed2)



## API

This site also contains an interactive API. Please download Assets/Insomnia_M14_Challenge.json to import into Insomnia API platform.
![Screenshot 2024-11-21 at 9 20 19 AM](https://github.com/user-attachments/assets/7645da0a-fcb6-4a52-be6c-353354ee7ea5)


Once imported, you can make a call using the POST Login call to obtain an Authorization token as shown below:
![Screenshot 2024-11-21 at 9 18 22 AM](https://github.com/user-attachments/assets/da615ea6-e365-4d56-b9ad-11553750fb0a)

That authorization token can then be populated in the other API calls by doing the following:

Select the Auth tab, and click on the token selection in red :

![Screenshot 2024-11-21 at 9 19 08 AM](https://github.com/user-attachments/assets/cfa78ef5-0639-4d40-98b3-387dd85849b1)

A dialog will appear and you will select POST Login:

![Screenshot 2024-11-21 at 9 19 19 AM](https://github.com/user-attachments/assets/68b64e13-90b9-435e-abbc-9981f7baa2b9)

This will pass the value of the token to the API call and can be verified in the Live Preview space at the bottom:
![Screenshot 2024-11-21 at 9 19 24 AM](https://github.com/user-attachments/assets/80604265-e51f-44a8-81a5-1184de5d6242)

The repsonse field will then be highlighted blue indicating successful passing of the token. You can now send your request and view the response on the right side:
![Screenshot 2024-11-21 at 9 19 33 AM](https://github.com/user-attachments/assets/9cf8d44f-7545-4f72-9f77-62c5e074dc91)

Repeat steps for other API calls.


## License
This project is licensed under the MIT License.

## Contributing
Always contribute with a smile on your face!

## Tests
Test often, and always!

PLEASE USE Test Credentials to access application and API:

Username: JollyGuru 
Password: password

Username: RadiantComet
Password: password

## Questions
For any questions, please reach out to cjsquared-dev.
