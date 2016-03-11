var chat = (function() {
    var socket = io.connect("http://localhost:6969");
    
    socket.on("msg", function(msg) {
       alert(msg); 
    });
    
    
    function addMsg(msg) {
        var chat_list = $("#chat_list");
        
        chat_list.append('<li>' + msg +'</msg>');
        
    }
    
})();