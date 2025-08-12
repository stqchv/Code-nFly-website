const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
  const { name, email } = JSON.parse(event.body);

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: [{
        price_data: {
          currency: 'pln',
          product_data: { name: `Kurs programowania - ${name}` },
          unit_amount: 80000 // 800 zł w groszach
        },
        quantity: 1
      }],
      customer_email: email,
      success_url: 'https://twojadomena.netlify.app/sukces',
      cancel_url: 'https://twojadomena.netlify.app/anulowano'
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ url: session.url })
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
