import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import { Button } from "@mui/material";
import { useDispatch } from 'react-redux';
import { ActionsTypes } from '../../store/rootReducer';

const Buttons = ({params}) => {
  const dispatch = useDispatch()
  return (
      <div style={{width: '350px', display: 'flex', justifyContent: 'space-between'}}>
            <Link to={`/employee/${params?.row?.id}/show`}><Button onClick={() => dispatch(ActionsTypes.addEmployee(params.row))} variant='contained'>Mostrar</Button></Link>
              <Link to={`/employee/${params?.row?.id}/editar`}><Button variant='contained'>Editar</Button></Link>
              <Link to={`/employee/${params?.row?.id}`}>
                <Button variant='contained' color='error' startIcon={<DeleteIcon />}>
                  Remover
                </Button>
            </Link>
      </div>
  )
}

export default Buttons