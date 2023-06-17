-- V2__Add_Mendoza_Cities.sql

-- Insert cities of Mendoza
INSERT INTO city (name, zipcode, abbreviation, state_id, created_at, updated_at)
VALUES
  ('General Alvear', '5620', 'GAV', (SELECT id FROM states WHERE name = 'Mendoza'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Godoy Cruz', '5501', 'GCR', (SELECT id FROM states WHERE name = 'Mendoza'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Junín', '5570', 'JUN', (SELECT id FROM states WHERE name = 'Mendoza'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('La Paz', '5567', 'LPZ', (SELECT id FROM states WHERE name = 'Mendoza'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Las Heras', '5539', 'LHE', (SELECT id FROM states WHERE name = 'Mendoza'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Luján de Cuyo', '5507', 'LDC', (SELECT id FROM states WHERE name = 'Mendoza'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Maipú', '5515', 'MAI', (SELECT id FROM states WHERE name = 'Mendoza'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Mendoza', '5500', 'MDZ', (SELECT id FROM states WHERE name = 'Mendoza'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Malargüe', '5613', 'MLG', (SELECT id FROM states WHERE name = 'Mendoza'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Rivadavia', '5575', 'RIV', (SELECT id FROM states WHERE name = 'Mendoza'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Lavalle', '5533', 'LAV', (SELECT id FROM states WHERE name = 'Mendoza'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('San Carlos', '5563', 'SCA', (SELECT id FROM states WHERE name = 'Mendoza'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Guaymallén', '5521', 'GUY', (SELECT id FROM states WHERE name = 'Mendoza'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Tupungato', '5561', 'TUP', (SELECT id FROM states WHERE name = 'Mendoza'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Tunuyán', '5560', 'TUN', (SELECT id FROM states WHERE name = 'Mendoza'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('Santa Rosa', '5601', 'SRO', (SELECT id FROM states WHERE name = 'Mendoza'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('San Rafael', '5600', 'SRF', (SELECT id FROM states WHERE name = 'Mendoza'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
  ('San Martín', '5570', 'SMT', (SELECT id FROM states WHERE name = 'Mendoza'), CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
