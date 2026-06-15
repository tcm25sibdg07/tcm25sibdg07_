import {
  List, Datagrid, TextField, NumberField, EditButton,
  Edit, SimpleForm, TextInput, NumberInput, required,
  Create
} from "react-admin";

export const EquipamentoList = () => (
  <List>
    <Datagrid rowClick="edit">
      <NumberField source="identificador" />
      <TextField source="nome" />
      <NumberField source="numero" />
      <EditButton />
    </Datagrid>
  </List>
);

const EquipamentoForm = () => (
  <SimpleForm>
    <NumberInput source="identificador" validate={required()} />
    <TextInput source="nome" validate={required()} />
    <NumberInput source="numero" validate={required()} />
  </SimpleForm>
);

export const EquipamentoEdit = () => (
  <Edit>
    <EquipamentoForm />
  </Edit>
);

export const EquipamentoCreate = () => (
  <Create>
    <EquipamentoForm />
  </Create>
);