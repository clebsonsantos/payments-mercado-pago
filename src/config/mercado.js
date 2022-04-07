import MercadoPago from "mercadopago" 


MercadoPago.configure({
  sandbox: true,
  access_token: "TEST-3260321011293596-061906-6cdf2c22206e79007f91b8f5642b3cf2-267336909" || process.env.ACCESS_TOKEN_MERCADO_PAGO
});

export default MercadoPago