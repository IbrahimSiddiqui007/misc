$(document).ready(function()
{
    var typed = new Typed(".TYP1",{
    strings:["","Developer","Photographer","Guitarist","Audiophile","Techie","Car Enthusiast"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    });
});

$(document).ready(function()
{
    var typed = new Typed(".Titles",{
    strings:["Ibrum's <span style='color:#00eeff'>E-Profile</span>"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    });
});



function validateForm(){
    if (document.getElementById("FName").value === "" || !(document.getElementById("LName").value).match(/^[0-9]+$/)) {
        alert("The First Name Cannot Be empty")
    }
        
    if (document.getElementById("LName").value === "" || !(document.getElementById("LName").value).match(/^[0-9]+$/)) {
        alert("The Last Name Cannot Be empty")
    }

    if (!(document.getElementById("Email").value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)))
    {
        alert("You have entered an invalid email address!")
    }
    
    if (document.getElementById("CCountry").value === "")
    {
        alert("Please Select a Country")
    }

    if (document.getElementById("MSSG").value === "")
    {
        alert("Please enter a Message")
    }

    if (!(document.getElementById("FName").value === "") && !(document.getElementById("LName").value === "")&&(document.getElementById("Email").value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))&&!(document.getElementById("CCountry").value === "")&&!(document.getElementById("MSSG").value === ""))
    {
        alert("Success ur message was sent")
    }
}

function loadXMLDoc(filename)
{
if (window.ActiveXObject)
  {
  xhttp = new ActiveXObject("Msxml2.XMLHTTP");
  }
else
  {
  xhttp = new XMLHttpRequest();
  }
xhttp.open("GET", "CV.xml",true);
try {xhttp.responseType = "msxml-document"} catch(err) {} // Helping IE11
xhttp.send("");
return xhttp.responseXML;
}

function displayResult()
{
xml = loadXMLDoc("CV.xml");
xsl = loadXMLDoc("CV.xsl");
// code for IE
if (window.ActiveXObject || xhttp.responseType == "msxml-document")
  {
  ex = xml.transformNode(xsl);
  document.getElementById("example").innerHTML = ex;
  }
// code for Chrome, Firefox, Opera, etc.
else if (document.implementation && document.implementation.createDocument)
  {
  xsltProcessor = new XSLTProcessor();
  xsltProcessor.importStylesheet(xsl);
  resultDocument = xsltProcessor.transformToFragment(xml, document);
  document.getElementById("example").appendChild(resultDocument);
  }
}