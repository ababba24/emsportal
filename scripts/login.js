function fto(){
    var passcode = "V201U2RtSkhPVzVoVnpROQ==";
    var ftoForm = document.getElementById("fto-login");
    var textareaList = ftoForm.getElementsByTagName("input");
    var textareaText = textareaList[0].value;
    //check password
    var password = textareaText;
    for(var i = 0; i < 3; i++)
    {
        password = window.btoa(password);
    }
    //set cookie
    if(passcode == password)
    {
        var d = new Date();
        var cname = "fto";
        var cvalue = "true";
        d.setTime(d.getTime() + (7*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        location.reload();
    }
}

function command(){
    var passcode = "WW0xT2VXTkhlSHBhYlZFOQ==";
    var commandForm = document.getElementById("command-login");
    var textareaList = commandForm.getElementsByTagName("input");
    var textareaText = textareaList[0].value;

    var password = textareaText;
    //check password
    for(var i = 0; i < 3; i++)
    {
        password = window.btoa(password);
    }
    //set cookie
    if(passcode == password)
    {
        var d = new Date();
        var cname = "command";
        var cvalue = "true";
        d.setTime(d.getTime() + (7*24*60*60*1000));
        var expires = "expires="+d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        location.reload();
    }
}