CREATE PROCEDURE UserAddOrEdit (
in _id int,
in _name varchar(20),
in _lastname varchar(20),
in _address varchar (80),
in _phone varchar (10),
in _email varchar(80),
in _password varchar(16)
)
BEGIN
if _id = 0 then
	insert into users ( name, lastname, address, phone, email, password)
    values (_name, _lastname, _address, _phone, _email, _password);
    set _id = LAST_INSERT_ID();
else	
	update users set
		name = _name,
        lastname = _lastname,
        address = _address,
        phone = _phone,
        email = _email,
        password = _password
	where id = _id;
end if;

select _id as id;

END
