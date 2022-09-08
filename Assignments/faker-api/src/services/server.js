import express from "express"   //had to add "type": "module" into package.json
// const express = require("express")
import { faker } from '@faker-js/faker';
// const faker = require('@faker-js/faker');

const app = express()
const port = 8000

//returns a new user
app.get("/api/users/new", (req, res) => {
    let newUser = createUser()
    console.log("new user:")
    console.log(newUser)

    res.json({ message: "success", newUser: newUser })
})

//returns a new company
app.get("/api/company/new", (req, res) => {
    let newCompany = createCompany()
    console.log("new company:")
    console.log(newCompany)

    res.json({ message: "success", newCompany: newCompany })
})

//returns a new company & user
app.get("/api/company/user", (req, res) => {
    console.log("new company:")
    let newCompany = createCompany()
    console.log(newCompany)
    console.log("new user:")
    let newUser = createUser()
    console.log(newUser)

    res.json({ message: "success", newCompany: newCompany, newUser: newUser })
})



app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})
//####################### Faker #############################

const createUser = () => {
    console.log(faker.internet)
    const newFake = {
        passwords: faker.internet.password(),
        email: faker.internet.email(),
        phoneNumbers: faker.phone.phoneNumber(),
        lastName: faker.name.lastName(),
        firstName: faker.name.firstName(),
        _id: faker.datatype.uuid(),
    };
    return newFake;
};

const createCompany = () => {
    console.log(faker.internet)
    const newFake = {
        name: faker.company.companyName(),
        address: {
            street: faker.address.buildingNumber() + " " + faker.address.street(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country(),
        },
        _id: faker.datatype.uuid(),
    };
    return newFake;
};


//##################### Classes ###############################


class User {
    constructor(password, email, phoneNumber, lastName, firstName, _id) {
        this.password = password
        this.email = email
        this.phoneNumber = phoneNumber
        this.lastName = lastName
        this.firstName = firstName
        this._id = _id
    }
}

class Company {
    constructor(name, address, _id) {
        this.name = name
        this.address = address
        this._id = _id
    }
}













// export const USERS: User[] = [];

// export function createRandomUser(): User {
//     return {
//         userId: faker.datatype.uuid(),
//         username: faker.internet.userName(),
//         email: faker.internet.email(),
//         avatar: faker.image.avatar(),
//         password: faker.internet.password(),
//         birthdate: faker.date.birthdate(),
//         registeredAt: faker.date.past(),
//     };
// }

// Array.from({ length: 10 }).forEach(() => {
//     USERS.push(createRandomUser());
// });