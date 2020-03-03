const extUnidade = ["um", "dois", "tres", "quatro", "cinco", "seis", 
"sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze",
"quinze", "dezesseis", "dezessete", "dezoito", "dezenove"];

const numUnidade = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 
14 , 15, 16, 17, 18, 19];

const extDezena = ["vinte", "trinta", "quarenta", "cinquenta", "sessenta", 
"setenta", "oitenta", "noventa"];

const numDezena = [20, 30, 40, 50, 60, 70, 80, 90];

const extCentena = ["cento", "duzentos", "trezentos", "quatrocentos", 
"quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"];

const numCentena = [100, 200, 300, 400, 500, 600, 700, 800, 900];

let i, entrada, aux, tamanho;
var resultado;

recebeNum = () =>{
    entrada = document.getElementById('valor').value;
    transformarNum(entrada);
}

printa = (num) => {
    document.getElementById('res').value = num;
}

reseta = () => {
    document.getElementById('valor').value = "";
    document.getElementById('res').value = "";
}

transformarNum = (valor) =>{
    aux = valor.toString();
    tamanho = aux.length;
    resultado = "";    

    switch (tamanho){

        case 1:
            resultado += escreveUnidade(valor*1);
            printa(resultado);
            break;
        case 2:
            resultado += procuraDezUni((valor[0]*10), (valor[1]*1));
            printa(resultado);
            break;
        case 3: 
            resultado = procuraCentDezUni(valor[0]*100, valor[1]*10, valor[2]*1)
            printa(resultado);
            break;
        case 4:
            resultado += escreveUnidade(valor[0]*1)
            if(valor[1]+valor[2]+valor[3]==0){
                resultado += " mil";
            }
            else{
                if(valor[1]==0){
                    resultado += " mil";
                    resultado += procuraCentDezUni(valor[1]*100, valor[2]*10, valor[3]*1);
                }
                else{
                    resultado += " mil e ";
                    resultado += procuraCentDezUni(valor[1]*100, valor[2]*10, valor[3]*1);
                }
            }
            printa(resultado);
            break;
        case 5:
            resultado += procuraDezUni(valor[0]*10, valor[1]*1)
            if(valor[2]+valor[3]+valor[4]==0){
                resultado += " mil";
            }
            else{
                if(valor[2]!=0){
                    resultado += " mil e ";
                    resultado += procuraCentDezUni(valor[2]*100, valor[3]*10, valor[4]*1);
                }
                else{
                    resultado += " mil";
                    resultado += procuraCentDezUni(valor[2]*100, valor[3]*10, valor[4]*1);
                }  
            }
            printa(resultado)
            break;
        case 6:
            resultado += procuraCentDezUni(valor[0]*100, valor[1]*10, valor[2]*1) 
            resultado += " mil";
            if(valor[3]+valor[4]+valor[5]!=0){
                if(valor[3]!=0){
                    resultado += " e ";
                    resultado += procuraCentDezUni(valor[3]*100, valor[4]*10, valor[5]*1);
                }
                else{
                    resultado += procuraCentDezUni(valor[3]*100, valor[4]*10, valor[5]*1);
                }
            }
            printa(resultado);
            break;
        case 7:
            resultado += escreveUnidade(valor[0]*1);

            if(valor[0]<2){
                resultado += " milhão";
            }
            else{
                resultado += " milhões";
            }

            if(valor%1000000==0){
                printa(resultado)
            }

            else{
                if(valor[1]+valor[2]+valor[3]!=0){

                    if(valor[1]!=0){
                        resultado += " e ";
                        resultado += procuraCentDezUni(valor[1]*100,valor[2]*10,valor[3]*1);
                        resultado += " mil";
                    }
                    else{
                        resultado += procuraCentDezUni(valor[1]*100,valor[2]*10,valor[3]*1);
                        resultado += " mil";
                    }
                    
                }
               
                if(valor[4]!=0){
                    resultado += " e ";
                    resultado += procuraCentDezUni(valor[4]*100,valor[5]*10,valor[6]*1);
                }
                else{
                    resultado += procuraCentDezUni(valor[4]*100,valor[5]*10,valor[6]*1);
                }

                printa(resultado);
            }
        }
}

procuraDezUni = (dez, uni) =>{
    if(dez==0 && uni==0){
        return "";
    }
    else if(dez!=0 && uni==0){
        return escreveDezena(dez);
    }  
    else if(dez<20){
        return escreveUnidade(dez+uni);
    }
    else{
        return escreveDezena(dez) + " e " + escreveUnidade(uni);
    }   
}

procuraCentDezUni = (cent, dez, uni) =>{
    let numero = "";
    if(cent+dez+uni==100){
        numero += "cem";
        return numero;
    }

    if(cent!=0){
        numero += escreveCentena(cent);

        if(dez+uni<20 && dez+uni>0){
            numero += " e ";
            numero += escreveUnidade(dez+uni);
        }
        else if(dez!=0 && uni==0){
            numero += " e ";
            numero += escreveDezena(dez);
        }
        else if(dez!=0 && uni!=0){
            numero += " e ";
            numero += escreveDezena(dez);
            numero += " e ";
            numero += escreveUnidade(uni);
        }
        else{
            numero += "";
        }
    }

    else if(dez+uni!=0){

        if(dez+uni<20){
            numero += " e ";
            numero += escreveUnidade(dez+uni);
        }
        else if(dez!=0 && uni==0){
            numero += " e ";
            numero += escreveDezena(dez);
        }
        else if(dez!=0 && uni!=0){
            numero += " e ";
            numero += escreveDezena(dez);
            numero += " e ";
            numero += escreveUnidade(uni);
        }
        else{
            numero += "";
        }

    }

    return numero;
}

escreveUnidade = (vlr) =>{
    for(i=0;i<numUnidade.length;i++){

        if(vlr == numUnidade[i]){
            return extUnidade[i];
        }

    }
}

escreveDezena = (vlr) =>{
    for(i=0;i<numDezena.length;i++){

        if(vlr == numDezena[i]){
            return extDezena[i];
        }

    }
}

escreveCentena = (vlr) =>{
    for(i=0;i<numCentena.length;i++){

        if(vlr == numCentena[i]){
            return extCentena[i];
        }

    }
}