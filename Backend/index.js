const express=require('express')
const ytdl=require('ytdl-core')

const app= express()
const cors=require('cors')
app.use(cors())

app.get("/download",async (req,res) =>{
    try {
        const url= req.query.url;
        const videoId=await ytdl.getURLVideoID(url)
        const metInfo=await ytdl.getInfo(url)

        let data= {
            url:"http//www.youtube.com/embed/" +videoId,
            info:metInfo.formats,
        };
        return res.send(data);

    } catch (error) {
        return res.status(500)
        
    }
})

app.listen(4000,() =>{
    console.log("Server running on PORT 4000");
})