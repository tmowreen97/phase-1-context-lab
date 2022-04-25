/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(employeeArray){
    const employeeObj = {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: [],
    }
    return employeeObj
}

function createEmployeeRecords(employeeArray){
    return employeeArray.map(array => createEmployeeRecord(array))
}

function createTimeInEvent(date){
    const timeIn = makeTimeStamp(date)
    timeIn.type = "TimeIn"
    this.timeInEvents.push(timeIn)
    return this
}

function createTimeOutEvent(date){
    const timeOut = makeTimeStamp(date)
    timeOut.type = "TimeOut"
    this.timeOutEvents.push(timeOut)
    return this
}

function hoursWorkedOnDate(dateInput){
    const clockIn = (this.timeInEvents.find(timeIn => timeIn.date=== dateInput))
    const clockOut = (this.timeOutEvents.find(timeOut => timeOut.date ===dateInput))
    const hoursWorked = (clockOut.hour - clockIn.hour)
    return hoursWorked/100

}

function wagesEarnedOnDate(date){
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}



function makeTimeStamp (date){
    const dateStamp = {}
    dateStamp["type"] =''
    dateStamp["hour"]= parseInt(date.split(' ')[1])
    dateStamp["date"]= date.split(' ')[0]

    return dateStamp
}


const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(srcArray, firstNameInput){
    return srcArray.find(employee => employee.firstName === firstNameInput)

}

const calculatePayroll = function(array) {
    return array.reduce((total, employee)=>{
        return total + allWagesFor.call(employee)
    }, 0)

}