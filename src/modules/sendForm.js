const sendForm = () => {
  const errorMassage = 'Что то пошло не так...',
    loadMessage = 'Загрузка...',
    successMessage = 'Спасибо! Мы скоро с вами свяжемся!';
    
  const form = document.querySelectorAll('form');
  const inputs = document.querySelectorAll('input');
  const statusMessage = document.createElement('div');
  statusMessage.style.cssText = 'font-size: 2rem;';
  statusMessage.style.color = 'yellow';
  
  form.forEach(item => {      
    item.addEventListener('submit', (event) => {
      event.preventDefault();

      item.appendChild(statusMessage);

      statusMessage.textContent = loadMessage;
      
      const formData = new FormData(item);

      const clearInputs = () => {
        inputs.forEach(item => {
          item.value = '';
        });
      };


      // let body = {};
      // formData.forEach((val, key) =>{
      //   body[key] = val;
      // });        
      // postData(body)
        
      postData(formData)
      .then((response) => {
        event.preventDefault();
        if(response.status !==200){
          throw new Error('status network not 200');
        }
        statusMessage.textContent = successMessage;
        setTimeout(() => document.querySelector('.popup').style.display = 'none', 3000);
      })
      .catch((error) => {
        statusMessage.textContent = errorMassage;
        console.log(error);
      })
      .finally(() => {
        clearInputs();
        setTimeout(() => statusMessage.remove(), 3000);
      });

    });
  });

  const postData = (formData) => {
    return fetch('./server.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'aplication/json'
      },
      // body: JSON.stringify(body)
      body: formData
    });
  };   
};

export default sendForm;