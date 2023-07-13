const os = require('os');

//platform info
console.log(os.platform());
console.log(os.arch());
console.log(os.cpus());
//free memory & total memory
console.log(os.freemem());
console.log(os.totalmem());