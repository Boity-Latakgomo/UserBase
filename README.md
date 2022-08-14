 How the app works
 - The app retrieves list of dates and their correspoding values (number of users).
 - You can filter by "all", "start date", "end date", any date with this format (day-month-year) and if you enter a date that is not added in the database then    you will see the text "Your entered filter is not in the data".
 
 To execute the method, in the command line interface:
 1) node index 
  - (this will retrive a list of all data), default filter is "all".
 2) node index -f "start date"
  - (this will retrieve a data filtered by start date)
 3) node index -f "01-01-2022"
  - (this will retrieve a data filtered by the specified date "01-01-2022")
 ...etc
 
 For testing
 run:
 jest test
 
 Setting it up locally
 - You need to have node.js and npm installed in your machine.
 - After cloning the project you need to do the following in the root project directory:
    - Delete package.lock file.
    - Delete node_modules folder if it's in the project.
    - run npm install --force
    - And you are good to go.
