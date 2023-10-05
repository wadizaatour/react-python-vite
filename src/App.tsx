import { useState } from 'react';
import axios from 'axios';
import { saveIds } from './actions/generateIdsAction';
import { Grid, TextField, Button, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import './App.css';

function App() {
  const [index, setIndex] = useState('');
  const [ids, setIds] = useState([]);
  const [error, setError] = useState(false);

  const handleGenerate = () => {
    if (index) {
      axios.post('http://localhost:5000/generate-ids', { index })
        .then(response => {
          setIds(response.data.ids);
          saveIds(response.data.ids);
          setError(false);
        })
        .catch(error => {
          console.error(error);
        });
    } else {
      setError(true);
    }
  };

  return (
    <div className="App">
      <h1>Random ID Generator</h1>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={8}>
          <TextField
            label="Enter Index"
            variant="outlined"
            fullWidth
            value={index}
            onChange={(e) => setIndex(e.target.value)}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained" onClick={handleGenerate} fullWidth>
            Generate IDs
          </Button>
        </Grid>
      </Grid>
      {error && <p className="error-message">Please enter a valid index.</p>}
      <div className="id-table-container">
        <h2>Random IDs Table</h2>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID Name</TableCell>
                <TableCell>ID Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ids.map((id, index) => (
                <TableRow key={index}>
                  <TableCell>ID {index + 1}</TableCell>
                  <TableCell>{id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div >
  );
}

export default App;
