Desarrollo Web Ciclo =>

Tecnologias Aplicadas =>

BackEnd: Java, SpringBoot
FrontEnd: ReactJs, NextJs
DataBase: MySQL

IDE BackEnd - API Rest: Netbeans 14, JDK 11, Framework SpringBoot

Link Figma: https://www.figma.com/file/HQ4JXIl4ehSDOr11BvfIw0/3%C2%BA-Iteraci%C3%B3n-Desktop-%2F-28FEB2023?node-id=0%3A1&t=iKQVjmFLZhpW37fb-1

Link Zeplin: https://app.zeplin.io/project/641178ddfdc6b40f3752ce18

Run migration

mvn clean
mvn flyway:info
mvn flyway:migrate


Para levantar Proyecto en Produccion

Ir a Backend Directory BackEnd/ciclo/ciclo
En caso de que este levantado (EJ que se quiera subir un nuevo cambio)

docker compose stop para bajar todos los containers.

chequeams que este el agente ssh
agregamos la key ssh
ssh-add ~/.ssh/proyecto_ciclo

git pull origin master para bajar los ultimos cambios

Generamos una imagen nueva para el proyecto de Backend
docker build . --no-cache

Levantamos todo el projecto, incluyendo DB/PHPMYADMIN/APP
docker compose up -d


Para Frontend vamos al directorio FrontEnd/app-ciclo
Repetimos pasos docker compose stop para bajar containers

docker compose build nextjs para generar los estaticos del frontend

docker compose up -d para levantar nginx y nextjs