// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: {}, //maybe make this into an object
  //EXAMPLE:
    //var _data = {
      //username: 'shawndrost',
      //text: 'trololo',
      //roomname: '4chan',
    //};

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  add: function(data) {
    data.forEach(elem => {
      //_data.campus = elem.campus;
      this._data[elem.message_id] = {}
      this._data[elem.message_id].message_id = elem.message_id;
      this._data[elem.message_id].username = elem.username;
      //_data.github_handle = elem.github_handle;
      this._data[elem.message_id].text = elem.text;
      this._data[elem.message_id].created_at = elem.created_at;
      this._data[elem.message_id].updated_at = elem.updated_at;
      this._data[elem.message_id].roomname = elem.roomname;
    });
    console.log(this._data)

  },

  retrieve: function(message_id, username){
    //retrieve with get
    // messageView would take the specific message using this function
    // to display all messages;
    //messagesView renderAll Message


  }


};