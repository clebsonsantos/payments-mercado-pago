import MercadoPago from '../config/mercado.js';


class Notification {
  async handle(request, response){
    var id = request.query.id;

    setTimeout(() => {

        var filtro = {
            "order.id": id
        }

        MercadoPago.payment.search({
            qs: filtro
        }).then(data => {
            var pagamento = data.body.results[0];

            if(pagamento != undefined){
                console.log(pagamento.external_reference);
                console.log(pagamento.status); // approved
            }else{
                console.log("Pagamento não existe!");
            }
        }).catch(err => {
            console.log(err);
        });

    },20000)

    response.send("OK");
}
}

export default Notification