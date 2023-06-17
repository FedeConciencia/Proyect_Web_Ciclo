FROM maven:3.8.4-openjdk-11-slim AS build

WORKDIR /app
COPY pom.xml .
RUN mvn dependency:go-offline

COPY src ./src
RUN mvn package -DskipTests

FROM adoptopenjdk:11-jre-hotspot

WORKDIR /app
COPY --from=build /app/target/ciclo-0.0.1-SNAPSHOT.jar 0.0.1-SNAPSHOT.jar

CMD ["java", "-jar", "0.0.1-SNAPSHOT.jar"]
