const ourTeam = () => {
  const commandPhoto = document.querySelectorAll('.command__photo');
  for(let i = 0; i < commandPhoto.length; i++){
    let photo = commandPhoto[i].src;
    commandPhoto[i].addEventListener('mouseenter', (event) => {
      event.target.src = event.target.dataset.img;
    });
    commandPhoto[i].addEventListener('mouseleave', (event) => {
      event.target.src = photo;
    });    
  } 
};

export default ourTeam; 