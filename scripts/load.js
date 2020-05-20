function getCookie(cname)
{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie)
    var ca = decodedCookie.split(";");
	
	alert(ca);
	
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
//check date of cookie
//set cookie every time load
//make cookie last one month