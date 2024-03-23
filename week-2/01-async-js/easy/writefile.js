// const fs = require("fs")

// const data = 'HELLO THERE I AM HIMANK PATIDAR'

// fs.writeFile('myfile.txt', data, (err) => {
//     if(err){
//         return console.log(err) 
// }else{
//     console.log("The file has been saved")
// }
// })

 //Using Promise

const fs = require('fs').promises;

const data = "HELLO THERE IS A NEW PROMISE FOR YOu";

fs.writeFile('yourFile.txt', data)
.then(()=>{
    console.log('The File has been saved')
})
.catch((err)=>{
    console.err('An error has been occured:  ', err);
})