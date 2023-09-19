const {S3Client,PutObjectCommand} = require('@aws-sdk/client-s3')
const fs = require('fs')


const s3Client = new S3Client({
    region: 'us-north-1',
    endpoint: process.env.ENDPOINT,
    credential: {
        accessKeyId: process.env.SECRET_KEY,
        secretAccessKey:process.env.SECRETACCESSKEY
    },
})

const uploadFile = async () => {
    try {
        const fileCcontent = fs.readFileSync('mine.png')
        const object = new PutObjectCommand({
            bucket:process.env.BUCKET,
            key: 'mine.png',
            body: "fileContent"

    })
        await S3Client.send(object)
        // endpoint/bucketname/key  
        console.log('')
    }catch(error) {console.log(error)}
}