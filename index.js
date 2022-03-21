const soap = require('soap')
const url = 'http://www.dneonline.com/calculator.asmx?WSDL'

soap.createClient(url, (err, client) => {
    if(err){
        console.log(err)
    } else {
        let operation = {
            intA: 10,
            intB: 200
        }
        client.Add(operation, (err, res) => {
            console.log(res)
        })
        client.Subtract(operation, (err, res) => {
            console.log(res)
        })
        client.Multiply(operation, (err, res) => {
            console.log(res)
        })
    }
})