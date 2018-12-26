//restart WDS if you change this

const dynamicNumberGenerator = function(page, perPage) {

  //not dynamic yet :D
  const numbers = {
    "meta": {
      "page": page,
      "perPage": perPage,
      "totalPages": Math.ceil(1000/perPage)
    },
    "data": [
      {
        "number": 555000000,
        "cost": 1
      },
      {
        "number": 555000001,
        "cost": 1.01
      },

    ]
  }
  return numbers;
}

module.exports = dynamicNumberGenerator;