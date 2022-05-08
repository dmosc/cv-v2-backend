DROP DATABASE IF EXISTS personal_cv;
CREATE DATABASE IF NOT EXISTS personal_cv;
USE personal_cv;

CREATE TABLE IF NOT EXISTS `Company` (
`id` INT NOT NULL AUTO_INCREMENT,
`name` VARCHAR(100) NOT NULL,
`logo` VARCHAR(100),
PRIMARY KEY(`id`)
) DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `WorkExperience` (
`id` INT NOT NULL AUTO_INCREMENT,
`company` INT NOT NULL,
`title` VARCHAR(100) NOT NULL,
`description` VARCHAR(1000) NOT NULL,
`start` DATE NOT NULL,
`end` DATE NOT NULL,
PRIMARY KEY(`id`),
FOREIGN KEY(`company`) REFERENCES Company(`id`)
) DEFAULT CHARSET=utf8;

INSERT INTO `Company`
(`name`) VALUES
("Google"),
("Lyft");

INSERT INTO `WorkExperience`
(`company`, `title`, `description`, `start`, `end`) VALUES
(1, "Software Engineer Intern", "Search infrastructure team. Migrated legacy infrastructure for answer boxes within Chrome to a new proposed approach to improve response resolution and dynamic Search Page Response granularity generation.", "2021-08-28", "2021-12-10"),
(2, "Software Engineer Intern", "Built infrastructure to enable reactive marketing campaigns based on user actions/events inside Lyft’s rentals application. The goal was to improve user experience by offering personalized and relevant promotions on a per-user basis based on heuristics established to understand user behavior and goals.", "2021-05-28", "2021-08-25"),
(1, "Software Engineer Intern", "Built a search engine to look through road-regulations documents. The app was built with a micro-services-oriented architecture using Docker and Google Kubernetes Engine. Mainly focused on setting up a PWA using React and a Nodejs backend to integrate external services and process user requests.", "2020-06-06", "2020-08-25");