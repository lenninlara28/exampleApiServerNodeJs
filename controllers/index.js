const servicesUser = require("../services/users");

const controllersGet = (req, res) => {
  /* Espacio para validaciónes */
  const users = servicesUser.getServices();
  if (!users) return res.status(404).json({ message: "No hay usuarios" });
  res.status(200).json({ message: "Usuarios Listados" }, users);
};

const controllersCreate = (req, res) => {
  const { body: data } = req;

  /* Espacio para validaciónes */

  const users = servicesUser.createUser(data);
  res.status(200).json({ message: "Creado exitosamente" });
};

const controllersUpdate = () => {
  const { body: data, params: id } = req;

  /* Espacio para validaciónes */

  const users = servicesUser.updateUser(data, id);
  res.status(200).json({ message: "actualizado exitosamente" });
};

const controllersDelete = () => {
  const { params: id } = req;

  /* Espacio para validaciónes */

  const users = servicesUser.deleteUser(id);
  res.status(200).json(json({ message: "Eliminado exitosamente" }));
};

module.exports = {
  controllersGet,
  controllersCreate,
  controllersUpdate,
  controllersDelete,
};
