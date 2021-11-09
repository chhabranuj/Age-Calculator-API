const express = require("express")
const app = express()
const cors = require("cors")
const moment = require("moment")
app.use(cors())

app.get("/ageCalculator", (request, response) => {
    try{
        const date = moment(request.query.date)

        const years = moment(new Date()).diff(date, 'years')
        const totalMonths = moment(new Date()).diff(date, 'months')
        const dateMinusYears = moment(new Date()).subtract(years, 'years')
        const monthsLeft = dateMinusYears.diff(date, 'months')
        const dateMinusMonths = moment(new Date()).subtract(totalMonths,'months')
        const daysLeft = dateMinusMonths.diff(date, 'days')

        response.send({result: true, days: daysLeft, months: monthsLeft, years: years})
    }
    catch(error){
        response.send({result: false})
    }
})

console.log("Server is working...")
app.listen(4000)