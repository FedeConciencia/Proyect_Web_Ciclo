-- V1__Add_Argentine_States.sql
-- Create the states table
CREATE TABLE IF NOT EXISTS states (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  abbreviation VARCHAR(10) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Insert Argentine states
INSERT INTO states (id, name, abbreviation, created_at, updated_at) VALUES
  (1, 'Buenos Aires', 'BA', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (2, 'Córdoba', 'CBA', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (3, 'Santa Fe', 'SF', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (4, 'Mendoza', 'MZA', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (5, 'Catamarca', 'CT', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (6, 'Chaco', 'CH', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (7, 'Chubut', 'CHU', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (8, 'Corrientes', 'COR', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (9, 'Entre Ríos', 'ER', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (10, 'Formosa', 'FOR', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (11, 'Jujuy', 'JUJ', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (12, 'La Pampa', 'LP', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (13, 'La Rioja', 'LR', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (14, 'Misiones', 'MI', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (15, 'Neuquén', 'NE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (16, 'Río Negro', 'RN', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (17, 'Salta', 'SA', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (18, 'San Juan', 'SJ', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (19, 'San Luis', 'SL', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (20, 'Santa Cruz', 'SC', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (21, 'Santiago del Estero', 'SE', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (22, 'Tierra del Fuego', 'TF', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (23, 'Tucumán', 'TU', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  (24, 'Ciudad Autónoma de Buenos Aires', 'CABA', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);