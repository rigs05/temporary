// BUILT-IN MODULE { OPERATING SYSTEM }:

const os = require ('os');
console.log (os.userInfo());

const currentOS = {
    name: os.type(),
    release: os.release(),
    freeMem: os.freemem()/(1024*1024),      // in GBs
    totalMem: os.totalmem()/(1024*1024),    // in GBs
    uptime: os.uptime/(3600*24),            // No. of days
}

console.log (currentOS);
