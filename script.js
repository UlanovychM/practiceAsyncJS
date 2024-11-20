'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

//  const getCountryData = country => {
//    const request = new XMLHttpRequest();

//    request.open('GET', `https:restcountries.com/v3.1/name/${country}`);

//    request.send();
//    request.addEventListener('load', () => {
//      const [data] = JSON.parse(request.responseText);
//      console.log(data);

//      const currencies = data.currencies;
//      const currenciesName = Object.values(currencies)[0].name;
//      const currenciesSymbol = Object.values(currencies)[0].symbol;

//      const languages = data.languages;
//      const languagesName = [Object.values(languages)].map(lang => lang);

//      const html = `
//          <article class="country">
//            <img class="country__img" src="${data.flags.svg}" />
//            <div class="country__data">
//              <h3 class="country__name">${data.name.common}</h3>
//              <h4 class="country__region">${data.region}</h4>
//              <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
//                +data.population / 1000000
//              ).toFixed(1)} millions</p>
//              <p class="country__row"><span>🗣️</span>${languagesName}</p>
//              <p class="country__row"><span>💰</span>${currenciesSymbol} ${currenciesName}</p>
//            </div>
//          </article>

//  	`;

//      countriesContainer.insertAdjacentHTML('beforeend', html);
//      countriesContainer.style.opacity = 1;
//    });
//  };

const displayCountry = data => {
  const currencies = data.currencies;
  const currenciesName = Object.values(currencies)[0].name;
  const currenciesSymbol = Object.values(currencies)[0].symbol;

  const languages = data.languages;
  const languagesName = [Object.values(languages)].map(lang => lang);

  const html = `
           <article class="country">
             <img class="country__img" src="${data.flags.svg}" />
             <div class="country__data">
               <h3 class="country__name">${data.name.common}</h3>
               <h4 class="country__region">${data.region}</h4>
               <p class="country__row"><span>👨‍👩‍👧‍👦</span>${(
                 +data.population / 1000000
               ).toFixed(1)} millions</p>
               <p class="country__row"><span>🗣️</span>${languagesName}</p>
               <p class="country__row"><span>💰</span>${currenciesSymbol} ${currenciesName}</p>
             </div>
           </article>

   	`;

  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = country => {
  const request = fetch(`https:restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => displayCountry(data[0]));
};

getCountryData('ukraine');
getCountryData('canada');
