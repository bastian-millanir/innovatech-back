import express, {} from 'express';
const app = express();
const PORT = 8080;
app.use(express.json());
app.get('/health', (req, res) => {
    res.json({
        status: 'ok',
        service: 'ec2-app-backend',
        timestamp: new Date().toISOString()
    });
});
app.get('/api/datos', (req, res) => {
    res.json({
        mensaje: 'Respuesta desde Backend',
        capa: 'ec2-app',
        zona: 'private-subnet'
    });
});
app.listen(PORT, () => {
    console.log(`Backend corriendo en puerto ${PORT}`);
});
//# sourceMappingURL=index.js.map