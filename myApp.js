const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI);

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    favFood: [String]
})

const person = mongoose.model('person', personSchema)

const newUser = async ()=>{
    const user = new person({name:'ggs',age:10,favfood:['this','that']})
    try {
        await user.save()
    } 
    catch (err) {
        console.log('error')
    }
}
// newUser()

const addBulk = async () => {
    try {
    await person.create([{name:'ggs',age:10,favfood:['this','that']},{name:'ggs',age:10,favfood:['this','that']},{name:'ggs',age:10,favfood:['this','that']}])
    } catch (err) {
        console.log(err)
    }
}
// addBulk()
const serchByName = async ()=> {
    try {
        const result = await person.find({name: 'ggs'})
        console.log(result)
    } catch(err){
        console.log(err)
    }
}
// serchByName()
const serchbyid = async (id)=> {
    try{
        const result = await person.findById(id)
        console.log(result)
        return result
    }catch(err){
        console.log(err)
    }
}
// serchbyid('681c050108ea4e3e8a4bf6eb')

const update1 = async ()=>{
    try{
    const user = await serchbyid('681c050108ea4e3e8a4bf6eb');
    user.name = 'girish'
    const result = await user.save()
    console.log(result)
    }catch(err) {
console.log(err)
    }
}
// update1()

const update2 = async ()=> {
    try{
const updateing = await person.findOneAndUpdate({name: 'gaurav'}, {name:'sharma'}, {new:true, runValidators: true})
console.log(updateing)
    }catch(err){
console.log(err)
    }
}
// update2()

const remove1 = async (names)=>{
    const user = await person.findOneAndDelete({name:names})
    console.log(user)
}
// remove1('sharma')