function buscaTempo(){
	// função global
	var data = new Date();
	var semana = data.getDay();
	var dia = data.getDate();
	var mes = data.getMonth();
	var ano = data. getFullYear();
	var hora = data.getHours();
	var minuto = data.getMinutes();
	var segundo = data.getSeconds();

// Adiciona 0 aos algarismos
	if(segundo < 10){
		segundo = "0" + segundo;
	}
	if(minuto < 10){
		minuto = "0" + minuto;
	}
	if(hora < 10){
		hora = "0" + hora;
	}
//Mes
	dm = new Array()
	dm[0] = "Janeiro"
	dm[1] = "Fevereiro"
	dm[2] = "Março"
	dm[3] = "Abril"
	dm[4] = "Maio"
	dm[5] = "Junho"
	dm[6] = "Julho"
	dm[7] = "Agosto"
	dm[8] = "Setembro"
	dm[9] = "Outubro"
	dm[10] = "Novembro"
	dm[11] = "Dezembro"
// Dias da semana
	dsemana = new Array()
	dsemana[0] = "Domingo"
	dsemana[1] = "Segunda-feira"
	dsemana[2] = "Terça-feira"
	dsemana[3] = "Quarta-feira"
	dsemana[4] = "Quinta-feira"
	dsemana[5] = "Sexta-feira"
	dsemana[6] = "Sábado"
// Frases
	frase = new Array()
	frase[0] = "Nada é em vão, se não é benção é lição!"
	frase[1] = "Nenhum obstáculo é tão grande se sua vontade de vencer for maior!"
	frase[2] = "Coragem é ir de falha em falha sem perder o entusiasmo!"
	frase[3] = "Respire, repense, reajuste e recomece. Quantas vezes forem preciso."
	frase[4] = "Insista, persista e não desista!"
	frase[5] = "O sucesso é a soma de pequenos esforços, repetidos dia após dia!"
	frase[6] = "O segredo da vida não é ter tudo o que você quer, mas sim, amar tudo o que você tem!"
	frase[7] = "A felicidade não depende do que nós temos, mas sim como nós lidamos com elas."
	frase[8] = "Seja a mudança que você quer ver no mundo!"
	frase[9] = "É pra frente que se anda, pra cima que se olha e é lutando que se conquista!"
	frase[10] = "A vida é muito curta para fazer o que não gosta!"
	frase[11] = "O que não te desafia, não te transforma!"
	frase[12] = "Se você não perguntar, a resposta será sempre não!"
	frase[13] = "Desfrute da simplicidade e da incerteza da vida!"
	frase[14] = "Não tenha medo da mudança, coisas melhores virão!"
	frase[15] = "O crescimento do outro não diminui o seu!"
	frase[16] = "O corpo alcança o que a mente acredita!"
	frase[17] = "Vai! E se der medo, vai com medo mesmo, o que importa é tentar!"
	frase[18] = "Que o vento leve o necessário e traga o suficiente!"
	frase[19] = "Seja você mesmo, porque todos os outros já existem!"
	frase[20] = "Atitude é uma coisa pequena que faz uma grande diferença!"
	frase[21] = "Amar a si mesmo é o início de um amor para a vida toda!"
	frase[22] = "As vezes temos que nos perder para nos encontrar!"
	frase[23] = "Cuidado ao esperar a manga amadurecer, porque quando você menos espera, vem outro e come ela com sal..."
	frase[24] = "Se te faz bem, não deixe escapar!"
	frase[25] = "Se foi, era pra ser, se não foi, espera um poquin que tem algo melhor vindo!"
	frase[26] = "Tudo vem com um propósito e se vai com uma razão!"
	frase[27] = "É melhor ser verdadeiro e solitário, do que viver em falsidade e estar sempre acompanhado."
	frase[28] = "Se seu problema é dinheiro, e você não tem dinheiro, então você não tem problema."
	frase[29] = "O importante não é ganhar, é competir sem perder e nem empatar ;)"
	frase[30] = "Quem cedo madruga, passa o dia com sono!"

// Escreve no documento os dados, via "id"
	document.getElementById('bSemana').innerText = dsemana[semana];
	document.getElementById('bData').innerText = (dia + " de " + dm[mes] + " de " + ano);
	document.getElementById('bHora').innerText = (hora + ":" + minuto + ":" + segundo);
	document.getElementById('bFrase').innerText = frase[dia];
	setTimeout("buscaTempo()","1000");
	// Define a taxa de atualização dos números

}
