CREATE TABLE artworks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  author TEXT,
  year TEXT,
  type TEXT,
  image TEXT
);

--seed data
INSERT INTO artworks (name, author, year, type, image) VALUES ('I Love Gucci', 'John Paul Fauves', '2017', 'Mixed media acrylic and oil paint', 'https://farm5.staticflickr.com/4586/24637978648_f7210d517a_z.jpg
');
