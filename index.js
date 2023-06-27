const nodeCmd = require('node-cmd');
const os = require('os');

console.log(os.version());

nodeCmd.run('sh reset.sh', (err, data, stderr) => {
        console.log(err);
        console.log(data);
        console.log(stderr);
    }
);