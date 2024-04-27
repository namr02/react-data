import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Title from './components/title.jsx';
import MediaCard from './components/employeecard.jsx';
import Data from './data/data.js';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Switch from '@mui/material/Switch';

function App() {
  const [showOnLeave, setShowOnLeave] = useState(false);
  console.log(showOnLeave);


  const filtereddata = showOnLeave ? Data.filter((employee) => employee.onLeave ) : Data;
  const toggleOnLeave = (event) => { if(showOnLeave) {setShowOnLeave(false)} else setShowOnLeave(true) };

  return (
    <Container fixed>
      <Box>
      <Typography variant="h4" component="h1">
  Employee Dashboard
</Typography>
</Box>
<Stack spacing={2} direction="row" justifycontent="center">

      <Switch onChange={toggleOnLeave} />git
      </Stack>
    <MediaCard data={filtereddata} />
    </Container>
  )
}

export default App
