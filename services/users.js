const models = require("../DB/models");

const controllersGet = () => {
  /* Traer usuarios de la bd */
  const user = models.getAll();
  return user;
};

const controllersCreate = (data) => {
  /* crear un usuario de la bd */

  const user = models.createUser(data, id);
  return user;
};

const controllersUpdate = (data, id) => {
  /* Actualizar usuarios de la bd */

  const user = models.updateUser(data, id);
  return user;
};

const controllersDelete = (id) => {
  const user = models.updateUser({ estado: -1 }, id);
  return user;
};

module.exports = {
  controllersGet,
  controllersCreate,
  controllersUpdate,
  controllersDelete,
};
