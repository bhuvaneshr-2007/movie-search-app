async function searchMovie() {

  const movieName =
    document.getElementById("movieInput").value;

  const apiKey = "564727fa";

  const url =
    `https://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`;

  const response = await fetch(url);

  const data = await response.json();

  const movieContainer =
    document.getElementById("movieContainer");

  movieContainer.innerHTML = `
  
    <div class="movie-card">

      <img src="${data.Poster}" alt="Movie Poster">

      <h2>${data.Title}</h2>

      <p><b>Year:</b> ${data.Year}</p>

      <p><b>Genre:</b> ${data.Genre}</p>

      <p><b>IMDB Rating:</b> ${data.imdbRating}</p>

      <p>${data.Plot}</p>

    </div>

  `;
}