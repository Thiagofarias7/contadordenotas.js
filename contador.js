var dinheiro;
//VARIÁVEIS QUE GUARDAM A QUANTIDADE DAS NOTAS
var nCemSaida, nCinquentaSaida,nVinteSaida, nDezSaida, nCincoSaida, nDoisSaida, mUmSaida, mCinquentaSaida, mVinteCincoSaida, mDezSaida, mCincoSaida;
dinheiro = parseFloat(prompt('digite o valor de saque'));
//TRATAMENTO
if (dinheiro <= 0){
	console.log('valor inválido:','digite o valor corretamente');
}else{
	//DECOMPOR OS VALORES ATÉ O ÚLTIMO CENTAVO QUE ELE PODE ENTREGAR
	var nCem = Math.floor(dinheiro / 100);
	var resto = (dinheiro % 100);
	var nCinquenta = Math.floor(resto / 50);
	var resto = (resto % 50);
	var nVinte = Math.floor(resto / 20);
	var resto = (resto % 20);
	var nDez = Math.floor(resto / 10);
	var resto = (resto % 10);
	var nCinco = Math.floor(resto / 5);
	var resto = (resto % 5);
	var nDois = Math.floor(resto / 2);
	var resto = (resto % 2);
	var mUm = Math.floor(resto / 1);
	var resto = (resto % 1);
	var mCinquenta = Math.floor(resto / 0.50);
	var resto = (resto % 0.50);
	var mVinteCinco = Math.floor(resto / 0.25);
	var resto = (resto % 0.25);
	var mDez = Math.floor(resto / 0.10);
	var resto = (resto % 0.10);
	var mCinco = Math.floor(resto / 0.05);
	var resto = (resto % 0.05);
	//EXIBE OS VALORES
	console.log (nCem, 'notas de cem');
	console.log (nCinquenta, 'notas de cinquenta');
	console.log (nVinte, 'notas de 20');
	console.log (nDez, 'notas de dez');
	console.log (nCinco, 'notas de cinco');
	console.log (nDois, 'notas de dois');
	console.log (mUm, 'moedas de um');
	console.log (mCinquenta, 'moedas de 50');
	console.log (mVinteCinco, 'moedas de 25');
	console.log (mDez, 'moedas de 10');
	console.log (mCinco, 'moedas de 5');
}	
console.log('estas são as quantidades de notas e/ou moedas que equivalem a R$%d', dinheiro);
