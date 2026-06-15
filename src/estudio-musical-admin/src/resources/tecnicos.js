import {
  List, Datagrid, TextField, NumberField, EditButton,
  Edit, SimpleForm, TextInput, NumberInput, required,
  Create
} from "react-admin";

export const TecnicoList = () => (
  <List sort={{ field: "numero", order: "ASC" }}>
    <Datagrid rowClick="edit">
      <TextField source="numero" />
      <TextField source="nome" />
      <NumberField source="numero_sala" />
      <EditButton />
    </Datagrid>
  </List>
);

const TecnicoForm = () => (
  <SimpleForm>
    <TextInput source="numero" validate={required()} />
    <TextInput source="nome" validate={required()} />
    <NumberInput source="numero_sala" validate={required()} />
  </SimpleForm>
);

export const TecnicoEdit = () => (
  <Edit>
    <TecnicoForm />
  </Edit>
);

export const TecnicoCreate = () => (
  <Create>
    <TecnicoForm />
  </Create>
);