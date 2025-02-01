import readline from "readline";
import fs from "fs";

const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})

const FileCraetion=()=>{
    rl.question("enter your file nama : " , (filename)=>{
      rl.question("enter your data : ", (data)=>{
        fs.writeFile(`${filename}.txt`,data ,(err)=>{
            if (err){
                console.error( `error writing the file ,${err.message}`)
            }
            else{
                console.log(`file ${filename}.txt created succesfully !`)
            }
            rl.close()
        })
      })
    })
}

FileCraetion();