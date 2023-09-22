// ASYNCHRONOUS APPROACH USING CALLBACK-HELL:

const { readFile, writeFile } = require ("fs");

readFile ('./content/fileA.txt', 'utf-8', (err, res) => {
    if (err) {
        return (err);
    }
    const first = res;
    readFile ('./content/sub/fileB.txt', 'utf-8', (err, res) => {
        if (err) {
            return (err);
        }
        const second = res;
        writeFile (
            './content/sub/file-async.txt',
            `${first}, ${second}\n`, (err, result) => {
                if (err) {
                    return (err);
                }
                console.log (result);
            }
        )
    })
})

/*****************************************************/

// USING NORMAL PROMISE:

const { readFile, writeFile } = require ('fs')

const getText = (path) => {
    return new Promise ((resolve, reject) => {
        readFile (path, 'utf-8', (err, data) => {
            if (err) {
                reject (err)
            }
            else {
                resolve (data)
            }
        })
    })
}
const setText = (loc, fileA, fileB) => {
    return new Promise ((res, rej) => {
        writeFile (loc, `${fileA}, ${fileB}, \n`, 'utf8', (err, data) => {
            if (err) {
                rej (err)
            }
            else {
                res (data)
            }
        })
    })
}

const start = async() => {
    const first = await getText ('./content/fileA.txt')
    const second = await getText ('./content/sub/fileB.txt')
    await setText ('./content/file_async0.txt', first, second)
}

start ()

/*****************************************************/

// USING ASYNC-AWAIT:

const { readFile, writeFile } = require ('fs').promises

const file = async (err, res) => {
    if (err) {
        console.log (err)
    }   
    const first = await readFile ('./content/fileA.txt')
    const second = await readFile ('./content/sub/fileB.txt')
    await writeFile (
        './content/file_async1.txt',
        `${first}, ${second}, \n`,
        { flag: 'a' }
        )
    }

    file ()
    
/*****************************************************/

// SAME THING USING UTIL.PROMISIFY:
    
const { readFile, writeFile } = require ('fs')
const util = require ('util')

const readFileData = util.promisify (readFile)
const writeFileData = util.promisify (writeFile)

const files = async () => {
    try {
        const first = await readFileData ('./content/fileA.txt')
        const second = await readFileData ('./content/sub/fileB.txt')
        await writeFileData (
            './content/file_async2.txt',
            `${first}, ${second}, \n`,
            { flag: 'a' }
        )
    } catch {
        console.log (error)
    }
}

files ()