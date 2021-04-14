const db = require('../../data/db-config')

const getAll = () => {
  return db("overclocks");
}

const getById = (id) => {
  return db("overclocks").where("id", id).first()
}

const create = async (overclock) => {
  const [id] = await db("overclocks").insert(overclock)
  return getById(id);
}

module.exports = {
  getAll,
  getById,
  create
}