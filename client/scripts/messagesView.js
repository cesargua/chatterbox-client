// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),
  $button: $('#button'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    //render()
  },

  render: function() {
    // TODO: Render _all_ the messages.
    //for in loop
      //this.renderMessage(someMessage)

    //use parse readall here?
  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    //retrieve from messages
    // call MessageView.render()

  },

  //controller
  handleClick: function(event) {
    // TODO: handle a user clicking on a message

      //onclick here
    // (this should add the sender to the user's friend list).
  }

};