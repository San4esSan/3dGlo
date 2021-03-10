class Validator{
  constructor({selector, pattern, method}){
    this.selector = selector;
    this.pattern = pattern;
    this.method = method;
  }

  init() {
    this.applyStyle();
    console.log(this.selector);
  }

  showError(elem){

  }

  showSuccess(elem){

  }

  applyStyle(){
    const style = document.createElement('style');

    document.head.appendChild(style);
  }
}