const sendForm = () => {
  const errorMassage = 'Что то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    
  const form = document.querySelectorAll('form'),
    statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';
    statusMessage.style.color = 'yellow';
  
  for(let i = 0; i < form.length; i++){
    form[i].addEventListener('submit', (event) => {
      event.preventDefault();
      form[i].appendChild(statusMessage);
      console.log(form[i]);

      statusMessage.textContent = loadMessage;
      const formData = new FormData(form[i]);
      
      let body = {};
      
      formData.forEach((val, key) =>{
        body[key] = val;
      });

      postData(body)
        .then((response) => {
          if(response.status !==200){
            throw new Error('status network not 200');
          }
          statusMessage.textContent = successMessage;
          document.querySelectorAll('input, textarea').forEach(el=>el.value = '');
          setTimeout(() => statusMessage.remove(), 3000);
          const popup = document.querySelector('.popup');
          setTimeout(() => popup.style.display = 'none', 3000);
        })
        .catch((error) => {
          statusMessage.textContent = errorMassage;
          console.log(error);
          document.querySelectorAll('input, textarea').forEach(el=>el.value = '');
          setTimeout(() => statusMessage.remove(), 4000);
        });
    });
  }

  const postData = (body) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json'
      },
      body: JSON.stringify(body)
    });

  };
  postData();
};

export default sendForm;