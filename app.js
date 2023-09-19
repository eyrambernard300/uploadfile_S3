const {S3Client,PutObjectCommand} = require('@aws-sdk/client-s3')
const fs = require('fs')


const s3Client = new S3Client({
    region: 'us-north-1',
    endpoint: 'https://s3-us-north-1.amazonaws.com/Learn-aws-storage',
    credential: {
        accessKeyId: 'AKIAZZSMIBOGLUMCSBHI',
        secretAccessKey: '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'
    },
})

const uploadFile = async () => {
    try {
        const fileCcontent = fs.readFileSync('mine.png')
        const object = new PutObjectCommand({
            bucket:'Learn-aws-storage',
            key: 'mine.png',
            body: "fileContent"

    })
        await S3Client.send(object)
        // endpoint/bucketname/key
        console.log('')
    }catch(error) {console.log(error)}
}