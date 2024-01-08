const EventEmitter = require('events')

const customeEvent = new EventEmitter();

customeEvent.on('response',()=>{
    console.log('event triggered')
})
customeEvent.on('response',(name)=>{
    console.log(`name is ${name}`)
})

customeEvent.emit('response','leo')