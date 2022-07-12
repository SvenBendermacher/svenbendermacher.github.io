// for news items

function fetchNewsitems() {
  const newsitemReq = new Request('http://MacBook-Air-van-Sven.local:1337/api/newsitems?populate=*&fields=*&sort=datum:DESC');
  
  fetch(newsitemReq)
      .then(response => response.json())
      .then(newsitems => {

          let newsitemList = document.getElementById("news-list-all");

          Object.values(newsitems)[0].forEach((newsitem) => {
              newsitemList.appendChild(createNewsCard(newsitem));
          });          
      });
}

function createNewsCard(newsitem) {

  let cardBody = document.createElement("div");
  cardBody.classList.add("card-body-news");

  let newsTitle = document.createElement("h3");
  newsTitle.classList.add("card-title");
  newsTitle.innerHTML = Object.values(newsitem)[1].title;

  let newsDate = document.createElement("a");
  newsDate.classList.add("datum");
  newsDate.innerHTML = Object.values(newsitem)[1].datum;

  let newsImage = document.createElement("img");
  newsImage.classList.add("newsImage");

  if (Object.values(Object.values(newsitem)[1].image)[0] !== null) {
    newsImage.src = "http://MacBook-Air-van-Sven.local:1337" + Object.values(Object.values(Object.values(newsitem)[1].image)[0])[1].url;
  }

  let newsPoster = document.createElement("img");
  newsPoster.classList.add("newsPoster");

  if (Object.values(Object.values(newsitem)[1].poster)[0] !== null) {
    newsPoster.src = "http://MacBook-Air-van-Sven.local:1337" + Object.values(Object.values(Object.values(newsitem)[1].poster)[0])[1].url;
  }

  let newsDescription = document.createElement("a");
  newsDescription.innerHTML = Object.values(newsitem)[1].description;

  cardBody.append(newsTitle, newsDescription, newsDate, newsImage, newsPoster);

  return cardBody;
}

fetchNewsitems();
