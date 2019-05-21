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

    return { "workers": workers };
};

module.exports = generateData;