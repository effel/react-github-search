## Project: Search of User Github repository info

In this folder my test project, which was created for sake to find all possible
public repositories of specific user. There search input with button. When name of the user was written
in text field, nessesary after that press button 'Send' next to it. There possible 3 variants of next actions:
1) Current user exist and have public folders.
 
 <h6>
  In that case list of public folders for current user will be appear on page with specific information for each  folder:
  Name of repository, Number of stars, Number of forks. If click on lict item will be happening redirect to current github repository.
</h6>

2) Current user exist but does not have any folders.
 
 <h6>
  In that case text warning "The amount of folders is 0" will appears on page below search field.
</h6>

3) User not exist in github or some error happened on send request;
 
 <h6>
  In that case text warning "Error!!" will appears on page below search field.
</h6>

## For setting up project I used standard create-react-app with some changes

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

I skipped some steps while developing for saving time: I did not set up sass and haven't installed libraries for jest (for example enzyme).

## I hope You will enjoying while this test task reviewing. Good luck!