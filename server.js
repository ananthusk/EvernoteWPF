var app = require('express')(); // Create an instance of an Express app

var mobileApp = require('azure-mobile-apps')(); // Create an instance of a Mobile App with default settings

// Create tables with default settings
mobileApp.tables.add('UserModel'); 
mobileApp.tables.add('NoteBookModel'); 
mobileApp.tables.add('NoteModel');

app.use(mobileApp);
app.listen(process.env.PORT || 3000);
