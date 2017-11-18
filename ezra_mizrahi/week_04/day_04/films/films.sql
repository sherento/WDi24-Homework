CREATE TABLE films (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT,
  year INTEGER,
  director TEXT,
  genre TEXT,
  image TEXT
);

-- seed data

INSERT INTO films (title, year, director, genre) VALUES ('Gewalt! Gewalt! Shojo geba-geba', 1969, 'Koji Wakamatsu', 'pinku eiga');
