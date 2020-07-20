const bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.use(express.static('.')) /* dentro da pasta atual sirva os arquivos estáticos (Js,Json, css, html) */
app.use(bodyParser.urlencoded({extended: true})) /* se vier dados a partir de um submit de um formulário le os dados e transforma em objeto*/
app.use(bodyParser.json()) /* se vier json, transforme em objeto */

/* app.get('/teste', (req,res) => res.send('ok')) middleware chamado a partir de uma req get */

const multer = require('multer')

const storage = multer.diskStorage({ /* personalizar de salvamento de arquivos: onde e com que nome (para evitar sobreescrita) */
    destination: function (req,file,callback){
        callback(null, './upload')
    },
    filename: function (req,file,callback){
        callback(null, `${Date.now()}_${file.originalname}`)
    }
})

const upload = multer({storage}).single('arquivo')

app.post('/upload', (req,res)=>{
    upload(req,res,err =>{
        if(err){
            return res.send('ocorreu um erro'+err)
        }
        res.end('concluido com sucesso')
    })
})

app.post('/formulario', (req, res)=>{
    res.send({
        ...req.body,
        id: 3
    })
})

app.get('/parOuImpar', (req,res)=>{
    const par = parseInt(req.query.numero) % 2 === 0
    res.send({
        resultado: par ? 'par' : 'impar'
    })
})


app.listen(8080, ()=> console.log('executando...'))