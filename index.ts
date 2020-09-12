import app from './src/app'
import getLocalIp from './utils/getLocalIP'

const port = process.env.PORT || 7000

console.log(`Project is running under: ${getLocalIp()}:${port}`)

app.listen(port)

