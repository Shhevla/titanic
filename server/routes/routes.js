import express from "express";
const router = express.Router();
import { PassengerModel } from "../models/Passenger.js";

router.get("/passengers", async(req, res) => {
    try {
        const passengers = await PassengerModel.find({}, {});

        res.json(passengers);
    } catch (err) {
        res.json({ error: "no dataset" });
    }
});

export default router;