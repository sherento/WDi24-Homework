CREATE TABLE countries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  continent TEXT,
  capital TEXT,
  area NUMBER,
  population NUMBER
);

-- SEED DATA
INSERT INTO countries (continent, capital, area, population) VALUES ('Europe', 'Helsinki', 338424, 5509717)

INSERT INTO countries (continent, capital, area, population) VALUES ('United States of America', 'Washington, D.C', 3796742, 325365189)

INSERT INTO countries (continent, capital, area, population) VALUES ('Asia', 'Tokyo', 377972, 126672000)
