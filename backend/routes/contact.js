import express from "express";
import { ContactModel } from "../model/contact.js";
const router = express.Router();

router.post("/register", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    res.json({ message: "fill all the fields" });
  }
  console.log(name, email, message);
  const newcontact = new ContactModel({ name, email, message });
  await newcontact.save();
  res.json({ message: "contact registred" });
});

export { router as contactrouter };
