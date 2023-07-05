/* const navList = document.getElementById("list");
let items = [{Text :"Home", Link = "/Home.html"}
{Text :"About", Link = "/About.html"}
{Text :"Services", Link = "/Services.html"}
{Text :"Portfolio", Link = "/Portfolio.html"}
{Text :"Contact", Link = "/Contact.html"}];
let generateList = ()=>{ 
    return( 
        navList.innerHTML = items
        .map((x)=> {
            return `<li><a href='x.Link'>${x.Text}</a></li>` 
}).join(""));
};
  navList.innerHTML = generateList();

  let devInfo = [
    {"Intro,": "Hei,I am",
    "name": "Mr.Sailesh Karki",
    "about":"Engineer, Developer, Enterpreneur, Traveller..",
     "moreAbout":"Hei, I am a Software Developer. I live in Helsinki, Finland.I love visiting beautiful place and meditiate for divine soul."
    }
]; */


var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(let tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for (let tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab")

}
