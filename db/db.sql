create table users (
id int(11) not null auto_increment,
name varchar(20) default null,
lastname varchar(20) default null,
address varchar (80) default null,
phone varchar (10) default null,
email varchar(80) default null,
password varchar(16) default null,
isadmin bool default null,
primary key(id)
);

describe users;
select * from users;

insert into users values 
(1, 'Edwin','Nemeguen','Calle 70a sur #91-09',3183904738,'edwin.nemeguen@uniagustiniana.edu.co','753159',false),
(2, 'Fabian','Avila','Calle 70a sur #91-09',3183904739,'edwin.nemeguen@uniagustiniana.edu.co','753159',false),
(3, 'Edwin','Nemeguen','Calle 70a sur #91-09',3183904740,'edwin.nemeguen@uniagustiniana.edu.co','753159',false);

drop table users;

