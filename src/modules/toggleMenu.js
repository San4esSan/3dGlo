const toggleMenu = () =>{
  const btnMenu = document.querySelector('.menu'),
    menu = document.querySelector('menu');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    }

    btnMenu.addEventListener('click', (event) => {
      let target = event.target.closest('.menu');
      if(target.classList.contains('menu')){
        handlerMenu();
      }         
    });

    menu.addEventListener('click', (event) => {
      let target = event.target;
      if(target.tagName === 'A'){
        handlerMenu();
      }
    });
};

export default toggleMenu; 