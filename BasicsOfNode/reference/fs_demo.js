const fs = require('fs');
const path = require('path');

// create folder
fs.mkdir(path.join(__dirname, '/test'),{}, err=>{
    if (err) throw err;
    console.log('folder created...');
});

// create and wite to file
//if file already exist delete file or change path and file name
fs.writeFile(path.join(__dirname, '/test', '/helloo.txt'), 'Hello World!',
    err => {
        if (err) throw err;
        console.log('file created and written into...');

        // file append
        fs.appendFile(path.join(__dirname, '/test', '/hello.txt'), 'Love node js',
            err => {
                if (err) throw err;
                console.log('file created and written into...');
            }
        );
    }
);

// read file 
fs.readFile(path.join(__dirname, '/test', '/hello.txt'), 'utf8',
    (err, data) => {
        if (err) throw err;
        console.log(data);
    }
);