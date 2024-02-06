function criaCalculadora(){
    return{
        // Atributos
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        // Métodos
        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        cliqueBotoes(){
            document.addEventListener('click', function(evento){
                const el =  evento.target;

                if (el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if (el.classList.contains('btn-del')) {
                    this.deleteUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            }.bind(this))
        },

        btnParaDisplay(valor){
            this.display.value += valor
        },

        clearDisplay(){
            this.display.value = '';
        },

        deleteUm(){
            this.display.value = this.display.value.slice(0, -1);
        },

        realizaConta(){
            let conta = this.display.value;

            try{
                conta = eval(conta);

                if (!conta) {
                    alert('Conta Inválida!');
                    return;
                }

                this.display.value = String(conta);
            } catch (e){
                alert('Conta Inválida!');
                return;
            }
        },

        pressionaEnter(){
            this.addEventListener('keyup', (evento) =>{
                if (evento.keyCode === 13) {
                    this.realizaConta();
                }
            });
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();