import mongoose from "mongoose";

export const PassengersSchema = new mongoose.Schema({
    PassengerId: String,
    Survived: Number,
    Pclass: Number,
    Name: String,
    Sex: String,
    Age: Number,
    SibSp: Number,
    Parch: Number,
    Ticket: String,
    Fare: Number,
    Cabin: String,
    Embarked: String
});

export const PassengerModel = mongoose.model("passengers", PassengersSchema);