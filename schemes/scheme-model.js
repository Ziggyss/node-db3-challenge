const db = require("../data/db-config");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
  addStep
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where("id", id)
    .first();
}

function findSteps(id) {
  return db("schemes as s")
    .join("steps as st", "s.id", "st.scheme_id")
    .select("s.scheme_name", "st.step_number", "st.instructions")
    .where({ "s.id": id })
    .orderBy("step_number", "asc");
}

function add(scheme) {
  return db("schemes").insert(scheme);
  // .then(ids => {
  //   return findById(ids[0]);
  // });
}

function update(changes, id) {
  return db("schemes")
    .update(changes)
    .where({ id });
}

function remove(id) {
  return db("schemes")
    .where("id", id)
    .del();
}

function addStep(step, scheme_id) {
  return db("steps")
    .insert(...step)
    .where({ scheme_id });
  // .then(ids => {
  //   return findById(ids[0]);
  // });
}
