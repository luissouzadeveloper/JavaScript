// Funções recursivas

function recursiva(max){
    if (max >= 5) return;
    max++;
    console.log(max);
    recursiva(max);
}
recursiva(0)