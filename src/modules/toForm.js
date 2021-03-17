const toForm = () => {
  const form = document.querySelectorAll('form');

  const toTitleCase = (str) => {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  };

  const toString = (str) => {
    return str
    .replace(/-+/g, '-')
    .replace(/ +/g, ' ')
    .replace(/^ +/gm, '')
    .replace(/^-/g, '')
    .replace(/-$/g, '');
  };

  const validateElem = (elem) => {
    switch (elem.name) {      
      case 'user_name':
        elem.value = toTitleCase(elem.value);
        elem.value = toString(elem.value);
      break;
      case 'user_email':
        elem.value = toString(elem.value).toLowerCase();
      break;
      case 'user_phone':
        elem.value = toString(elem.value);
      break;
      case 'user_message':
        elem.value = elem.value.charAt(0).toUpperCase() + elem.value.toLowerCase().slice(1);
        elem.value = toString(elem.value);
      break;
    }
  };

  const inputRestriction = (elem) => {
    if(elem.name === 'user_name'){
      elem.value = elem.value.replace(/[^а-я\s-]/ig, '');      
    }
    if(elem.name === 'user_email'){
      elem.value = elem.value.replace(/[^a-z.@\-_*'!~]/ig, '');
    }
    if(elem.name === 'user_phone'){
      elem.value = elem.value.replace(/[^0-9()-]/ig, '');
    }
  };

  for(let i = 0; i < form.length; i++){

    for(let elem of form[i].elements){
      if(elem.tagName !== 'BUTTON'){
        elem.addEventListener('input', () => {
          inputRestriction(elem);
        });
        elem.addEventListener('blur', () => {
          validateElem(elem);
        });
      }
    }
  
    form[i].addEventListener('submit', (event) => {
      event.preventDefault();
    });
  }
};

export default toForm;