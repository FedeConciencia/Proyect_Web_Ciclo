create database proyecto_ciclo;

SET SQL_SAFE_UPDATES = 0;

use proyecto_ciclo;

#---------------------------------------

#ENTIDAD FormCommunity  =>

SELECT * FROM form_communities;

SELECT * FROM form_communities WHERE id = 1;

DELETE FROM form_communities WHERE id = 1;

UPDATE form_communities set codigo = "0001" where id = 1;

DELETE FROM form_communities;

alter table form_communities auto_increment = 1;

#---------------------------------------

#ENTIDAD FormProject  =>

SELECT * FROM form_projects;

SELECT * FROM form_projects WHERE id = 1;

DELETE FROM form_projects WHERE id = 1;

UPDATE form_projects set codigo = "0001" where id = 1;

DELETE FROM form_projects;

alter table form_projects auto_increment = 1;

#---------------------------------------

#ENTIDAD Person  =>

SELECT * FROM person;

SELECT * FROM person WHERE id = 1;

DELETE FROM person WHERE id = 1;

UPDATE person set codigo = "0001" where id = 1;

DELETE FROM person;

alter table person auto_increment = 1;

#---------------------------------------

#ENTIDAD Residences  =>

SELECT * FROM residences;

SELECT * FROM residences WHERE id = 1;

DELETE FROM residences WHERE id = 1;

UPDATE residences set codigo = "0001" where id = 1;

DELETE FROM residences;

alter table residences auto_increment = 1;

#---------------------------------------

#ENTIDAD Users  =>

SELECT * FROM users;

SELECT * FROM users WHERE id = 1;

DELETE FROM users WHERE id = 1;

UPDATE users set codigo = "0001" where id = 1;

DELETE FROM users;

alter table users auto_increment = 1;