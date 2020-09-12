import os from 'os'

interface IIp {
  family: string
  address: string
  internal: boolean
}

export default function getLocalIp () {
  const networkInfo = os.networkInterfaces()
  const matchedIps: string[] = []

  Object.keys(networkInfo).forEach((key) => {
    const info = networkInfo[key]

    if (info && info?.splice) {
      info.some((ip: IIp) => {
        if (
          ip.family.toLowerCase() === 'ipv4'
          && ip.internal === false
          && ip.address.indexOf('127') !== 0
        ) {
          matchedIps.push(ip.address)
        }
        return false
      })
    }
  })

  return matchedIps[0]
}
