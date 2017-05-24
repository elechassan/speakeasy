\c speak-easy

CREATE TABLE IF NOT EXISTS phrases (
  id BIGSERIAL PRIMARY KEY,
  phrase_text VARCHAR(1024)
);

CREATE TABLE IF NOT EXISTS users (
  id BIGSERIAL PRIMARY KEY,
  user_name VARCHAR(1024),
  user_password VARCHAR(1024),
  user_id INTEGER REFERENCES phrases(id)

);