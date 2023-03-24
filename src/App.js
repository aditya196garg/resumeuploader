import { Box, FormControl, Grid, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography, Avatar, FormLabel, RadioGroup, FormControlLabel, Radio, FormGroup, Checkbox, Button } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/lab';
import { useState } from 'react';
import { Stack } from '@mui/system';

function App() {
  
  const [dob, setDob] = useState(null);
  const [state, setState] = useState('Bhopal');

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        sx={{ backgroundColor: 'green', padding: 2 }}
      >
        <Typography variant="h2" component="div" sx={{ fontWeight: 'bold', color: 'white' }}>
          Resume Uploader
        </Typography>
      </Box>
      <Grid container justifyContent="center">
        <Grid item xs={5}>
          <Box component="form" sx={{ p: 3 }} noValidate id="resume-form">
            <TextField id="name" name="name" required fullWidth margin="normal" label="Name" />
            <TextField id="email" name="email" required fullWidth margin="normal" label="Email" />

            <Box sx={{ width: '20%' }}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date of Birth"
                  value={dob}
                  onChange={(newvalue) => {
                    setDob(newvalue);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Box>

            <Box mt={2}>
              <InputLabel id="state-select-label">State</InputLabel>
            </Box>
            <FormControl fullWidth margin="normal">
              <Select
                labelId="state-select-label"
                id="state-select"
                value={state}
                onChange={handleChange}
              >
                <MenuItem value="Bhopal">Bhopal</MenuItem>
                <MenuItem value="Indore">Indore</MenuItem>
                <MenuItem value="Ahmedabad">Ahmedabad</MenuItem>
                <MenuItem value="Vadodara">Vadodara</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth margin='normal'>
              <FormLabel id="gender-radio">Gender</FormLabel>
              <RadioGroup row name="gender">
              <FormControlLabel value="male" control={<Radio />} label='male' /> 
              <FormControlLabel value="femail" control={<Radio />} label='female' />
              <FormControlLabel value="other" control={<Radio />} label='other' />
              </RadioGroup>
            </FormControl>
            <FormControl component='fieldset' fullWidth margin='normal'>
              <FormLabel component='legend'>Preferred Job Location</FormLabel>
              <FormGroup row>
                <FormControlLabel control={<Checkbox />} label="Ahmendaad" value="Ahmendabad"/>
                <FormControlLabel control={<Checkbox />} label="Surat" value="Surat"/>
                <FormControlLabel control={<Checkbox />} label="Varodra" value="Varodra"/>
                <FormControlLabel control={<Checkbox />} label="Bhopal" value="Bhopal"/>                  
                <FormControlLabel control={<Checkbox />} label="Indore" value="Indore"/>
                <Stack direction="row" alignItems="center" spacing={4} >
                  <label htmlFor='profile-photo'>
                    <input accept="image/*" id="profile-photo" type="file" />
                    <Button variant='contained' component='span'>Upload Photo
                    </Button>
                  </label>
                </Stack>
              </FormGroup>
            </FormControl>
            <Button type='submit' variant='contained' sx={{ mt: 3,mb: 2, px:5
            }} color="error">Submit</Button>
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box display="flex" justifyContent="center" sx={{
            backgroundColor: 'red', padding: 1
          }}>
            <Typography variant='h2' component="div" sx={{ fontWeight: 'bold', color: 'white' }}>List of Candidates</Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simpletable">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">Email</TableCell>
                  <TableCell align="center">DOB</TableCell>
                  <TableCell align="center">State</TableCell>
                  <TableCell align="center">Gender</TableCell>
                  <TableCell align="center">Location</TableCell>
                  <TableCell align="center">Profile</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">aditi</TableCell>
  <TableCell align="center">aditi@gmail.com</TableCell>
  <TableCell align="center">{dob ? dob.toLocaleDateString() : "-"}</TableCell>
  <TableCell align="center">{state}</TableCell>
  <TableCell align="center">Female</TableCell>
  <TableCell align="center">Bhopal</TableCell>
  <TableCell align="center"><Avatar src="#" /></TableCell> 
</TableRow>
</TableBody>
          </Table>
      </TableContainer>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
