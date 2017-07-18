var moment = require('moment');

// Unix Epoch Jan 1st 1970 00:00:00 am stored in utc Universal timecode

//var date = new Date();
//console.log(date.getMonth());

var someTimestamp = moment().valueOf();
console.log(someTimestamp);

var createdAt = 1234;
var date = moment(createdAt);
console.log(date.format('h:mm a'));