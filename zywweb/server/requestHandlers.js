function start() {
	console.log("Requset handler 'start' was called");
}
function upload() {
	console.log("Request handler 'upload' was called");
}

exports.start = start;
exports.upload = upload;
