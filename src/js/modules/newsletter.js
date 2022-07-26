import Toast from './Toast';

var newsletterForm = document.querySelector('.newsletter-form');
var newsletterEmail = document.querySelector('#newsletter-email');


newsletterForm.addEventListener('submit', async function (e) {
  e.preventDefault();

  this.classList.add('loading');
  let response = await fetch(
    window.EMOFID.home_url + '/wp-json/newsletter/v1/store',
    {
      method: 'POST',
      body: JSON.stringify({
        email: newsletterEmail.value
      })
    }
  );
  response = await response.json();
  this.classList.remove('loading');

  if (response.status) {
    new Toast({
      text: 'ایمیل شما با موفقیت ثبت شد.',
      theme: 'success'
    });
    return;
  }

  new Toast({
    text: response.error,
    theme: 'error'
  });

});
