CREATE TABLE parents (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  mapref TEXT,
  image TEXT,
  fav_rest TEXT,
  fav_rest_img TEXT
);

CREATE TABLE childs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  distance_from_parent INTEGER,
  parent_id INTEGER
);

-- seed data
INSERT INTO parents (name) VALUES ('Brooklyn');
INSERT INTO parents (name) VALUES ('Hornsby');
INSERT INTO parents (name) VALUES ('Epping');
INSERT INTO parents (name) VALUES ('Chatswood');

INSERT INTO childs (name) VALUES ('Glenfield');
INSERT INTO childs (name) VALUES ('Cabramatta');
INSERT INTO childs (name) VALUES ('Bankstown');
INSERT INTO childs (name) VALUES ('Lidcombe');
