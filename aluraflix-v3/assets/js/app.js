var library = new Library();

var stdMovie01 = new Movie('Star Wars', 'Guerra nas Estrelas', 'https://m.media-amazon.com/images/I/A1wnJQFI82L._AC_SY879_.jpg',
'https://www.imdb.com/title/tt0076759/?ref_=tt_mv_close', 4);
var stdMovie02 = new Movie("Harry Potter and the Sorcerer's Stone", 'Harry Potter e a Pedra Filosofal',
'https://m.media-amazon.com/images/I/713KEd-8jyL._AC_SL1500_.jpg',
'https://www.imdb.com/title/tt0241527/?ref_=nv_sr_srsg_0', 4);
var stdMovie03 = new Movie('Inception', 'A Origem', 
'https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/0/508320201013-uau-posters-filmes-a-origem-inception.jpg',
'https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_0', 5);
var stdMovie04 = new Movie('The Tomorrow War', 'A Guerra do Amanhã',
'https://m.media-amazon.com/images/M/MV5BNTI2YTI0MWEtNGQ4OS00ODIzLWE1MWEtZGJiN2E3ZmM1OWI1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg',
'https://www.imdb.com/title/tt9777666/?ref_=nv_sr_srsg_0', 4);
var stdMovie05 = new Movie('Home Alone', 'Esqueceram de Mim',
'https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
'https://www.imdb.com/title/tt0099785/?ref_=nv_sr_srsg_0', 3);

library.addMovie(stdMovie01);
library.addMovie(stdMovie02);
library.addMovie(stdMovie03);
library.addMovie(stdMovie04);
library.addMovie(stdMovie05);