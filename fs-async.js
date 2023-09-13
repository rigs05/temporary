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