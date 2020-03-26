require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e702f14292c7936cac23ae1').then(task => {
//     console.log(task)
//     return Task.countDocuments({ completed: false })
// }).then(count => {
//     console.log(count)
// }).catch(e => {
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed: false })
    return count
}

deleteTaskAndCount('5e7b91dc0ac14433316612be').then(result => {
    console.log(result)
}).catch(e => {
    console.log(e)
})