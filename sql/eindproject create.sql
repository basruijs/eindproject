create database eindproject

create table userprofile(
	username varchar(255) notnull,
	email varchar(255) primary key,
	pwd varchar(255) notnull,
	avatar varchar(255)
);

create table task(
	taskname varchar(255) notnull,
	category varchar(255) notnull,
	taskid int primary key,
	deadline date,
	deadlinetime time,
	status smallint
);


create table website(
	websitename varchar(255) notnull,
	url varchar(255) primary key,
	description varchar(255),
	clicks int,
	icon varchar(255)
)