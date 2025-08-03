const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

app.post('/mapear-gpt', async (req, res) => {
  const preview = req.body.preview;

  // Simulação do mapeamento (substitua por chamada real se quiser)
  // Aqui você poderia integrar com a OpenAI se quiser
  return res.json({
    br: "Task ID",
    cep: "Zipcode",
    endereco: "Buyer Address",
    motorista: "Driver Name",
    telefone: "Driver Phone"
  });
});

app.get('/', (req, res) => res.send('API GPT está rodando!'));

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
