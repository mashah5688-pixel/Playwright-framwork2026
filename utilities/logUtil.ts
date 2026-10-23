//configure logs
import winston from 'winston'
//object create
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp({
        format:'YYYY-MM-DD HH:mm:ss'
    }),
    winston.format.printf(({timestamp,level,message})=>{
        return `[${timestamp}]${message}`
    })
  ),
  transports:[
    new winston.transports.Console()
  ]
  
});
export default logger