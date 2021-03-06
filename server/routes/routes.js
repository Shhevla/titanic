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

router.put("/users/:login", async(req, res) => {
    const { name } = req.body.name;

    const user = await UserModel.updateOne({ name: name }, { login: req.params.login });

    res.json(user);
});

router.post("/users/login", async(req, res) => {
    const name = req.body.name;
    const password = req.body.password;

    UserModel.findOne({ name: name }, (err, data) => {
        if (err) throw err;
        if (data) {
            if (data.password === password) {
                return res.send(data);
            } else return res.status(403).send("incorrect password");
        }
    });
});


export default router;