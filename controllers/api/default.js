exports.install = function () {
  F.route('/api/hello_world', hello_world)
}

function hello_world () {
  this.json({msg: 'Hello World from total.js REST API'})
}