//js抓取api網址，呈現到html
//document.getElementById("demo").innerHTML = my();

    const header = document.querySelector('header');
    const section = document.querySelector('section');
   // var requestURL = 'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json';
    var request = new XMLHttpRequest();
	var url = "try.json";
    request.open('GET', requestURL);
    request.responseType = 'text';
    request.send();
    request.onload = function() {
      const superHeroesText = request.response;
      const superHeroes = JSON.parse(superHeroesText);
      populateHeader(superHeroes);
      //showHeroes(superHeroes);
    }

    function populateHeader(jsonObj) {
      const myPara = document.createElement('p');
      myPara.textContent = 'Hometown: ' ;
      header.appendChild(myPara);
    }
/*    function showHeroes(jsonObj) {
      const heroes = jsonObj['members'];
      for(let i = 0; i < heroes.length; i++) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');
        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';
        const superPowers = heroes[i].powers;
        for(let j = 0; j < superPowers.length; j++) {
          const listItem = document.createElement('li');
          listItem.textContent = superPowers[j];
          myList.appendChild(listItem);
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
		
      }
    }*/
 