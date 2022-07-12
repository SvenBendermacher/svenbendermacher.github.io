
function fetchAgendasAll() {
    const agendaReq = new Request('http://MacBook-Air-van-Sven.local:1337/api/agendas?fields=*&sort=datum:ASC');
    
    fetch(agendaReq)
        .then(response => response.json())
        .then(agendas => {

            let agendaList = document.getElementById("agenda-list-all");

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

fetchAgendasAll();