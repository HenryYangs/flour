import day from 'dayjs'
import ip from 'ip'
import { createLogger, format, transports } from 'winston'

const getLoggerFile = (level: string) => {
  const basePath = process.env.LOG_PATH || 'bizLogs'
  const fileName = `${basePath}/${level}.log.${day().format('YYYY-MM-DD')}.${ip.address()}`

  return new transports.File({
    filename: fileName,
    level,
  })
}

const logger = () => {
  const { combine, label, timestamp, printf } = format
  const logFormat = printf(
    ({ level, msg, label: formatLabel }) =>
      `${day().format('YYYY-MM-DD HH:mm:ss')} [${formatLabel}] ${level}: ${msg}`,
  )
  const transportsList = [
    new transports.Console(),
    getLoggerFile('error'),
    getLoggerFile('info'),
    getLoggerFile('verbose'),
  ]

  return createLogger ({
    level: 'info',
    format: combine(
      label({ label: '[LOG]' }),
      timestamp(),
      logFormat,
    ),
    transports: transportsList,
  })
}

export default logger
