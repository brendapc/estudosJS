function automoveis(pedido){
    switch(pedido){
        case 'hatch':
            return 'compra efetuada com sucesso'
            break;
        case 'sedan': case 'motocicleta': case 'caminhonete':
            return 'tem certeza que não prefere este modelo?'
            
        default: return 'não trabalhamos com esse modelo'
    }
}
console.log(automoveis('hatch'));
console.log(automoveis('motocicleta'));
console.log(automoveis('sedan'));
console.log(automoveis('caminhonete'));
console.log(automoveis('jetski'));
