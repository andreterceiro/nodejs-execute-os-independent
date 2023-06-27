const nodeCmd = require('node-cmd');
nodeCmd.run('sh reset.sh', (err, data, stderr) => console.log(data));