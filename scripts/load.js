function getCookie(cname)
{
    var name = cname + "=";
	var cookie = getCookie2(cname);
	alert(cookie);
    var decodedCookie = decodeURIComponent(document.cookie)
	alert(name);
	alert(decodedCookie);
    var ca = decodedCookie.split(";");
	
	
    for(var i = 0; i < ca.length; i++) 
    {
        var c = ca[i];
        while(c.charAt(0) == ' ')
        {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0)
        {
            return c.substring(name.length, c.length)
        }
    }
    return "";
}
//check date of cookie
//set cookie every time load
//make cookie last one month

function checkLoad() 
{
    loadBackground();
    var fto = getCookie("fto");
    if(fto != "")
    {
        fto = new Boolean(true);
    }
    var command = getCookie("command");
    if(command !="")
    {
        command = new Boolean(true);
    }
    //if not command & not fto, del boxes
    if(!command)
    {
        var commandBoxes = document.getElementsByClassName("box-command-documents");
        commandBoxes[0].innerHTML = "";
        commandBoxes[0].classList.remove("box-command-documents");
    }
    if(!fto)
    {
        var ftoBoxes = document.getElementsByClassName("box-fto-documents");
        ftoBoxes[0].innerHTML = "";
        ftoBoxes[0].classList.remove("box-fto-documents");
    }
}

function loadBackground()
{
    var x = Math.floor(Math.random() * 27) + 1;
    var image_name = "url('assets/backgrounds/" + x.toString() + ".png')";
    var bg = document.getElementById("bg");
    bg.style.backgroundImage = image_name;
}


function getCookie2(name) {
    // Split cookie string and get all individual name=value pairs in an array
    var cookieArr = document.cookie.split(";");
    
    // Loop through the array elements
    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");
        
        /* Removing whitespace at the beginning of the cookie name
        and compare it with the given string */
        if(name == cookiePair[0].trim()) {
            // Decode the cookie value and return
            return decodeURIComponent(cookiePair[1]);
        }
    }
    
    // Return null if not found
    return null;
}