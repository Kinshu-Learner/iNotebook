# iNotebook | Your notebook on the web

**Created using the MERN stack and Bootstrap**

iNotebook offers various features like creating, updating or deleting your notes.

A user will first have to login/signup in order to use iNotebook.

## Login
If a user has an existing account on iNotebook, they can simpy `Login` using their login details.

![Login](/Screenshots/iNotebook_Login2.png)

## Sign Up
If a user DOES NOT have an existing account on iNotebook, they can create one, simply by clicking on the `Sign Up` button, and filling in the required details.

![Signup](/Screenshots/iNotebook_Signup1.png)

A user has to either `Login` or `Sign Up` before they can use iNotebook.

## Home Page

Once the user has signed in, they will find themselves on this Home Screen, which currently has no notes.

![Home_empty](/Screenshots/iNotebook_Home_empty2.png)


They can simply add a new note by filling in the necessary details like the Note `Title`, `Description`, and a Note `Tag`. Once they do this, they'll be able to add that note simply by clicking on the `Add Note` button.

![Details](/Screenshots/iNotebook_Details2.png)

Once they click on the `Add Note` button, there note will be added on the Home Screen, which they can view after login in, and no one else can see it.

![Home_filled](/Screenshots/iNotebook_Added_Note1.png)

## Updating/Deleting a Note

If the user wants to update or delete a note, they can do so by simply clicking on the `Delete` (trashcan) icon, or the `Update` (pen/note) icon next to the particular note.

If they click on the update icon, a modal will pop up where they can update whatever they want, and can save the changes simply by clicking on the `Update Note` button once they're happy.

![Update](/Screenshots/iNotebook_Updating_Note1.png)

---

Once the user is done using the application, they can simply log out using the `Logout` button on the top right corner, so that no one else will be able to see their notes without logging in.

`Bycrypt.js` and `JWT Authentication` have been used to enhance the overall sercutiry of the application.