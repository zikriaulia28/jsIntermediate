let data = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
}

// spread operator
const updateUserInfo = {
  ...data,
  name: "Zikri Aulia",
  email: "zikriaulia98@gmail.com",
  hobby: "olahraga"
}

console.log(updateUserInfo)

//  destructuring
const { address: { street, city } } = data
console.log(street)
console.log(city)

