import express, { type Request, type Response } from 'express'

const app = express()
const PORT = 8080

app.use(express.json())

app.get('/health', (req: Request, res: Response) => {
  res.json({
    status: 'ok',
    service: 'ec2-app-backend',
    timestamp: new Date().toISOString()
  })
})

app.get('/api/datos', (req: Request, res: Response) => {
  res.json({
    mensaje: 'Respuesta desde Backend',
    capa: 'ec2-app',
    zona: 'private-subnet'
  })
})

app.listen(PORT, () => {
  console.log(`Backend corriendo en puerto ${PORT}`)
})
