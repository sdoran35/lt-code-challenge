const axios = require('axios');
const chalk = require('chalk');
const prompt = require('prompt-sync')();
const log = console.log;




getResults('https://jsonplaceholder.typicode.com/photos?',prompt('What is the album you want to search for?'));







function getResults(reqURL,reqParams){
    axios.get(reqURL, {
        params: {
            albumId: reqParams
        }
    })
        .then(function (res) {
        return  res.data.forEach(item => log(chalk.green('[' + item.id + '] ') + chalk.magenta(item.title)))

        })
        .catch(function (error) {

            log(chalk.red(error));
        })
        .finally(function () {
            log(chalk.blue('Program has finished!'))
        });

}










