const btnmore = document.querySelector(".view-more");
const checkbox = document.querySelector("#planters");
const categ = document.querySelector("#categ5");
const inputfi = document.querySelector(".input input");
const textinput = document.querySelector(".input input");
const deletetext = document.querySelector(".input .icon");
const searchbtn = document.querySelector(".input .search-btn");
const labelsearch = document.querySelector(".search-results");
const relevbtn = document.querySelector(".btn-browsing .relevance-btn");
const popularbtn = document.querySelector(".btn-browsing .popular-btn");
const mostnewbtn = document.querySelector(".btn-browsing .mostnew-btn");

var viewmore = ()=>{
    if(checkbox.style.display === "none" && categ.style.display === "none"){
        checkbox.style.display = "inline";
        categ.style.display = "inline";
        btnmore.innerHTML = "View less <i class=\"fas fa-chevron-up\"></i>"
    }
    else{
        checkbox.style.display = "none";
        categ.style.display = "none";
        btnmore.innerHTML = "View more <i class=\"fas fa-chevron-down\"></i>"
    }
}

inputfi.onkeyup = () =>{
    var text = textinput.value;
    if(text.trim()!=0){
        deletetext.style.display = "block";
    }
    else{
        deletetext.style.display = "none";
    }
}

deletetext.onclick = ()=>{
    textinput.value = "";
    deletetext.style.display = "none";
}

searchbtn.onclick = ()=>{
    labelsearch.innerHTML = "Search Results for "+ "<span>" +"'" + textinput.value + "'" + "</span>";
}

relevbtn.onclick = ()=>{
    relevbtn.classList.add("active-btn");
    popularbtn.classList.remove("active-btn");
    mostnewbtn.classList.remove("active-btn")
}

popularbtn.onclick = ()=>{
    popularbtn.classList.add("active-btn");
    mostnewbtn.classList.remove("active-btn");
    relevbtn.classList.remove("active-btn");
}

mostnewbtn.onclick = ()=>{
    mostnewbtn.classList.add("active-btn");
    relevbtn.classList.remove("active-btn");
    popularbtn.classList.remove("active-btn");
}

/* Media Queries */ 

const btnmenu = document.querySelector(".btn-menu");
const nav_menu = document.querySelector(".nav-menu");

btnmenu.onclick = ()=>{
    if(nav_menu.style.display === "none"){
        nav_menu.style.display = "block";
    }
    else {
        nav_menu.style.display = "none";
    }
}
