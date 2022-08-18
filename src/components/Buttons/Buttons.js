import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import { Button, Modal } from "@mui/material";
import { useDispatch } from 'react-redux';
import { ActionsTypes } from '../../store/rootReducer';
import { toast } from 'react-toastify';
import {
  Container,
  Title,
  ButtonsContainer
} from './Buttons.Elements'

const Buttons = ({params}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch()

  const handleDelete = () => {
    setIsOpen(false);
    toast.error('Funcionário deletado com sucesso', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
  }

  return (
      <div style={{width: '350px', display: 'flex', justifyContent: 'space-between'}}>
        <Modal
          open={isOpen}
          onClose={() => setIsOpen(false)}
        >
          <Container>
            <Title id="modal-modal-title" variant="h6" component="h2">
              Você tem certeza que deseja excluir o funcionário {params.row.name} ?
            </Title>
            <ButtonsContainer>
              <Button onClick={() => handleDelete()} size='large' variant='contained' color='error'>Excluir</Button>
              <Button 
                onClick={() => setIsOpen(false)}
                style={{marginLeft: '20px'}} 
                size='large' 
                variant='contained' 
                color='primary'>
                  Voltar
              </Button>
            </ButtonsContainer>
          </Container>
        </Modal>
        <Link to={`/employee/${params?.row?.id}/show`}><Button onClick={() => {
          dispatch(ActionsTypes.addEmployee(params.row))
          dispatch(ActionsTypes.addStatusPage('show'))
        }} variant='contained'>Mostrar</Button></Link>
        <Link to={`/employee/${params?.row?.id}/edit`}><Button onClick={() => {
          dispatch(ActionsTypes.addEmployee(params.row))
          dispatch(ActionsTypes.addStatusPage('edit'))
        }} variant='contained'>Editar</Button></Link>
        <Link to={`/employee/${params?.row?.id}`}>
          <Button onClick={() => setIsOpen(true)} variant='contained' color='error' startIcon={<DeleteIcon />}>
            Remover
          </Button>
        </Link>
      </div>
  )
}

export default Buttons