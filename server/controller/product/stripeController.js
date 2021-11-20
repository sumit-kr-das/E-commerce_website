import { STRIPE_KEY } from "../../config";
import Stripe from 'stripe';
const stripe = new Stripe(STRIPE_KEY);


const stripeController = {
  stripePay(req, res) {
    stripe.charges.create(
      {
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
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
