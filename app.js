const films = [
  { title: "The Great Train Robbery", year: 1903, desc: "Tren soygunu ve kovalamaca sahneleri.", poster: "https://upload.wikimedia.org/wikipedia/commons/2/2b/Great_Train_Robbery_trailer_frame.jpg" },
  { title: "The Mark of Zorro", year: 1920, desc: "Kılıç dövüşleri ve maskeli kahraman macerası.", poster: "https://upload.wikimedia.org/wikipedia/commons/3/3d/The_Mark_of_Zorro_1920.jpg" },
  { title: "The Perils of Pauline", year: 1914, desc: "Serüven dolu macera filmi.", poster: "https://upload.wikimedia.org/wikipedia/commons/7/7c/Perils_of_Pauline_1914.jpg" },
  { title: "Steamboat Bill, Jr.", year: 1928, desc: "Harold Lloyd’un fiziksel komedi ve aksiyon sahneleri.", poster: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Steamboat_Bill%2C_Jr._poster.jpg" },
  { title: "Blackmail", year: 1929, desc: "Hitchcock’tan gerilim ve aksiyon öğeleri.", poster: "https://upload.wikimedia.org/wikipedia/commons/4/45/Blackmail_1929.jpg" }
];

const filmList = document.getElementById('film-list');

films.forEach(film => {
  const li = document.createElement('li');
  li.innerHTML = `
    <h3>${film.title} (${film.year})</h3>
    <img src="${film.poster}" alt="${film.title} afiş" style="width:100px;height:auto">
    <p>${film.desc}</p>
  `;
  filmList.appendChild(li);
});
<head><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8722521161742523"
     crossorigin="anonymous"></script></head>
