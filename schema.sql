CREATE TABLE
    admins (
        id int NOT NULL AUTO_INCREMENT primary key,
        email varchar(50) unique,
        password varchar(100)
    );

CREATE TABLE
    appointment_slot (
        id int NOT NULL AUTO_INCREMENT primary key,
        remainingSeats INT (10),
        startTime Time,
        endTime Time,
        appointmentDate date
    );

CREATE TABLE
    appointment_list (
        id int NOT NULL AUTO_INCREMENT primary key,
        name varchar(50),
        email varchar(50) unique,
        sid INT (8) unique,
        slot INT references appointment_slot (id)
    );

INSERT INTO
    appointment_slot (
        remainingSeats,
        startTime,
        endTime,
        appointmentDate
    )
VALUES
    (8, "04:00", "06:00", "2023-10-10"),
    (8, "04:00", "06:00", "2023-10-11"),
    (8, "04:00", "06:00", "2023-10-12"),
    (8, "04:00", "06:00", "2023-10-13");

INSERT INTO
    admins (email, password)
VALUES
    (
        "admin@gmail.com",
        "$2a$10$q7GsfWu5ICuFUSrwUvfZx.Mc6qli8qMPpux0wZ7GbHXOCnV6qreZe"
    );