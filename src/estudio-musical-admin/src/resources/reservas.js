import {
  List, Datagrid, TextField, NumberField, DateField, EditButton,
  Edit, SimpleForm, TextInput, NumberInput, DateInput, required,
  Create
} from "react-admin";

export const ReservaList = () => (
  <List sort={{ field: "id_reserva", order: "ASC" }}>
    <Datagrid rowClick="edit">
      <NumberField source="id_reserva" />
      <DateField source="data" />
      <TextField source="hora_inicio" />
      <TextField source="hora_fim" />
      <TextField source="estado" />
      <NumberField source="numero_sala" />
      <TextField source="numero_artista" />
      <EditButton />
    </Datagrid>
  </List>
);

const ReservaForm = () => (
  <SimpleForm>
    <DateInput source="data" validate={required()} />
    <TextInput source="hora_inicio" validate={required()} helperText="Formato HH:MM:SS" />
    <TextInput source="hora_fim" validate={required()} helperText="Formato HH:MM:SS" />
    <TextInput source="estado" validate={required()} />
    <NumberInput source="numero_sala" validate={required()} />
    <TextInput source="numero_artista" validate={required()} />
  </SimpleForm>
);

export const ReservaEdit = () => (
  <Edit>
    <ReservaForm />
  </Edit>
);

export const ReservaCreate = () => (
  <Create>
    <ReservaForm />
  </Create>
);