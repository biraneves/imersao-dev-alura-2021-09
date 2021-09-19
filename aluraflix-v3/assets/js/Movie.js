function Movie(originalName, brazilianName, poster, imdb, rate) {

    this.originalName = originalName;
    this.brazilianName = brazilianName;
    this.poster = (poster.substring(0, 4) == "http" ? poster : "https://" + poster);
    this.imdb = (imdb.substring(0, 4) == "http" ? imdb : "https://" + imdb);
    
    if (rate < 0 || rate > 5)
        this.rate = 0;
    else
        this.rate = parseInt(rate);
    
    this.show = function() {

        showString = '<a href="' + this.imdb + '" target="_blank">' +
            '<img src="' + this.poster + "'></a>" +
            '<p class="movie-title">' + this.originalName + '<br>(' +
            this.brazilianName + ')</p>';
        
        return showString;

    }

}