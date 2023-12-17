const accountId = 32465432
let accountEmail = "Sathwik@google.com"
var accountPassword = "12345"
accountCity = "Warangal"
let accountState

// accountId = 2 // not allowed

accountEmail = "sathsha@google.com"
accountPassword = "54321"
accountCity = "Chennai"

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountState, accountCity, accountPassword])