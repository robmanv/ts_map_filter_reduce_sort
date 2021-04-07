export { }

type Platform = 'XBOX' | 'PC' | 'PLAYSTATION';  //Tipo enumerado

type RecordItem = {
    gameTitle: string;
    gamePlatform: Platform;
    genreName: string;
}

type Game = {
    id: number;
    title: string;
    platform: Platform;
}

const gameList : Game[] = [
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
]

const recordItemList : RecordItem[] = [
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
]

const mappedGames = gameList.map(game => {              // Transformar cada objeto da gameList em outro objeto 
    return {
        x: `${game.title} | ${game.platform}`,
        y: 0
    }

})

// Filtrar a lista de recordItemList pra calcular quantidade de votos que mappedGames tá vazia

const buildBarSeries = (games: Game[], records: RecordItem[]) => {

    const mappedGames = games.map(game => {              // Transformar cada objeto da gameList em outro objeto 
        const filteredGames = records.filter( record => {
            return record.gameTitle === game.title && record.gamePlatform === game.platform;   // o triplo igual compara inclusive se os tipos são similares, exemplo '0' e 0 são diferentes
        })                                                 //   Aqui é o RETURN do .FILTER 

        return {                                           //   Aqui é o RETURN do .MAP
            x: `${game.title} | ${game.platform}`,
            y: filteredGames.length
        }
    
    });
    
    const sortedGames = mappedGames.sort( (a, b) => b.y - a.y);   // do MAIOR para o MENOR

    return sortedGames.slice(0, 8);                      //   O SLICE serve para pegar somente N elementos, onde parte do 0 até 8

    //return mappedGames;                                 //   Aqui é o RETURN do buildBarSeries contendo meu MAP acima com o FILTER acima, cujo MAP usa o length do FILTER pra atribuir na variavel y, ACABEI substituindo pelo ajuste do sort acima
}

const getPlatformChartData = (records : RecordItem[]) => {

    const platforms = ['PC', 'PLAYSTATION', 'XBOX'];

    const series = platforms.map(platform => {
        const filteredGames = records.filter(record => {
            return record.gamePlatform === platform;
        });

        //console.log(filteredGames);                    // percebe-se que ele gera uma lista do records (RecordItem), agrupada por atributos iguais

        console.log(filteredGames.length)

        return filteredGames.length;                     // RETORNA a quantidade resultande do FILTRO acima
            
    })
    
    return {
        labels: platforms,                               
        series: series
    }

}

const getGenreChartData = (records: RecordItem[]) => {

    const computeRecordItem = (obj, record) => {             // é uma VARIÁVEL com UNÇÃO que tem a variável 1 (obj que servirá de acumuladora), variável 2 (record com o elemento iterado n vezes pra avaliar)
        if (obj[record.genreName] != undefined) {           // esse undefined serve pra perguntar se já inicializei com 1 logo abaixo pra ir somando
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
    }

    const genreByAmount = records.reduce(computeRecordItem, {})   //{} objeto a ser iterado retornando 1 cara só e o objeto vazio

    //console.log(`valor de genreByAmount = `, genreByAmount);
    const labels = Object.keys(genreByAmount);  //macete do js pra obter as chaves do objeto
    const series = labels.map(x => genreByAmount[x]);

    return{
        labels,
        series
    }
}


console.log(mappedGames);
console.log('GRAFICO DE BARRAS: -------------------------------------------------');
console.log(buildBarSeries(gameList, recordItemList));

console.log('// GRAFICO DE ROSCA (PLATAFORMAS): ---------------------------------');
console.log(getPlatformChartData(recordItemList));

console.log('// GRAFICO DE ROSCA (GÊNEROS): -------------------------------------');
console.log(getGenreChartData(recordItemList));


