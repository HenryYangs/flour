const pm2 = require('pm2')

pm2.connect((error) => {
  if (error) {
    console.error(error)
    process.exit(2)
  }

  pm2.killDaemon(() => {
    pm2.start('./pm2.config.json', (err, app) => {
      console.log('start', pm2.disconnect)
      if (err) throw err
      pm2.disconnect()
    })
  })
})
