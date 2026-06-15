import {
  List, Datagrid, TextField, NumberField, EditButton,
  Edit, SimpleForm, TextInput, NumberInput, required,
  Create
} from "react-admin";

export const SalaList = () => (
  <List>
    <Datagrid rowClick="edit">
      <TextField source="numero" />
      <NumberField source="numero_maximo" />
      <NumberField source="preco" />
      <TextField source="estado" />
      <EditButton />
    </Datagrid>
  </List>
);

const SalaForm = () => (
  <SimpleForm>
    <NumberInput source="numero" validate={required()} />
    <NumberInput source="numero_maximo" validate={required()} />
    <NumberInput source="preco" validate={required()} />
    <TextInput source="estado" validate={required()} />
  </SimpleForm>
);

export const SalaEdit = () => (
  <Edit>
    <SalaForm />
  </Edit>
);

export const SalaCreate = () => (
  <Create>
    <SalaForm />
  </Create>
);