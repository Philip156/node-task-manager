require('../src/db/mongoose')
const User = require('../src/models/user')

// User.findByIdAndUpdate('5e796995c1362a177ff36419', {age: 1}).then(user => {
//     console.log(user)
//     return User.countDocuments({age: 1})
// }).then(counted => {
//     console.log(counted)
// }).catch(e => {
//     console.log(e)
// })

const userUpdateAndCount = async (id, age) => {
    const user = await User.findByIdAndUpdate(id, { age })
    const count = await User.countDocuments({ age })
    return count
}

userUpdateAndCount('5e796995c1362a177ff36419', 33).then(count => {
    console.log(count)
}).catch(e => {
    console.log(e)
})