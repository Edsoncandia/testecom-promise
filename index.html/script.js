function f(g,h){
setTimeout(() =>{
if(10 < 0) {
g('p');
}else{
h('q');
}
},3000);

}

function executarSeRejeitar(valor) {
console.log('Rejeitada com o valor' + valor);
}

const minhaPromise = new Promise(f);
minhaPromise.then(valor => {
console.log('Executada com o valor' + valor);
})
.catch(valor => {
console.log('Rejeitada com o valor' + valor);
});
console.log(minhaPromise);