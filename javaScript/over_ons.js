
// for about text

function fetchAbouttext() {
    const abouttextReq = new Request('http://MacBook-Air-van-Sven.local:1337/api/abouttext?fields=description');
    fetch(abouttextReq)
        .then(response => response.json())
        .then(abouttext => {
            let aboutText = document.getElementById("aboutText");
            Object.values(abouttext).forEach((abouttext) => {
                aboutText.innerHTML = Object.values(abouttext)[1].description;
})})};

fetchAbouttext();

// for timeline

function fetchTimeline() {
    const timelineReq = new Request('http://MacBook-Air-van-Sven.local:1337/api/timelineitems?populate=*&fields=*&sort=year:ASC');
    
    fetch(timelineReq)
        .then(response => response.json())
        .then(timelineitems => {

            let timelineList = document.getElementById("timeline-list");

            Object.values(timelineitems)[0].forEach((timelineitem) => {
                timelineList.appendChild(createTimelineCard(timelineitem));
            });          
        });
}

function createTimelineCard(timelineitem) {

    let cardBody = document.createElement("div");
    cardBody.classList.add("timeline-item");

    let timelineimg = document.createElement("div");
    timelineimg.classList.add("timeline-img");

    let timelinecontent = document.createElement("div");
    timelinecontent.classList.add("timeline-content");
    timelinecontent.classList.add("js--fadeInRight");
    timelinecontent.classList.add("timeline-card")

    let timelineTitle = document.createElement("h2");
    timelineTitle.innerHTML = Object.values(timelineitem)[1].title;

    let timelineYear = document.createElement("div");
    timelineYear.classList.add("date");
    timelineYear.innerHTML = Object.values(timelineitem)[1].year;

    let timelineText = document.createElement("div")
    timelineText.classList.add("timelinetext")

    let timelineDescription = document.createElement("a");
    timelineDescription.innerHTML = Object.values(timelineitem)[1].description;

    
    let timelineImage = document.createElement("img");
    timelineImage.classList.add("timeline-img-header");

    if (Object.values(Object.values(timelineitem)[1].image)[0] !== null) {
        timelineImage.src = "http://MacBook-Air-van-Sven.local:1337" + Object.values(Object.values(Object.values(timelineitem)[1].image)[0])[1].url;
    }

    timelineText.append(timelineTitle, timelineDescription)

    timelinecontent.append(timelineImage, timelineYear, timelineText)

    cardBody.append(timelinecontent, timelineimg);

    return cardBody;
}

fetchTimeline();