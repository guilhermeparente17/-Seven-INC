import React, { useState } from 'react';
import { useFormik } from 'formik';
import { 
  EmployeeShowTitle,
  Buttons,
  Container,
  FormControl,
  Form,
  Grid,
  Box
} from './EmployeeShow.Elements';

import { Link } from 'react-router-dom'
import { FormHelperText } from '@material-ui/core';
import Input from '../../../components/Input/Input';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import Stack from '@mui/material/Stack';
import { Button, TextField } from '@mui/material';
import { formatarMoeda } from '../../../utils/formatters';
import { mask } from 'remask';
import useWidth from '../../../hooks/useWidth';
import { useSelector } from 'react-redux';
import { Selectors } from '../../../store/rootReducer';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";

const EmployeeShow = () => {
  const width = useWidth();
  const employee = useSelector(Selectors.getEmployee);
  const statusPage = useSelector(Selectors.getStatusPage);
  const [createdAt, setCreatedAt] = useState(employee?.created_at);
  const [birthDay, setBirthDay] = useState(employee?.birth_date);
  const navigate = useNavigate();


  const handleChangeBirthDay = (newValue) => {
    setBirthDay(newValue);
  };

  const handleChangeCreatedAt = (newValue) => {
    setCreatedAt(newValue);
  };

  const formik = useFormik({
    initialValues: {
      name: employee?.name || '',
      document: mask(employee?.document, ['999.999.999-99']) || '',
      email: employee?.email || '',
      phone: mask(employee?.phone, ['(99) 9.9999-9999']) || '',
      created_at: createdAt || '',
      salary: employee?.salary || ''
    },
    onSubmit: values => {
      const data = {
        ...values,
        birth_day: birthDay,
        created_at: createdAt
      }

      alert(JSON.stringify(data, null, 2));
      navigate("/employee", { replace: true });
      toast.success('Funcionário criado com sucesso', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    },
  });
  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <EmployeeShowTitle>{statusPage === 'show' ? 'Detalhes do Funcionário' : 'Editar Funcionário'}</EmployeeShowTitle>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <Box>
            <Grid>
              <FormControl marginB={'15px'}>
                <Input 
                  title='Nome'
                  wid={width >= 1500 ? '300px' : '200px'} 
                  type="text" 
                  id="name" 
                  value={formik?.values?.name} 
                  onChange={formik.handleChange} 
                  placeholder="Insira seu nome"
                  disabled={statusPage === 'show' ? true : false}
                />
                <FormHelperText id="my-helper-text">Digitet seu nome completo</FormHelperText>
              </FormControl>

              <FormControl marginB={'15px'}>
                <Input 
                  title='CPF'
                  wid={width >= 1500 ? '300px' : '200px'} 
                  type="string" 
                  id="document" 
                  value={formik?.values?.document} 
                  onChange={e => formik.setFieldValue('document', mask(e.target.value, ['999.999.999-99']))}
                  placeholder="Digite seu cpf"
                  disabled={statusPage === 'show' ? true : false}
                />
                <FormHelperText id="my-helper-text">Digite um cpf válido</FormHelperText>
              </FormControl>

              <FormControl marginB={'15px'}>
                <Input 
                  title='Email'
                  wid={width >= 1500 ? '400px' : '300px'} 
                  type="text" 
                  id="email" 
                  value={formik?.values?.email} 
                  onChange={formik.handleChange} 
                  placeholder="Digite seu email"
                  disabled={statusPage === 'show' ? true : false}
                />
                <FormHelperText id="my-helper-text">Digite um email válido</FormHelperText>
              </FormControl>
            </Grid>

            <Grid marginT={width >= 975 ? 30 : 0}>
              <FormControl marginB={'15px'}>
                <Input 
                  title='Telefone'
                  wid={'300px'} 
                  type="string" 
                  id="phone" 
                  value={formik?.values?.phone} 
                  onChange={e => formik.setFieldValue('phone', mask(e.target.value, ['(99) 9.9999-9999']))}
                  placeholder="Digite seu Telefone"
                  disabled={statusPage === 'show' ? true : false}
                />
                <FormHelperText id="my-helper-text">Digite seu telefone válido</FormHelperText>
              </FormControl>

              <FormControl>
                <Input 
                  title='Salário'
                  wid={'300px'} 
                  type="string" 
                  id="salary" 
                  value={formik?.values?.salary}
                  onChange={e => formik.setFieldValue('salary', formatarMoeda(e.target.value))}
                  placeholder="Insira um valor"
                  disabled={statusPage === 'show' ? true : false}
                />
                <FormHelperText id="my-helper-text">Digite seu salário</FormHelperText>
              </FormControl>
            </Grid>

            <Grid marginT={30}>
              <FormControl marginB={'40px'}>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                        <DesktopDatePicker
                          label="Data de Nascimento"
                          inputFormat="dd/MM/yyyy"
                          disabled={statusPage === 'show' ? true : false}
                          value={birthDay}
                          onChange={handleChangeBirthDay}
                          renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                  </LocalizationProvider>
              </FormControl>

              <FormControl>
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={3}>
                        <DesktopDatePicker
                          label="Data de Contratação"
                          inputFormat="dd/MM/yyyy"
                          value={createdAt}
                          onChange={handleChangeCreatedAt}
                          disabled={statusPage === 'show' ? true : false}
                          renderInput={(params) => <TextField {...params} />}
                        />
                    </Stack>
                  </LocalizationProvider>
              </FormControl>
            </Grid>
          </Box>
          <Buttons>
            {statusPage === 'edit' ? <Button variant='contained' size='large' type="submit">Salvar</Button> : ''}
            <Link to="/employee"><Button variant='contained' size='large' >Voltar</Button></Link>
          </Buttons>
        </div>
      </Form>
    </Container>
  );
};

export default EmployeeShow;