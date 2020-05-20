function getCookie(cname)
{
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie)
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
    var fto = getCookie("fto-ncrp");
    if(fto != "")
    {
		UpdateCookie("fto-ncrp");
        fto = new Boolean(true);
    }
    var command = getCookie("command-ncrp");
    if(command !="")
    {
		UpdateCookie("command-ncrp");
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

function UpdateCookie(cookie_name)
{
	var d = new Date();
	var cname = cookie_name + "-ncrp";
	var cvalue = "true";
	d.setTime(d.getTime() + (7*24*60*60*1000));
	var expires = "expires="+d.toUTCString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function loadBackground()
{
    var x = Math.floor(Math.random() * 27) + 1;
    var image_name = "url('assets/backgrounds/" + x.toString() + ".png')";
    var bg = document.getElementById("bg");
    bg.style.backgroundImage = image_name;
}