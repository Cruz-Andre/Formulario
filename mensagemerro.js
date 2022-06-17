document.querySelector('#name').oninvalid = function() {  
    // remove mensagens de erro padrão
    this.setCustomValidity("");
    // faz a validação novamente
    if (!this.validity.valid) {
        // se estiver inválido, coloca a mensagem
        this.setCustomValidity("O campo nome é obrigatório!");
     }
 };

 document.querySelector('#email').oninvalid = function() {  
    // remove mensagens de erro padrão
    this.setCustomValidity("");
    // faz a validação novamente
    if (!this.validity.valid) {
        // se estiver inválido, coloca a mensagem
        this.setCustomValidity("O campo E-mail é obrigatório!");
     }
 };