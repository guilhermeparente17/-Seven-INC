import dayjs from "dayjs";
import { mask } from "remask";
import Buttons from "../../components/Buttons/Buttons";


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
    editable: true,
    valueGetter: (params) =>
      `${mask(params.row.phone, ['(99) 9.9999-9999'])}`
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
        <div>
          <Buttons params={params} />
        </div>
      )
    }
  },
]

