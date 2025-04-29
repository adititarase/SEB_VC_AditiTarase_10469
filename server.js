const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Mongoose Connection Setup
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/java-classroom';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((error) => {
  console.error('❌ MongoDB connection error:', error.message);
  process.exit(1); // Exit the server if DB connection fails
});

// ✅ Java Code Execution Endpoint
app.post('/run', (req, res) => {
  const { code } = req.body;

  console.log('Received code:', code);

  const classNameMatch = code.match(/public\s+class\s+([A-Za-z_][A-Za-z0-9_]*)/);
  const className = classNameMatch ? classNameMatch[1] : 'Main';

  const tempDir = path.join(__dirname, 'temp', uuidv4());
  console.log('Using temp directory:', tempDir);
  fs.mkdirSync(tempDir, { recursive: true });

  const filePath = path.join(tempDir, `${className}.java`);
  fs.writeFileSync(filePath, code);

  // ✅ Compile the Java Code
  exec(`javac ${className}.java`, { cwd: tempDir }, (compileError, compileStdout, compileStderr) => {
    if (compileError || compileStderr) {
      console.log('❌ Compilation Error:', compileStderr || compileError.message);
      return res.json({ output: compileStderr || compileError.message });
    }

    // ✅ Check if .class file was generated
    const classFile = path.join(tempDir, `${className}.class`);
    if (!fs.existsSync(classFile)) {
      return res.json({ output: `Compilation failed: ${className}.class not found` });
    }

    // ✅ Execute the Java class
    exec(`java -cp . ${className}`, { cwd: tempDir }, (runError, runStdout, runStderr) => {
      if (runError || runStderr) {
        console.log('❌ Runtime Error:', runStderr || runError.message);
        return res.json({ output: runStderr || runError.message });
      }

      console.log('✅ Java Execution Output:', runStdout);
      return res.json({ output: runStdout });
    });
  });
});

// ✅ Auth Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// ✅ Start Server AFTER DB Connection Established
const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
