"use strict";
exports.__esModule = true;
var gameList = [
    {
        "id": 1,
        "title": "The Witcher 3",
        "platform": "XBOX"
    },
    {
        "id": 2,
        "title": "The Witcher 3",
        "platform": "PLAYSTATION"
    },
    {
        "id": 3,
        "title": "Overwatch",
        "platform": "PC"
    }
];
var recordItemList = [
    {
        "gameTitle": "The Witcher 3",
        "gamePlatform": "PLAYSTATION",
        "genreName": "RPG"
    },
    {
        "gameTitle": "The Witcher 3",
        "gamePlatform": "XBOX",
        "genreName": "RPG"
    },
    {
        "gameTitle": "Overwatch",
        "gamePlatform": "PC",
        "genreName": "Shooter"
    },
    {
        "gameTitle": "Overwatch",
        "gamePlatform": "PC",
        "genreName": "Shooter"
    },
    {
        "gameTitle": "The Witcher 3",
        "gamePlatform": "PLAYSTATION",
        "genreName": "RPG"
    }
];
var mappedGames = gameList.map(function (game) {
    return {
        x: game.title + " | " + game.platform,
        y: 0
    };
});
// Filtrar a lista de recordItemList pra calcular quantidade de votos que mappedGames tá vazia
var buildBarSeries = function (games, records) {
    var mappedGames = games.map(function (game) {
        var filteredGames = records.filter(function (record) {
            return record.gameTitle === game.title && record.gamePlatform === game.platform; // o triplo igual compara inclusive se os tipos são similares, exemplo '0' e 0 são diferentes
        }); //   Aqui é o RETURN do .FILTER 
        return {
            x: game.title + " | " + game.platform,
            y: filteredGames.length
        };
    });
    var sortedGames = mappedGames.sort(function (a, b) { return b.y - a.y; }); // do MAIOR para o MENOR
    return sortedGames.slice(0, 8); //   O SLICE serve para pegar somente N elementos, onde parte do 0 até 8
    //return mappedGames;                                 //   Aqui é o RETURN do buildBarSeries contendo meu MAP acima com o FILTER acima, cujo MAP usa o length do FILTER pra atribuir na variavel y, ACABEI substituindo pelo ajuste do sort acima
};
var getPlatformChartData = function (records) {
    var platforms = ['PC', 'PLAYSTATION', 'XBOX'];
    var series = platforms.map(function (platform) {
        var filteredGames = records.filter(function (record) {
            return record.gamePlatform === platform;
        });
        //console.log(filteredGames);                    // percebe-se que ele gera uma lista do records (RecordItem), agrupada por atributos iguais
        console.log(filteredGames.length);
        return filteredGames.length; // RETORNA a quantidade resultande do FILTRO acima
    });
    return {
        labels: platforms,
        series: series
    };
};
var getGenreChartData = function (records) {
    var computeRecordItem = function (obj, record) {
        if (obj[record.genreName] != undefined) { // esse undefined serve pra perguntar se já inicializei com 1 logo abaixo pra ir somando
            obj[record.genreName] += 1;
            //obj[record.gameTitle] += 1;
        }
        else {
            obj[record.genreName] = 1;
            //obj[record.gameTitle] = 1;
        }
        //console.log(`valor de obj    = `, obj);
        //console.log(`valor de record = `, record);              
        return obj;
    };
    var genreByAmount = records.reduce(computeRecordItem, {}); //{} objeto a ser iterado retornando 1 cara só e o objeto vazio
    //console.log(`valor de genreByAmount = `, genreByAmount);
    var labels = Object.keys(genreByAmount); //macete do js pra obter as chaves do objeto
    var series = labels.map(function (x) { return genreByAmount[x]; });
    return {
        labels: labels,
        series: series
    };
};
console.log(mappedGames);
console.log('GRAFICO DE BARRAS: -------------------------------------------------');
console.log(buildBarSeries(gameList, recordItemList));
console.log('// GRAFICO DE ROSCA (PLATAFORMAS): ---------------------------------');
console.log(getPlatformChartData(recordItemList));
console.log('// GRAFICO DE ROSCA (GÊNEROS): -------------------------------------');
console.log(getGenreChartData(recordItemList));
