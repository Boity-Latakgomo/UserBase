const display = require("./display");

test ("filter by all", () => {
    return display.getData("all").then(data => {
        expect(data).toMatchObject({
            "01-01-2022":300,
            "02-01-2022":500,
            "03-01-2022":700,
            "04-01-2022":1300,
            "05-01-2022":2000,
            "06-01-2022":3000,
            "07-01-2022":3500,
            "08-01-2022":4000,
            "09-01-2022":4500,
            "10-01-2022":5000,
            "11-01-2022":20000,
            "12-01-2022":35000,
            "13-01-2022":46000,
            "14-01-2022":70000,
            "15-01-2022":90000
        });
    })
})

test ("filter by start date", () => {
    return display.getData("start date").then(data => {
        expect(data).toMatchObject({"01-01-2022":300});
    })
})

test ("filter by end date", () => {
    return display.getData("end date").then(data => {
        expect(data).toMatchObject({ "15-01-2022":90000});
    })
})

test ("filter by date '12-01-2022'", () => {
    return display.getData("12-01-2022").then(data => {
        expect(data).toMatchObject({ "12-01-2022":35000});
    })
})


test ("Entered date that is not present", () => {
    return display.getData("02-02-2022").then(data => {
        expect(data).toMatch("Your entered filter is not in the data");
    })
})