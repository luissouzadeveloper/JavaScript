// Factory functions

function criaPessoa(nome, sobrenome, altura, peso){
    return {
        nome, 
        sobrenome,

        // Getter
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },

        fala(assunto){
            return `${this.nome} está falando ${assunto}`
        },

        altura: altura,
        peso: peso,

        // Getter
        get imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2);
        },

        // Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ');
            console.log(valor)
        }
    };
}

const p1 = criaPessoa('Adriano', 'Vieira', 1.65, 60);
console.log(p1.imc);
console.log(`Nome completo: ${p1.nomeCompleto}`);
p1.nomeCompleto = 'Luis Felipe Souza'
console.log(p1.nomeCompleto);
console.log(p1.fala('sobre js'));
