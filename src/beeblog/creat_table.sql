#username:root
#password:root
#dbName:beeblog
CREATE TABLE blog(
	id INT AUTO_INCREMENT,
	title TEXT,
	content TEXT,
	created DATETIME,
	primary key (id)
);