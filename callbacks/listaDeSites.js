function adicionarHttp(url){
    return "http://" + url;
}

var listaDeSites= []

function processar(url, callback){

    for(var i = 0; i < url.length; i++){
        listaDeSites.push(callback(url[i]))
    }
        return listaDeSites
}

console.log(processar(["www.google.com", "www.yahoo.com"], adicionarHttp))