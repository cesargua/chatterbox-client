// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();



    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);

    //TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
        //use parse get here?
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);

      // TODO: Use the data to update Messages and Rooms
      //call
      Messages.add(data);
      //Rooms.add(data)

      // and re-render the corresponding views.
      //call mesagesView render here?
      
       //use parse get here?
    });
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
