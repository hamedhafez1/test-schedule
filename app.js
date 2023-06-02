const schedule = require('node-schedule');

/*
*
*    *    *    *    *    *
┬    ┬    ┬    ┬    ┬    ┬
│    │    │    │    │    │
│    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
│    │    │    │    └───── month (1 - 12)
│    │    │    └────────── day of month (1 - 31)
│    │    └─────────────── hour (0 - 23)
│    └──────────────────── minute (0 - 59)
└───────────────────────── second (0 - 59, OPTIONAL)*/
const job1 = schedule.scheduleJob('0 22 23 * * *', function () {
    console.log('job 1');
});

const job2 = schedule.scheduleJob('0 23 23 * * *', function () {
    console.log('job 2');
});



