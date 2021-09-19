function Library() {

    this.movies = [];

    this.addMovie = function(movie) {

        this.movies.push(movie);

    }

    this.removeMovie = function(id) {

        this.movies.splice(id, 1);

    }

}