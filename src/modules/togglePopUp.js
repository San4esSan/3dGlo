const togglePopUp = () => {
  const popup = document.querySelector('.popup'),
  popupBtn = document.querySelectorAll('.popup-btn'),
  popupContent = document.querySelector('.popup-content');
  let width = document.documentElement.clientWidth;
    
  let count = 50;
    let popupDown = () => {
    count++;
    popupContent.style.top = count + 'px';
    if(count < 150){
      setTimeout(popupDown, 5);
      }
    }

    window.addEventListener("resize", function() {
      width = document.documentElement.clientWidth;
      }, false);
    
  popupBtn.forEach((elem) =>  {
    elem.addEventListener('click', () => {
      popup.style.display = 'block';      
      if(width > 768){
        popupDown();
      }else{
        popupContent.style.top = 'none';
      }      
    });
  });

  popup.addEventListener('click', (event) => {
    let target = event.target;
    if(target.classList.contains('popup-close')){
      popup.style.display = 'none';
      popupContent.style.top = 50;
      count = 50;
    } else {
      target = target.closest('.popup-content');
      if(!target){
        popup.style.display = 'none';
        popupContent.style.top = 50;
        count = 50;
      }
    }      
  });
};

export default togglePopUp;