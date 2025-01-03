# Google Clasp
Clasp lets you develop your Apps Script projects locally. You can write code on your own computer and upload it to Apps Script when you're done. We will be using this tool to upload a script that can edit an already exiting google form.


## Requirements

1. Enable the Google Apps Script API for your google account: [Click here to go to settings](https://script.google.com/home/usersettings)
1.  Use the same google account to create a dummy gform in you google drive. Click the `publish` button to publish the gform. We will be editing this google form from the Apps Script.


## Google Form
1.  Clone the github repository
    ```bash
    git clone https://github.com/athena-server/gform-data-fetch.git
    ```
1. Install the dependencies
    ```bash
    npm install 
    ```

1.  Login to your google account through clasp
    ```bash
    npm run login
    ```
    This will open up the Google Sign in window in your browser. Grant all the permissions and you will be now logged in.

1.  Create a standalone script project
    ```
    npm run create
    ```

1.  Ensure the directory structure after all the above steps is as follows:

    ```plaintext
    gform-data-fetch
    ├── node_modules/       # Installed  in step 2
    ├── .clasp.json
    ├── .claspignore
    ├── .gitignore
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── src                 # Folder containing script
        ├── appsscript.json
        ├── code.gs
        └── courses.gs

    ```
    **Note**: The `.clasp.json` file might be created in the `src` folder. You may move it to the parent directory as shown above.

1.  Cross check the contents of `.clasp.json` file to ensure that the "rootDir" is set to "src". If not so, edit the file.
    ```
    {
        "scriptId":"__SCRIPT_ID_DO_NOT_EDIT__",
        "rootDir":"src"
    }

    ```
1.  Edit `src/courses.gs` file.
    ```
    const gfomrUrl = "ADD_YOUR_LINK_HERE";

    const courses = [
        ADD_ANY_EXTRA_COURSES_IF_NEEDED
    ];
    ```
1.  Push the project code
    ```bash
    npm run push
    ```
    Three files in the src folder is pushed. An Apps Script project named `Athena-Gform` is now created in your Google Drive. 

1.  Open the project
    ```bash
    npm run open
    ```
    Apps Scripts will open the script in your browser.
1.  In the browser, open the `code.gs` file. Select the function `gform` from the drop down next to the `Debug` button and click Run. Grant necessary permissions as prompted.

The google form is now titled "Course Feedback" and published. You will get the log containing the gform link details in the Execution Log. You may disable the Apps Scripts settings now.


## Reference

[Clasp Documentation](https://www.npmjs.com/package/@google/clasp)
