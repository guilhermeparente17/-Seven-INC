import React from 'react'

import {
  HomeContainer,
  HomeTitle
} from './Home.Elements'

import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import { columns } from './columns';
import { rows } from './rows';



const Home = () => {
  return (
    <HomeContainer>
      <HomeTitle>Listagem de Funcionários</HomeTitle>
      <Box style={{backgroundColor: '#fff'}} sx={{ height: 650, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
          disableSelectionOnClick
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </HomeContainer>
  )
}

export default Home;
