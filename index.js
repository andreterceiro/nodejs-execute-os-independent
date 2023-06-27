const nodeCmd = require('node-cmd');
nodeCmd.run('dir', (err, data, stderr) => console.log(data));