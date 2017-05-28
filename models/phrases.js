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

Phrases.create = (phrase) => {
  return db.one(
    `
    INSERT INTO phrases (phrase, language)
    VALUES ($1, $2)
    RETURNING *`,
    [phrase.phrase, phrase.language]
  );
};

Phrases.update = (phrase, id) => {
  return db.one(
    `
      UPDATE phrases SET
      phrase = $1,
      language = $2
      WHERE id = $3
      RETURNING *
    `, [phrase.phrase, phrase.language, id]
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