
     ,-----.,--.                  ,--. ,---.   ,--.,------.  ,------.
    '  .--./|  | ,---. ,--.,--. ,-|  || o   \  |  ||  .-.  \ |  .---'
    |  |    |  || .-. ||  ||  |' .-. |`..'  |  |  ||  |  \  :|  `--, 
    '  '--'\|  |' '-' ''  ''  '\ `-' | .'  /   |  ||  '--'  /|  `---.
     `-----'`--' `---'  `----'  `---'  `--'    `--'`-------' `------'
    ----------------------------------------------------------------- 


Welcome to your Node.js project on Cloud9 IDE!

This chat example showcases how to use `socket.io` with a static `express` server.

## Running the server

1) Open `server.js` and start the app by clicking on the "Run" button in the top menu.

2) Alternatively you can launch the app from the Terminal:

    $ node server.js

Once the server is running, open the project in the shape of 'https://projectname-username.c9.io/'. As you enter your name, watch the Users list (on the left) update. Once you press Enter or Send, the message is shared with all connected clients.







// Eran 7.6 

- run server node server.js or nodemon server.js 
- stop with Ctrl+C .

- accsess at http://javascripttester-eranotz50.c9.io/ 

- all the application logic is in /client/app/js/app.js for now . the seperation i decided on is external scripts directcly under client 
and our specific scripts under app. ( kinda like the soloution structure when using bower, FYI use bower.. ) 


* simple binding - enter bug id and get the bug using a rest call  
* you can search for bugs here : https://landfill.bugzilla.org/bugzilla-tip/buglist.cgi?bug_status=__open__&no_redirect=1&order=Importance&query_format=specific  
* OnClick does a get request and retrives the bug from landfill.

1) Read about scope , seperate OnLoadedController to a real controller for bug retriveal 
2) Read about dependency injection, in what functions can i have injected values . how would it be possible to recive injected values in my OnClick function.
   ( i saw an exmaple somewhere where it seems like an internally defined function was reciving $http as a depedendency , 
       but as far as i can tell only stuff registered with an angular module can be injected dependencies , kinda like registering it with an IoC),
       
3) Read about template , create a template for a bug object.

**look for spell checking options in this IDE for this readme file.



4) make a change and revert to previous commit 


// 8.6 learning git fundementels.