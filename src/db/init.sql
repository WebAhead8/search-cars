BEGIN;

DROP TABLE IF EXISTS cars,employes;

CREATE TABLE cars (
  carName VARCHAR(255) PRIMARY KEY,
  iconUrl VARCHAR(800),
  industry VARCHAR(255),
  country_flag VARCHAR(800),
  geners TEXT[]
);

CREATE TABLE employes (
  carName VARCHAR(255) REFERENCES cars(carName),
  employeName VARCHAR(255),
  jobTitle VARCHAR(255),
  phone VARCHAR(255),
  email VARCHAR(255)
);


INSERT INTO cars (carName, iconUrl, industry , country_flag , geners) VALUES
(
 'mercedes', 
 'https://banner2.cleanpng.com/20180608/uyc/kisspng-mercedes-benz-slr-mclaren-car-bmw-5b1a5adf1d7134.3663978015284538551206.jpg',
 'germany',
 'https://restcountries.eu/data/deu.svg'
 ,ARRAY['a AMG','b AMG' ,'c AMG','e AMG','s AMG','g AMG','cls AMG','sls AMG']
 ),
 (
'Audi',
'https://freepngimg.com/download/car%20logo/28-audi-car-logo-png-brand-image.png',
'germany',
'https://restcountries.eu/data/deu.svg',
ARRAY['RS1','RS2','RS3','RS4','RS5','RS6','RS7','RS8','RSQ5','RSQ8']
),
(
'BMW',
'https://image.pngaaa.com/796/54796-middle.png',
'germany',
'https://restcountries.eu/data/deu.svg',
ARRAY['M1', 'M2', 'M3', 'M4', 'M5', 'M6', 'M7', 'M8']
),
(
'Alfa romeo',
'https://upload.wikimedia.org/wikipedia/he/8/82/%D7%9C%D7%95%D7%92%D7%95_%D7%90%D7%9C%D7%A4%D7%90_%D7%A8%D7%95%D7%9E%D7%99%D7%90%D7%95.png',
'italy',
'https://restcountries.eu/data/ita.svg',
ARRAY['4C Spider', 'telvio Quadrifoglio', 'Giulia Quadrifoglio']
),

(
'Ferrari',
'https://m.auto.co.il/Attachment/Importers/Ferrari-logo.png',
'italy',
'https://restcountries.eu/data/ita.svg',
ARRAY['Monza SP1','Monza SP2','F8 Tributo','F8 Spider','SF90 Spider','812 GTS','812 Superfast']
),

(
'Porsche',
'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/ec0429cf-1471-466c-b958-f3b1faa7896b/d5zbp88-53f67daa-6117-48c1-9691-2f085658d6b7.png/v1/fill/w_1024,h_1258,strp/porsche_icon_by_slamiticon_d5zbp88-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD0xMjU4IiwicGF0aCI6IlwvZlwvZWMwNDI5Y2YtMTQ3MS00NjZjLWI5NTgtZjNiMWZhYTc4OTZiXC9kNXpicDg4LTUzZjY3ZGFhLTYxMTctNDhjMS05NjkxLTJmMDg1NjU4ZDZiNy5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.qsFg-TCCu4uZs7d4-IJj9nHgWOfkVHTbOQ4mr0ByxBo',
'germany',
'https://restcountries.eu/data/deu.svg',
ARRAY['Porsche 911','718 Cayman GT4','718 Spyder','Taycan Models','Panamera Models','Macan Models','Cayenne Models']
),

(
'Lexus',
'https://image.flaticon.com/icons/png/512/805/805947.png',
'Japan',
'https://restcountries.eu/data/jpn.svg',
ARRAY['IS', 'ES', 'LS', 'UX', 'NX', 'RX', 'GX']
),

(
'Lamborghini',
'https://cdn.iconscout.com/icon/free/png-512/lamborghini-282390.png',
'italy',
'https://restcountries.eu/data/ita.svg',
ARRAY['AVENTADOR', 'HURACAN', 'URUS', 'SIAN FKP 37', 'SIAN ROADSTER']
);



INSERT INTO employes(carName,employeName ,jobTitle ,phone ,email) VALUES
('mercedes','alex','CEO','052-1499672','alex@gmail.com'),
('Audi','martin','CEO','052-1278972','martin445@gmail.com'),
('BMW','ala','CEO','052-1490014','aladdin4@gmail.com'),
('Alfa romeo','diab','archetict','058-4759672','diab89@gmail.com'),
('Ferrari','mario','CEO','053-4876620','mario1998@gmail.com'),
('Porsche','mahmed','CEO','050-0121489','mahmed1994@gmail.com'),
('Lexus','sawaed','project manager','055-1149824','sawaedTheBoss@gmail.com'),
('Lamborghini','dana','CEO','052-1188732','dana159@gmail.com');
COMMIT;