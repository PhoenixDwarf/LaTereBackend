use heroku_ce53df1a5b9003a;

create table users (
id int(11) not null auto_increment,
name varchar(20) default null,
lastname varchar(20) default null,
address varchar (80) default null,
neighborhood varchar (80) default null,
phone varchar (10) default null unique,
email varchar(80) default null unique,
password varchar(16) default null,
isadmin bool default null,
primary key(id)
);

describe users;
select * from users;

insert into users values 
(1, 'Edwin','Nemeguen','Calle 70a sur #91-09','Santa Ines',3183904738,'edwin.nemeguen@uniagustiniana.edu.co','75315999',false),
(2, 'Fabian','Avila','Calle 70a sur #91-09','Santa Ines',3183904739,'edwin.nemeguen@uniagustiniana1.edu.co','75315999',false),
(3, 'Edwin','Nemeguen','Calle 70a sur #91-09','Santa Ines',3183904740,'edwin.nemeguen@uniagustiniana2.edu.co','75315999',false);

insert into users values 
(4, 'ADMIN','ADMIN','ADMIN','ADMIN',1111111111,'admin@admin.admin','123456789',true);

alter table users add securityq varchar(80) default null;
alter table users add securityqnumber int(10) default null;

delete from users where id = 4;
drop table users;

