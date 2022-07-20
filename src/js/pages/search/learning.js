import Dominit from "../../modules/dominit";

async function getData(keyword) {
  let res = await fetch(`https://learning.emofid.com/api/?reqType=emofid-search&q=${keyword}`);
  res = await res.json();
  return res;
}

function renderPosts(posts) {

  let templateObj = {
    el: 'div',
    attrs: {
      class: 'posts-wrapper flex wrap'
    },
    children: []
  };

  posts.data.forEach((post) => {
    let thisPost = {
      el: 'div',
      attrs: {
        class: 'post-item'
      },
      children: [
        {
          el: 'div',
          attrs: {
            class: 'card flex-column'
          },
          children: [
            {
              el: 'a',
              attrs: {
                href: post.permalink
              },
              children: [
                {
                  el: 'img',
                  attrs: {
                    src: post.thumbnail,
                    class: 'mb-3',
                    width: '1920',
                    height: '1080'
                  }
                }
              ]
            },
            {
              el: 'div',
              attrs: {
                class: 'body px-3 pb-4'
              },
              children: [
                {
                  el: 'a',
                  attrs: {
                    href: post.permalink
                  },
                  children: [
                    {
                      el: 'h3',
                      text: post.title,
                      attrs: {
                        class: 'text-dark mb-2'
                      },
                    }
                  ]
                },
                {
                  el: 'p',
                  text: post.excerpt,
                  attrs: {
                    class: 't-14 text-light'
                  }
                }
              ]
            }
          ]
        }
      ]
    };

    templateObj.children.push(thisPost);

  });

  const postsContainer = document.getElementById("search-learning-posts");
  new Dominit(
    postsContainer,
    templateObj
  );

  var badge = document.getElementById("posts-badge-counter");
  badge.innerText = `${posts.count} مورد`;

}

function renderQuestions(posts) {

  let templateObj = {
    el: 'div',
    attrs: {
      class: 'questions-wrapper flex-column'
    },
    children: []
  };

  posts.data.forEach((post) => {
    let thisPost = {
      el: 'div',
      attrs: {
        class: 'question-item'
      },
      children: [
        {
          el: 'div',
          attrs: {
            class: 'flex-column'
          },
          children: [
            {
              el: 'a',
              attrs: {
                href: post.permalink,
              },
              children: [
                {
                  el: 'h3',
                  text: post.title,
                  attrs: {
                    class: 'flex align-center t-20 text-darker mb-2'
                  }
                }
              ]
            },
            {
              el: 'p',
              text: post.excerpt,
              attrs: {
                class: 't-14 text-lighter lh-26'
              }
            }
          ]
        }
      ]
    };

    templateObj.children.push(thisPost);

  });

  const postsContainer = document.getElementById("search-learning-questions");
  new Dominit(
    postsContainer,
    templateObj
  );

  var badge = document.getElementById("questions-badge-counter");
  badge.innerText = `${posts.count} مورد`;

}

async function render() {
  let data = await getData(window.EMOFID.search_keyword);
  renderPosts(data.posts);
  renderQuestions(data.questions);
}

render();
