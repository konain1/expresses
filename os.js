const os = require('os');

let ostime = os.uptime(); // System uptime in seconds
const user = os.userInfo(); // User information

ostime =  (ostime%100)
if(ostime < 60){
    console.log('lower')
}else{
    ostime = (ostime % 60).toFixed()
    console.log("higher")
}
console.log('System Uptime:', ostime, 'seconds');
// console.log('User Information:', user);
