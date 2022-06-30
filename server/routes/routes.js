import express from "express";
const router = express.Router();
import { PassengerModel } from "../models/Passenger.js";
import { UserModel } from "../models/User.js";

router.get("/passengers", async(req, res) => {
    try {
        const passengers = await PassengerModel.find({}, {});

        res.json(passengers);
    } catch (err) {
        res.json({ error: "no dataset" });
    }
});

router.get("/users", async(req, res) => {
    try {
        const user = await UserModel.find({}, {});

        res.json(user);
    } catch (err) {
        res.json({ error: "no dataset" });
    }
});

router.get("/users/:name", async(req, res) => {
    try {
        const { name } = req.params;
        const user = await UserModel.findOne({ name: name }, {});
        res.json(user);
    } catch (err) {
        res.json({ error: "no dataset" });
    }
});

router.get("/users/:name/:password", async(req, res) => {
    try {
        const { name } = req.params.name;
        const { password } = req.params.password;

        const user = await UserModel.findOne({ name: req.params.name, password: req.params.password }, {});
        res.json(user);
    } catch (err) {
        res.json({ error: "no dataset" });
    }
});

export default router;