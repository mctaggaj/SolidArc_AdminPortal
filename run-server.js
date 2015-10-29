var sys = require('sys');
var exec = require('child_process').exec;
var child;

function puts(error, stdout, stderr) { sys.puts(stdout); }
child = exec("./run-server.sh", puts);
