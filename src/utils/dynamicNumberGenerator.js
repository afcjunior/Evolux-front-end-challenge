// receives the current page, and how many items to show per page.
// calculates total ammount of pages
// dynamically generates the phone numbers that should display at that given page
// ps: //restart webpack-dev-server if you change this

const dynamicNumberGenerator = function(page, perPage) {

  const meta = {
    "page": page,
    "perPage": perPage,
    "totalPages": Math.ceil(1000/perPage)
  }

  let data = []

  //calculating phone numbers
  let suffix = ((page - 1) * perPage)
  let phoneNumber = 555000000 + suffix
  const phoneLimit = 555000999

  for (let i = 0; i <= perPage; i++){
    if(phoneNumber <= phoneLimit){
      let cost = (1 + ((phoneNumber % 100)/100)).toFixed(2)
      data.push({
        "number": phoneNumber,
        "cost": cost
      })
      phoneNumber++
    }
  }

  return {
    meta,
    data
  }
}

module.exports = dynamicNumberGenerator;