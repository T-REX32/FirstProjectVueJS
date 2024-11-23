// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB Atlas');
});

// Mongoose Schema
const CurriculumSchema = new mongoose.Schema({
  nomeCompleto: String,
  email: String,
  telefone: String,
  endereco: String,
  formacaoAcademica: [
    { curso: String, instituicao: String, anoConclusao: String },
  ],
  experienciaProfissional: [
    { empresa: String, cargo: String, periodo: String },
  ],
  habilidades: [String],
  idiomas: [String],
  objetivoProfissional: String,
});
const Curriculum = mongoose.model('Curriculum', CurriculumSchema);

// Routes
app.get('/curriculos', async (req, res) => {
  try {
    const curriculos = await Curriculum.find();
    res.json(curriculos);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving curriculos' });
  }
});

app.post('/curriculos', async (req, res) => {
  try {
    const newCurriculum = new Curriculum(req.body);
    await newCurriculum.save();
    res.status(201).json(newCurriculum);
  } catch (error) {
    res.status(400).json({ message: 'Error creating curriculum' });
  }
});

app.put('/curriculos/:id', async (req, res) => {
  try {
    const updatedCurriculum = await Curriculum.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedCurriculum);
  } catch (error) {
    res.status(400).json({ message: 'Error updating curriculum' });
  }
});

app.delete('/curriculos/:id', async (req, res) => {
  try {
    await Curriculum.findByIdAndDelete(req.params.id);
    res.json({ message: 'Curriculum deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting curriculum' });
  }
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
