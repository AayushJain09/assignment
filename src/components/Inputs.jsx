import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 6,
    }}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={role}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Roles" />}
        />
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={noemp}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Number of Employees" />}
        />        
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={exp}
          sx={{ width: 150 }}
          renderInput={(params) => <TextField {...params} label="Experience" />}
        />    
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={mode}
          sx={{ width: 100 }}
          renderInput={(params) => <TextField {...params} label="Remote" />}
        />    
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={basepay}
          sx={{ width: 200 }}
          renderInput={(params) => <TextField {...params} label="Minimum Base Pay Salary" />}
        />    

    </div>
  );
}

const role = [
  { label: 'Frontend developer'},
  { label: 'Fullstack developer'},
  { label: 'Backend developer'},
  { label: 'IOS developer'},
  { label: 'React Native developer'},
  { label: 'Flutter developer'},
  { label: 'Python developer'},
  { label: 'C++ developer'},
  { label: 'C# developer'},
  { label: 'Java developer'},
  { label: 'JavaScript developer'},
  { label: 'PHP developer'},
  { label: 'Ruby developer'},
];
const noemp = [
  { label: 1-10},
  { label: 10-25},
  { label: 25-50},
  { label: 50-100},
  { label: 100-200},
  { label: 200-500},
  { label: 500-1000},
  { label: 1000-2000},
  { label: 2000-5000},
];
const exp = [
  { label: '0-1'},
  { label: '1-2'},
  { label: '2-3'},
  { label: '3-4'},
  { label: '4-5'},
  { label: '5-6'},
  { label: '6-7'},
  { label: '7-8'},
  { label: '8-9'},
  { label: '9-10'}
];
const mode = [
  { label: 'Remote'},
  { label: 'Hybrid'},
  { label: 'In-Office'},
];
const basepay = [
    { label: 0},
    { label: '1L'},
    { label: '2L'},
    { label: '3L'},
    { label: '4L'},
    { label: '5L'},
    { label: '6L'},
    { label: '7L'},
    { label: '8L'},
    { label: '9L'},
]