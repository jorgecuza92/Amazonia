require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require("./routes/productRoutes");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const authenticate = require('./authMiddleware')
const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST)
const bodyParser = require('body-parser')

connectDB();

const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const PORT = process.env.PORT || 5000;

global.users = [
  {
    username: "demo123",
    password: "demo",
  },
];

cartItems = [{
  product : [],
  username: "demo123"
}];

app.get('/', authenticate, (req,res) => {

})

app.post("/login", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const authUser = users.find(
    (user) => user.username == username && user.password == password
  );
  if (authUser) {
    // generate a token
    // NO SENSITIVE DATA IN THE TOKEN!
    const token = jwt.sign({ username: username }, process.env.JWTKEY);
    res.json({ success: true, token: token, username: username });
  } else {
    res.json({ success: false });
  }
});

app.get("/:username", authenticate, (req, res) => {
  const username = req.params.username
  const userCartItems = cartItems.filter(cartItem => cartItem.username == username)

  res.json(userCartItems)
});


// STRIPE PAYMENT
app.post('/payment', cors(), async (req, res) => {
  let {amount, id} = req.body
  try {
    const payment = await stripe.paymentIntents.create({
      amount, 
      currency: "USD",
      description: "Teenage Engineering Co.",
      payment_method: id,
      confirm: true
    })

    console.log("Payment", payment)
    res.json({
      message: "Payment successful",
      success: true
    })


  } catch (error) {
    console.log("Error", error)
    res.json({
      message: "Payment failed",
      success: false
    })
  }
})

app.listen(PORT, () => console.log("Server is running..."));
