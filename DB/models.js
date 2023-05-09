const datos = require("./users.json");

const getAll = () => {
  /* Emula una Select * from tabla */
  return datos.effect_entries;
};

const createUser = (data, id) => {
  /* Emula un INSERT INTO tabla (...) VALUES (...) */
  const effect_changes = datos.effect_changes;

  effect_changes.push({ data, id });
  return effect_changes;
};

const updateUser = (data, id) => {
  /* Emula un UPDATE tabla SET ... WHERE id = ...  */
  const effect_changes = datos.effect_changes;

  effect_changes.push({ data, id });
  return effect_changes;
};

module.exports = {
  getAll,
  createUser,
  updateUser,
};
