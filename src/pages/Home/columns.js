import { Button } from "@mui/material";
import dayjs from "dayjs";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'

export const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Nome',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 180,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Telefone',
    type: 'number',
    width: 180,
    editable: true
  },
  {
    field: 'salary',
    headerName: 'Salário',
    type: 'number',
    width: 180,
    editable: true,
  },
  {
    field: 'created_at',
    headerName: 'Data de Contratação',
    type: 'string',
    width: 180,
    editable: true,
    valueGetter: (params) =>
      `${dayjs(params.row.created_at).format('DD/MM/YYYY')}`
  },
  {
    width: 380,
    renderCell: (params) => {
      return (
        <div style={{width: '350px', display: 'flex', justifyContent: 'space-between'}}>
          <Link to={`/employee/${params?.row?.id}/show`}><Button variant='contained'>Mostrar</Button></Link>
          <Link to={`/employee/${params?.row?.id}/editar`}><Button variant='contained'>Editar</Button></Link>
          <Link to={`/employee/${params?.row?.id}`}>
            <Button variant='contained' color='error' startIcon={<DeleteIcon />}>
              Remover
            </Button>
          </Link>
        </div>
      )
    }
  },
]

