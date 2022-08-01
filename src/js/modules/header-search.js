import Dominit from './dominit';
var searchButton = document.querySelector('#header-search-button');
var headerSearch = document.querySelector('#header-search');
var headerSearchInput = document.getElementById("header-search-input");
const App = document.getElementById("search-results-wrapper");


const RESULTS_PER_TYPE = 2;


searchButton.addEventListener('click', function (e) {
  e.stopPropagation();
  headerSearch.classList.add("active");
});

// close search bar
document.body.addEventListener('click', function () {
  headerSearch.classList.remove("active");
});

headerSearch.addEventListener('click', function (e) {
  e.stopPropagation();
});


// focus and blur
// headerSearchInput.addEventListener('focus', function () {
//   headerSearch.classList.add('focused');
// });

headerSearchInput.addEventListener('blur', function () {
  headerSearch.classList.remove('focused');
});


// handle input earch
var searchTimeOut = null;
headerSearchInput.addEventListener('input', function (e) {
  clearTimeout(searchTimeOut);
  searchTimeOut = setTimeout(function () {
    new Search(e.target.value);
  }, 1500);
});




function Search(key) {

  // search in emofid website
  function searchInSite() {
    return new Promise(async (resolve, reject) => {
      let response = await fetch(`${window.EMOFID.api_url}/search?search=${key}`);

      if (response.status !== 200) {
        reject();
      }

      response = await response.json();
      resolve(response);
    });
  }

  // search in learning website
  function searchInLearning() {
    return new Promise(async (resolve, reject) => {
      let response = await fetch(`https://learning.emofid.com/api/?reqType=emofid-search&q=${key}`);

      if (response.status !== 200) {
        reject();
      }

      response = await response.json();
      resolve(response);
    });
  }


  async function getAllResults() {
    let values = await Promise.all([
      searchInSite(),
      searchInLearning()
    ]);

    const data = {
      news: {
        label: 'اخبار',
        data: values[0]
      },
      articles: {
        label: 'مقالات آموزشی',
        data: values[1].posts.data,
      },
      questions: {
        label: 'سوالات پشتیبانی',
        data: values[1].questions.data
      }
    };

    return data;
  }

  async function cleanPrevResults() {
    App.replaceChildren();
  }

  async function drawResults() {
    cleanPrevResults();
    let results = await getAllResults();
    headerSearch.classList.add('focused');
    for (const [key, item] of Object.entries(results)) {

      let { label, data } = item;

      let rows = data.slice(0, RESULTS_PER_TYPE).map((resultItem) => {
        return {
          el: 'a',
          text: resultItem.title,
          attrs: {
            href: resultItem.permalink || resultItem.url
          }
        }
      });

      var templateObject = {
        el: 'div',
        attrs: {
          class: 'section flex-column'
        },
        children: [
          {
            el: 'div',
            text: label,
            attrs: {
              class: 'label'
            }
          },
          {
            el: 'div',
            attrs: {
              class: 'items flex-column'
            },
            children: rows
          },
        ]
      };

      if (data.length > 0) new Dominit(
        App,
        templateObject
      );
    }


  }


  drawResults();
}
