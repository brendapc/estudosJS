const gulp = require('gulp')
const { series, parallel } = require('gulp') /* ou => const series = gulp.series */

const antes1 = cb =>{
    console.log('tarefa antes 1')
    return cb()
}

const antes2 = cb =>{
    console.log('tarefa antes 2')
    return cb()
}

function copiar(callback){
    gulp.src('pastaA/**/*.txt') /*or: gulp.src(['pastaA/arquivo1.txt','pastaA/arquivo2.txt'])  */
    .pipe(gulp.dest('pastaC')) /* manipulation (pipeline) */
    /* .pipe(cortarPelaMetade())
    .pipe(deixarPretoEBranco())   exemplos... */
    return callback()
}

const fim = cb=>{
    console.log('fim')
    return cb()
}

module.exports.default = series(parallel(antes1,antes2),copiar,fim)
