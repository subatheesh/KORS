create database KORS;


use KORS;


create table Email_Subscribers(
   email varchar(255) not null primary key,
   subscribed_date datetime);


 create table Contact(
   id int not null auto_increment primary key,
   name varchar(255),
   email varchar(255) not null,
   company varchar(255),
   telephone int(10) not null,
   city varchar(255),
   message varchar(1024) not null,
   message_time datetime);
