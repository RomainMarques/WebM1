create database if not exists db_jaar;
use db_jaar;

create table if not exists users (
    id int not null auto_increment,
    username varchar(255) not null,
    password varchar(255) not null,
    primary key (id)
);

create table if not exists user_cart (
    id int not null auto_increment,
    user_id int not null,
    departure_date datetime not null,
    arrival_date datetime not null,
    departure_station varchar(255) not null,
    arrival_station varchar(255) not null,
    primary key (id),
    foreign key (user_id) references users(id)
);

create table if not exists reservations (
    id int not null auto_increment,
    user_id int not null,
    departure_date datetime not null,
    arrival_date datetime not null,
    departure_station varchar(255) not null,
    arrival_station varchar(255) not null,
    date_res date not null,
    primary key (id),
    foreign key (user_id) references users(id)
);

select * from users;
select * from user_cart;
select * from reservations;