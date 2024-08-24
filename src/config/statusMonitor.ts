import statusMonitor from 'express-status-monitor'
import { Express } from 'express'

export default (app: Express): void => {
  app.use(
    statusMonitor({
      path: '/teste_einstein/status',
      title: 'Monitor ROL',
      spans: [
        {
          interval: 1,
          retention: 60
        },
        {
          interval: 5,
          retention: 60
        },
        {
          interval: 15,
          retention: 60
        }
      ],
      healthChecks: [
        {
          protocol: 'http',
          host: 'localhost',
          path: '/teste_einstein/health',
          port: '3001'
        }
      ],
      chartVisibility: {
        cpu: true,
        heap: true,
        load: true,
        mem: true,
        responseTime: true,
        rps: true,
        statusCodes: false
      }
    })
  )
}
