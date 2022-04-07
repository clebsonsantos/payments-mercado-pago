import MercadoPago from '../config/mercado.js';


class Search {
  async handle(request, response){
    MercadoPago.payment.search({
      //qs: filters
    }).then(function (data) {
      response.send(data);
    }).catch(function (error) {
      response.send(error);
    });
  }
}

export default Search