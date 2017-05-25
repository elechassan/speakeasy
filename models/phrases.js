const db = require('../db/config');

const Phrases = {};

Phrases.findAll = () => {
  console.log('in model');
  return db.query(
    `SELECT * FROM phrases`
  );
};

Phrases.findById = (id) => {
  return db.oneOrNone(
    `
    SELECT * FROM phrases
    WHERE id = $1`, 
    [id]
  );
};

Phrases.create = (phrases) => {
  return db.one(
    `
    INSERT INTO phrases (phrases, users_id)
    VALUES ($1, $2)
    RETURNING *`,
    [phrases.phrases, phrases.user_id]
  );
};

Phrases.update = (phrases, id) => {
  return db.one(
    `
      UPDATE phrases SET
      phrases = $1
      WHERE id = $2
      RETURNING *
    `, [phrases.phrases, id]
  );
};

Phrases.destroy = id => {
  return db.none(
    `
      DELETE FROM phrases
      WHERE id = $1
    `, [id]
  );
};

module.exports = Phrases;