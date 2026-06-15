import { Admin, Resource } from "react-admin";
import dataProvider from "./dataProvider";

import { ArtistaList, ArtistaEdit, ArtistaCreate } from "./resources/artistas";
import { SalaList, SalaEdit, SalaCreate } from "./resources/salas";
import { EquipamentoList, EquipamentoEdit, EquipamentoCreate } from "./resources/equipamentos";
import { TecnicoList, TecnicoEdit, TecnicoCreate } from "./resources/tecnicos";
import { ReservaList, ReservaEdit, ReservaCreate } from "./resources/reservas";

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="artistas" options={{ label: "Artistas" }} list={ArtistaList} edit={ArtistaEdit} create={ArtistaCreate} recordRepresentation="nome" />
    <Resource name="salas" options={{ label: "Salas" }} list={SalaList} edit={SalaEdit} create={SalaCreate} recordRepresentation="numero" />
    <Resource name="equipamentos" options={{ label: "Equipamentos" }} list={EquipamentoList} edit={EquipamentoEdit} create={EquipamentoCreate} recordRepresentation="nome" />
    <Resource name="tecnicos" options={{ label: "Técnicos" }} list={TecnicoList} edit={TecnicoEdit} create={TecnicoCreate} recordRepresentation="nome" />
    <Resource name="reservas" options={{ label: "Reservas" }} list={ReservaList} edit={ReservaEdit} create={ReservaCreate} recordRepresentation="id_reserva" />
  </Admin>
);

export default App;