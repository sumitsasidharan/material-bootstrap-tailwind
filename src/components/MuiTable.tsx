import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

export const MuiTable = () => {
  return (
     <TableContainer component={Paper} sx={{ maxHeight: '300px' }} >
        <Table aria-label="simple table" stickyHeader >
           <TableHead>
              <TableRow>
                 <TableCell>ID</TableCell>
                 <TableCell>First Name</TableCell>
                 <TableCell>Last Name</TableCell>
                 <TableCell align="center">Email</TableCell>
                 <TableCell align="left">Gender</TableCell>
                 <TableCell >IP Address</TableCell>
              </TableRow>
           </TableHead>

           <TableBody>
              {tableData.map((row) => (
                 <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>{row.first_name}</TableCell>
                    <TableCell >{row.last_name}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="left">{row.gender}</TableCell>
                    <TableCell >{row.ip_address}</TableCell>
                 </TableRow>
              ))}
           </TableBody>
        </Table>
     </TableContainer>
  );
}

const tableData = [
   {
      id: 1,
      first_name: 'Carney',
      last_name: 'Lafond',
      email: 'clafond0@bbb.org',
      gender: 'Male',
      ip_address: '4.183.130.108',
   },
   {
      id: 2,
      first_name: 'Marven',
      last_name: 'Issacof',
      email: 'missacof1@nymag.com',
      gender: 'Male',
      ip_address: '54.11.126.151',
   },
   {
      id: 3,
      first_name: 'Timotheus',
      last_name: 'Abriani',
      email: 'tabriani2@newyorker.com',
      gender: 'Male',
      ip_address: '245.110.175.238',
   },
   {
      id: 4,
      first_name: 'Fidole',
      last_name: 'Boncoeur',
      email: 'fboncoeur3@yahoo.com',
      gender: 'Male',
      ip_address: '178.100.62.93',
   },
   {
      id: 5,
      first_name: 'Marie-jeanne',
      last_name: 'Lasslett',
      email: 'mlasslett4@rediff.com',
      gender: 'Female',
      ip_address: '247.86.175.237',
   },
   {
      id: 6,
      first_name: 'Blinny',
      last_name: 'Seabright',
      email: 'bseabright5@theglobeandmail.com',
      gender: 'Bigender',
      ip_address: '178.207.14.89',
   },
   {
      id: 7,
      first_name: 'Rooney',
      last_name: 'Rebeiro',
      email: 'rrebeiro6@usda.gov',
      gender: 'Male',
      ip_address: '80.136.91.105',
   },
   {
      id: 8,
      first_name: 'Haley',
      last_name: 'Bevan',
      email: 'hbevan7@wsj.com',
      gender: 'Female',
      ip_address: '16.105.252.32',
   },
   {
      id: 9,
      first_name: 'Brynna',
      last_name: 'Sirrell',
      email: 'bsirrell8@zdnet.com',
      gender: 'Female',
      ip_address: '91.90.111.54',
   },
   {
      id: 10,
      first_name: 'Orbadiah',
      last_name: 'Besant',
      email: 'obesant9@wired.com',
      gender: 'Male',
      ip_address: '148.79.191.151',
   },
];
