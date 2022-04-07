import MercadoPago from '../config/mercado.js'


class Pay {
  async handle(request, response) {

    const id = "" + Date.now()
    const emailDoPagador = "victordevtb@outlook.com"

    const dados = {
        items: [
            item = {
                id: id,
                title: "2x video games;3x camisas",
                quantity: 1,
                currency_id: 'BRL',
                unit_price: parseFloat(150)
            }
        ],
        payer:{
            email: emailDoPagador
        },
        external_reference: id
    }

    try{
        const pagamento = await MercadoPago.preferences.create(dados)
        //Banco.SalvarPagamento({id: id, pagador: emailDoPagador})
        return response.redirect(pagamento.body.init_point)
    }catch(err){
        return response.send(err.message).end()
    }
}
}

export default Pay