import {
  List, Datagrid, TextField, EditButton,
  Edit, SimpleForm, TextInput, required,
  Create
} from "react-admin";

export const ArtistaList = () => (
  <List sort={{field:"numero", order: "ASC"}}>
    <Datagrid rowClick="edit">
      <TextField source="numero" />
      <TextField source="nome" />
      <TextField source="tipo_artista" />
      <TextField source="email" />
      <EditButton />
    </Datagrid>
  </List>
);

const ArtistaForm = () => (
  <SimpleForm>
    <TextInput source="numero" validate={required()} />
    <TextInput source="nome" validate={required()} />
    <TextInput source="tipo_artista" validate={required()} />
    <TextInput source="email" validate={required()} />
  </SimpleForm>
);

export const ArtistaEdit = () => (
  <Edit>
    <ArtistaForm />
  </Edit>
);

export const ArtistaCreate = () => (
  <Create>
    <ArtistaForm />
  </Create>
);