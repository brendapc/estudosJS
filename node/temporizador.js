const schedule = require('node-schedule')

const tarefa1 = schedule.scheduleJob('*/5 *12 **2', function(){
    console.log('Executando tarefa 1!', new Date().getSeconds())
})

/*setTimeout( function(){
    tarefa1.cancel()
    console.log('cancelando tarefa')

},2000)
*/
const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [ new schedule.Range(1,5)]
regra.hour = 9
regra.second = 48

const tarefa2 = schedule.scheduleJob(regra, function(){
    console.log('executando tarefa 2', new Date().getSeconds())
})

console.log(tarefa2)
