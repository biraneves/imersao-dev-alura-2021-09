var urlCartazes = []; // Lista que armazena as URLs das imagens
var urlImdb = []; // Lista que armazena as URLs para as páginas no IMDB

// Algumas amostras para não começar vazio
urlCartazes = [
  'https://m.media-amazon.com/images/I/A1wnJQFI82L._AC_SY879_.jpg',
  'https://m.media-amazon.com/images/I/713KEd-8jyL._AC_SL1500_.jpg',
  'https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/5/0/508320201013-uau-posters-filmes-a-origem-inception.jpg',
  'https://m.media-amazon.com/images/M/MV5BNTI2YTI0MWEtNGQ4OS00ODIzLWE1MWEtZGJiN2E3ZmM1OWI1XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_FMjpg_UX1000_.jpg',
  'https://m.media-amazon.com/images/M/MV5BMzFkM2YwOTQtYzk2Mi00N2VlLWE3NTItN2YwNDg1YmY0ZDNmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg'
];

urlImdb = [
  'https://www.imdb.com/title/tt0076759/?ref_=tt_mv_close',
  'https://www.imdb.com/title/tt0241527/?ref_=nv_sr_srsg_0',
  'https://www.imdb.com/title/tt1375666/?ref_=nv_sr_srsg_0',
  'https://www.imdb.com/title/tt9777666/?ref_=nv_sr_srsg_0',
  'https://www.imdb.com/title/tt0099785/?ref_=nv_sr_srsg_0'
]

var divLibrary = document.querySelector('div[class="library"]');

// Retira uma mensagem da tela
function hideMessage() {
  document.getElementById("message").innerHTML = "";
}

// Exibe a biblioteca
function showLibrary() {
  divLibrary.innerHTML = ""
  
  // Apresenta a lista de filmes
  for (var i = 0; i < urlCartazes.length; i++) {
    
    divLibrary.innerHTML += '<div class="image"><a href="' + urlImdb[i] + '" target="_blank">' +
      '<img src="' + urlCartazes[i] + 
      '"></a><br><a href="#" onclick="deleteMovie(' + 
      i + ')">Excluir</a></div>';
    
  }
}

// Exclui um filme da lista
function deleteMovie(idMovie) {
  
  if (window.confirm("Confirma a exclusão do filme? Esta ação não pode ser desfeita!")) {
    
    urlCartazes.splice(idMovie, 1);
    urlImdb.splice(idMovie, 1);
    showLibrary();
    
  }
  
}

// Limpa os campos e coloca o cursor no primeiro
function resetFields() {
  
  document.getElementById("poster-url").value = "";
  document.getElementById("imdb").value = "";
  document.getElementById("poster-url").focus();
  
}

// Contém toda a lógica
function saveClick() {
  
  var elementImg = document.getElementById("poster-url"); // Campo com a imagem do cartaz
  var elementImdb = document.getElementById("imdb"); // Campo com a URL da página do IMDB
  
  // Os campos não podem estar vazios
  if (elementImg.value == "" || elementImdb.value == "")
    return;
  
  // Ajusta o endereço da imagem
  var imageUrl = (elementImg.value.substring(0, 4) == "http" ? elementImg.value : "https://" + elementImg.value);
  var imdbUrl = (elementImdb.value.substring(0, 4) == "http" ? elementImdb.value : "https://" + elementImdb.value);
  
  // O filme já está na lista?
  if (urlImdb.indexOf(imdbUrl) >= 0) {
    
    resetFields();
    document.getElementById("message").innerHTML = "Esse filme já está na lista.";
    setTimeout(hideMessage, 2000);
    return;
    
  } else {
    
    urlCartazes.push(imageUrl);
    urlImdb.push(imdbUrl);
    
  }
  
  showLibrary();
  
}

showLibrary();