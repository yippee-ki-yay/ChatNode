$(document).ready(function() {
    var socket = io.connect("http://localhost:6969");
    
    socket.on("msg", function(msg) {
       addMsg(msg); 
    });
    
    
    //adds the msg to the chat list/history
    function addMsg(msg) {
        var chat_list = $("#chat_list");
        
        chat_list.append('<li>' + msg +'</msg>');
        
    }
    
    
      //when the user sends the msg add to page and broadcast to all other clients
    $(document).keypress(function(e) {
        
        if(e.which === 13) {
            var msg = $('#msg_text').val();
        
            addMsg(msg);
            socket.emit('msg', msg);

            //clear the text input
            $('#msg_text').val('');  
            
        }
        
    });
    
});

