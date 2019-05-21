let faker = require('faker');

let generateData = () => {
    let workers = [];
    for (let id = 0; id < 30; id++) {
        workers.push({
            "id": id,
            "firstName": faker.name.firstName(),
            "lastName": faker.name.lastName(),
            "email": faker.internet.email()
        });
    }

    let companies = [];
    for (let id = 0; id < 30; id++) {
        companies.push({
            "id": id,
            "name": faker.company.companyName()
        });
    }

    return { "workers": workers, "companies": companies };
};

module.exports = generateData;