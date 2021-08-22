
const rurToUsd = (item) => {
    let priceUsd = 75
    if (item > 0) {
        return item/priceUsd +"$"
    }
}
const usdToRur = (item) =>{
    let priceUsd = 75
    if(item >0){
        return item*priceUsd +"₽"
    }
}





module.exports={
    rurToUsd,
    usdToRur
}