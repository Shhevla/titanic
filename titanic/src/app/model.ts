export interface Passenger {
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
}

export class Survivor {
    constructor (
        public sex : string,
        public age : string,
        public classe : string
    ) {}
}