// get the references to the html elements:
const navItems = document.querySelectorAll("nav form a");
//console.log(navItems);
const container = document.querySelector(".bucket");

let path = "http://localhost/hottopics/partials/home.html";

// handling clicking
function handleClick(ev) {
    
    // prevetns link from redirecting
    ev.preventDefault();
    
    // current url is collected:
    path = ev.target.href;
    console.log(path);
    handleAjax(path);
}


// handling fetching data
function handleAjax(urlValue) {
    fetch(urlValue)
        .then(function (rsp) {
            return rsp.text();
        })
        .then(function (data) {
            container.innerHTML = data;
        })
}

handleAjax(path);

navItems[0].addEventListener("click", handleClick);
navItems[1].addEventListener("click", handleClick);




