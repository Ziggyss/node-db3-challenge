const db = require('../data/db-config');

module.exports = {
  find,
  findById,
//   findSteps,
  add,
  update,
  remove
};

function find() {
  return db('schemes');
}

function findById(id) {
  return db('schemes')
    .where({ id })
    .first();
}

function add(scheme) {
  return db('schemes')
    .insert(scheme)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db('schemes')
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db('schemes')
    .where('id', id)
    .del();
}