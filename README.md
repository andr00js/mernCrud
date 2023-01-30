# MERN CRUD JSON React browser app
# This app allows you to add, remove, and view JSONs stored in a MongoDB database on both front end and back end, either manually or at set intervals.
# 1. Type 'git clone https://github.com/andr00js/mernCrud' in terminal to clone this repo into the current folder open in terminal.
# 2. Download node.js
# 3. Run 'npm install' in 'mernCrud' folder to load repo dependencies.
# 4. Create a file named '.env' in 'mernCrud/server' folder. Save MongoDB url in a variable named 'DATABASE_URL'. Save TCP port number in variable named 'PORT'.
# 5. Run 'npm run server' in 'mernCrud/server' folder to see an instance of the server at 'localhost:PORT'. 
# 6. Customize the loadDatabase.js file in 'mercrud/server/serverfunctions' to upload a stream of data from a URL. Run 'npm run load' to begin loading to database. Run 'npm run clear' to empty database.
# 6. Run 'npm run client' in 'mernCrud/client' folder to see an instance of the client. The client will open in the browser and will be connected to the MongoDB url entered in step 4.