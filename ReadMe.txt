Getting Started:

1. Open a terminal and run 'npm install'
2. Start the server with 'npm run start'

Setting Up Your Database:

note: please have postgresql installed. Open up a seperate terminal.

1. To start run 'psql postgresql'
2. Create your own postgresql user with 'CREATE ROLE <username> WITH LOGIN PASSWORD '<password>';
3. In order to copy
4. Log out after creating a new user with '\q'
5. Log back in with newly created user with 'psql postgres -U <user>'
6. To import the schema file run 'psql postgres -U <user> -f schema.sql'
7. Change the filepaths in the ELT file to match the filepath where the CSV files are located on your machine.
8. Run 'psql postgres -U <user> -f elt.sql'

Run npm start if you havent yet. You are good to go!