import { fetchUtils } from "react-admin";

const apiUrl = "http://localhost:3000";
const httpClient = fetchUtils.fetchJson;

// Mapeia o nome da PK real de cada resource
const idFields = {
  artistas: "numero",
  salas: "numero",
  equipamentos: "identificador",
  tecnicos: "numero",
  reservas: "id_reserva",
};

const addId = (resource, item) => ({
  ...item,
  id: item[idFields[resource]],
});

const removeId = (resource, data) => {
  const { id, ...rest } = data;
  return rest;
};

const dataProvider = {
  getList: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;

    const sortField = field === "id" ? idFields[resource] : field;

    const filter = {
      order: [`${sortField} ${order}`],
      limit: perPage,
      skip: (page - 1) * perPage,
      where: params.filter,
    };

    const query = `filter=${encodeURIComponent(JSON.stringify(filter))}`;
    const { json } = await httpClient(`${apiUrl}/${resource}?${query}`);

    const countQuery = `where=${encodeURIComponent(JSON.stringify(params.filter || {}))}`;
    const countRes = await httpClient(`${apiUrl}/${resource}/count?${countQuery}`);

    return {
      data: json.map((item) => addId(resource, item)),
      total: countRes.json.count,
    };
  },

  getOne: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}/${params.id}`);
    return { data: addId(resource, json) };
  },

  getMany: async (resource, params) => {
    const idField = idFields[resource];
    const filter = { where: { [idField]: { inq: params.ids } } };
    const query = `filter=${encodeURIComponent(JSON.stringify(filter))}`;
    const { json } = await httpClient(`${apiUrl}/${resource}?${query}`);
    return { data: json.map((item) => addId(resource, item)) };
  },

  getManyReference: async (resource, params) => {
    const { page, perPage } = params.pagination;
    const { field, order } = params.sort;
    const sortField = field === "id" ? idFields[resource] : field;

    const filter = {
      order: [`${sortField} ${order}`],
      limit: perPage,
      skip: (page - 1) * perPage,
      where: { ...params.filter, [params.target]: params.id },
    };

    const query = `filter=${encodeURIComponent(JSON.stringify(filter))}`;
    const { json } = await httpClient(`${apiUrl}/${resource}?${query}`);

    return {
      data: json.map((item) => addId(resource, item)),
      total: json.length,
    };
  },

  create: async (resource, params) => {
    const { json } = await httpClient(`${apiUrl}/${resource}`, {
      method: "POST",
      body: JSON.stringify(params.data),
    });
    return { data: addId(resource, json) };
  },

  update: async (resource, params) => {
    const data = removeId(resource, params.data);
    await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
    return { data: { ...params.data, id: params.id } };
  },

  updateMany: async (resource, params) => {
    await Promise.all(
      params.ids.map((id) => {
        const data = removeId(resource, params.data);
        return httpClient(`${apiUrl}/${resource}/${id}`, {
          method: "PATCH",
          body: JSON.stringify(data),
        });
      })
    );
    return { data: params.ids };
  },

  delete: async (resource, params) => {
    await httpClient(`${apiUrl}/${resource}/${params.id}`, {
      method: "DELETE",
    });
    return { data: params.previousData };
  },

  deleteMany: async (resource, params) => {
    await Promise.all(
      params.ids.map((id) =>
        httpClient(`${apiUrl}/${resource}/${id}`, { method: "DELETE" })
      )
    );
    return { data: params.ids };
  },
};

export default dataProvider;