const express = require('express')
const {readFile,writeFile} = require('fs')
// const { resolve } = require('path')

const app = express()

const getText =(path)=>{
    return new Promise((res,rej)=>{
        
        readFile(path,'utf-8',(err,data)=>{
           
            if(err){
                rej(err)
            }else{
                res(data)
            }
        })
    })
}
// getText('./book2.txt').then((data)=>{
//     console.log(data)
// }).catch(err=>console.log(err))

const start = async () => {
    try {
        const firstBook = await getText('./book1.txt');
        const secondBook = await getText('./book2.txt');
        console.log(firstBook, secondBook);

        const content = 'everything!';
        await writeFile('./test.txt', content ,{flag:'a'},(err)=>{
            if(err){
                console.log(err)
            }
            console.log('File created successfully!');
        }); 
        
    } catch (error) {
        console.log(error);
    }
};

start();

// readFile('./book2.txt','utf-8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })

// function sum(n){
//     let ans =0;
//     for(let i=1;i<=n;i++){
//         ans= ans + i;
//     }
//     return ans
// }
// app.get('/',(req,res)=>{
//     const n = req.query.n;
//     let ans = sum(n);
//     res.send('answer is = '+ans)
// })
// app.listen(3000)