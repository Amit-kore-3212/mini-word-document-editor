const express=require('express')
const fs=require('fs')
const cors=require('cors')
const multer=require('multer')
const app=express()
const port=3099
const upload=multer({dest:'uploads/'})
const mammoth = require('mammoth')
const htmlDocx =require('html-docx-js')

app.use(cors())
app.use(express.json())




app.post('/api/upload',upload.single('file'),(req,res)=>{
    mammoth.convertToHtml({path:`./uploads/${req.file.filename}`})
 .then((result)=>{
    const html=result.value
    const message=result.messages
  //  console.log(html)
   
    res.json(html)
   
})
.done()
     
   

})
// app.use('/api/docx',(req,res)=>{
//   const converted=htmlDocx.asBlob(req.body.body)
//   const convert=converted.buffer.toString('utf-8')
//   console.log(convert)
//   res.json(convert)
// })



 







// app.post('/api/upload',(req,res)=>{
//     upload(req,res,err=>{
//         fs.readFile('./uploads',(err,data)=>{
//             if(err) throw err;
//             console.log(data)
//         })
//     })
// })




app.listen(port,()=>{
    console.log('Server is running on port',port)
})