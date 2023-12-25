const {readFile,writeFile} = require('fs')

readFile('book1.txt','utf-8',(err,result)=>{

    if(err){
        console.log(err)
    }
    let result1 = result;

    readFile('book2.txt','utf-8',(err,result)=>{

        if(err){
            return;
        }

        let result2 = result

        writeFile('async-file.txt',`${result1} ${result2}`,{flag:'a'},(err,res)=>{
            if(err){
                console.log('eerrrr'+ err)
                return
            }


        })
    })

})