import { STRIPE_KEY } from "../../config";
import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51Jw1pwSJm4C0H9ZzCI2nCLQ1bXV9lYNqqx9XceYEPZMJLrz79pD5nQ3VAH8axQnhel996Yuw03nkfxODnnSjSJ8n007OSAMN9o"
);

const stripeController = {
  stripePay(req, res) {
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "inr",
        description: 'Easy Online Store'
      },
      (stripeErr, stripeRes) => {
        if (stripeErr) {
          res.status(500).json(stripeErr);
        } else {
          res.status(200).json(stripeRes);
        }
      }
    );
  },
};

export default stripeController;
