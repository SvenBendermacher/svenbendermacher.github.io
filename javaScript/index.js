
// start local strapi server in Terminal: cd boemelkapel-cms && yarn develop
// and do cd my-project
// log in to: http://localhost:1337/admin
// log in to from different pc on same network: http://MacBook-Air-van-Sven.local:1337/admin
//
// heroku
// heroku login
//
// when seting up a new server activate public permissions in Role settings
// to use Publisher plugin add file to ./config/plugins.js
// and add:
//  module.exports = ({ env }) => ({
//	    publisher: {
//		    enabled: true,
//	    },
//  });
//
// investigate backup plugins
//
// use &sort=datum:ASC to sort on date for agenda 
// use &pagination[pageSize]=3 to show a limited amount of items
// use window.open("").document.write("<html><head><link rel='stylesheet' href='CSS/style.css'><title>Mytitle</title></head><body>test</body></html>");
// to open a new html file for showing news items on new page without having it stored somewhere

// for the agenda items

function fetchAgendas() {
    const agendaReq = new Request('http://MacBook-Air-van-Sven.local:1337/api/agendas?fields=*&sort=datum:ASC&pagination[pageSize]=3');
    
    fetch(agendaReq)
        .then(response => response.json())
        .then(agendas => {

            let agendaList = document.getElementById("agenda-list");

            Object.values(agendas)[0].forEach((agenda) => {
                agendaList.appendChild(createAgendaCard(agenda));
            });          
        });
}

function createAgendaCard(agenda) {

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body-agenda");

    let line = document.createElement("div");
    line.classList.add("line");

    let button = document.createElement("button");
    button.setAttribute("type", "button");
    button.setAttribute("id", "collapsible");
    button.classList.add("meerInformatie");
    button.classList.add("collapsible");
    button.innerHTML = "Info";

    let agendaTitle = document.createElement("h3");
    agendaTitle.classList.add("card-title");
    agendaTitle.innerHTML = Object.values(agenda)[1].title;

    let agendaDate = document.createElement("a");
    agendaDate.classList.add("datum");
    agendaDate.innerHTML = Object.values(agenda)[1].day + " " + Object.values(agenda)[1].month + " " + Object.values(agenda)[1].year;

    let agendaTime = document.createElement("a");
    agendaTime.classList.add("tijd");
    agendaTime.innerHTML = Object.values(agenda)[1].startTime + " - " + Object.values(agenda)[1].endTime;

    let agendaLocation = document.createElement("a");
    agendaLocation.classList.add("plaats");
    agendaLocation.innerHTML = Object.values(agenda)[1].country + ", " + Object.values(agenda)[1].city + ", " + Object.values(agenda)[1].street + " " + Object.values(agenda)[1].houseNumber;

    let agendaDescriptionBox = document.createElement("div");
    agendaDescriptionBox.classList.add("expandInfo");

    let agendaDescription = document.createElement("a");
    agendaDescription.innerHTML = Object.values(agenda)[1].description;

    agendaDescriptionBox.append(agendaDescription)

    cardBody.append(agendaTitle, button, agendaDescriptionBox, agendaDate, agendaTime, agendaLocation, line);

    return cardBody;
}

fetchAgendas();

// for news items

function fetchNewsitems() {
    const newsitemReq = new Request('http://MacBook-Air-van-Sven.local:1337/api/newsitems?fields=*&sort=datum:DESC&pagination[pageSize]=2');
    
    fetch(newsitemReq)
        .then(response => response.json())
        .then(newsitems => {

            let newsitemList = document.getElementById("news-list");

            Object.values(newsitems)[0].forEach((newsitem) => {
                newsitemList.appendChild(createNewsCard(newsitem));
            });          
        });
}

function createNewsCard(newsitem) {

    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body-news");

    let button = document.createElement("a");
    button.setAttribute("href","nieuws.html")
    button.classList.add("meerInformatie");
    button.classList.add("newpage");
    button.innerHTML = "Meer";

    let newsTitle = document.createElement("h3");
    newsTitle.classList.add("card-title");
    newsTitle.innerHTML = Object.values(newsitem)[1].title;

    let newsDate = document.createElement("a");
    newsDate.classList.add("datum");
    newsDate.innerHTML = Object.values(newsitem)[1].datum;
    
    let newsDescription = document.createElement("a");
    newsDescription.innerHTML = Object.values(newsitem)[1].descriptionShort;

    cardBody.append(newsTitle, button, newsDescription, newsDate);

    return cardBody;
}

fetchNewsitems();

// for hero text

function fetchHerotext() {
    const herotextReq = new Request('http://MacBook-Air-van-Sven.local:1337/api/herotext?fields=description');
    fetch(herotextReq)
        .then(response => response.json())
        .then(herotext => {
            let heroText = document.getElementById("heroText");
            Object.values(herotext).forEach((herotext) => {
                heroText.innerHTML = Object.values(herotext)[1].description;
})})};

fetchHerotext();