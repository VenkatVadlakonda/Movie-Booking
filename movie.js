const movies = [
  {
    id: 1,
    name: "Chaava",
    genre: "Drama",
    ageRestriction: 13,
    posterUrl: "./assests/chaava.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },
  {
    id: 2,
    name: "RRR",
    genre: "Action",
    ageRestriction: 16,
    posterUrl: "./assests/rrr-movie-poster.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },
  {
    id: 3,
    name: "Bhaubali",
    genre: "Drama",
    ageRestriction: 13,
    posterUrl: "./assests/Bhahubali.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },
  {
    id: 4,
    name: "Baktha Prahladha",
    genre: "Action",
    ageRestriction: 2,
    posterUrl: "./assests/Bp.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },
  {
    id: 5,
    name: "Dragon",
    genre: "Comedy",
    ageRestriction: 18,
    posterUrl: "./assests/Dragon.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },
  {
    id: 6,
    name: "EvilDead",
    genre: "Horror",
    ageRestriction: 18,
    posterUrl: "./assests/Evildead.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },
  {
    id: 7,
    name: "Hridayam",
    genre: "Romance",
    ageRestriction: 12,
    posterUrl: "./assests/Hridayam.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },
  {
    id: 8,
    name: "Ibbani Tabbidal Ileyali",
    genre: "Romance",
    ageRestriction: 12,
    posterUrl: "./assests/IbbaniTabbidaIleyali.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },
  {
    id: 9,
    name: "Identity",
    genre: "Thriller",
    ageRestriction: 16,
    posterUrl: "./assests/Identity_Malayalam_Movie_Poster.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },
  {
    id: 10,
    name: "Interseller",
    genre: "Sci-Fi",
    ageRestriction: 15,
    posterUrl: "./assests/Interseller.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },
  {
    id: 11,
    name: "Jai Hanuman",
    genre: "Mythology",
    ageRestriction: 10,
    posterUrl: "./assests/jai-Hanuman-Article.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },

  {
    id: 12,
    name: "Jathiratnalu",
    genre: "Comedy",
    ageRestriction: 16,
    posterUrl: "./assests/Jathiratnalu.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },
  {
    id: 13,
    name: "Kaithi",
    genre: "Action",
    ageRestriction: 16,
    posterUrl: "./assests/Kaithi_2019_poster.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },
  {
    id: 14,
    name: "Kalki 2989 AD",
    genre: "Mythology",
    ageRestriction: 10,
    posterUrl: "./assests/kalki.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },
  {
    id: 15,
    name: "Little Krishna",
    genre: "Mythology",
    ageRestriction: 1,
    posterUrl: "./assests/littlekrishna.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },
  {
    id: 16,
    name: "Rangasthalam",
    genre: "Drama",
    ageRestriction: 11,
    posterUrl: "./assests/rangasthalam.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },
  {
    id: 17,
    name: "Sookshmadarshini",
    genre: "Thriller",
    ageRestriction: 5,
    posterUrl: "./assests/Sookshmadarshini.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },
  {
    id: 18,
    name: "TopGun",
    genre: "Sci-Fi",
    ageRestriction: 16,
    posterUrl: "./assests/TopGun'.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },
  {
    id: 19,
    name: "Train to Busan",
    genre: "Horror",
    ageRestriction: 18,
    posterUrl: "./assests/traintobusan.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },
  {
    id: 20,
    name: "Vikram",
    genre: "Thriller",
    ageRestriction: 18,
    posterUrl: "./assests/vikram.jpg",
    showTime: ["10:00 AM", "3:00 PM", "7:00 PM", "9:00 PM"],
  },
];

const searchInput = document.getElementById("searchInput");
const bookShow = document.getElementById("bookShow");
const movieContent = document.getElementById("movieContent");
const loginBtn = document.getElementById("login");
const loginModal = document.getElementById("loginModal");
const closeLoginModal = document.getElementById("closeLoginModal");
const submitLogin = document.getElementById("submitLogin");
const usernameInput = document.getElementById("username");
const dobLogin = document.getElementById("dobLogin");
const passwordInput = document.getElementById("password");
const confirmation = document.getElementById("confirmation");
const bookingModal = document.getElementById("bookingModal");
const closeBookingModal = document.getElementById("closeBookingModal");
const bookingUsername = document.getElementById("bookingUsername");
const bookingMovie = document.getElementById("bookingMovie");
const bookingTime = document.getElementById("bookingTime");

let isLoggedIn = false;
let currentMovies = movies;

function displayMovies(moviesList) {
  movieContent.innerHTML = "";
  moviesList.slice(0, 10).forEach((data) => {
    const div = document.createElement("div");
    div.classList.add("movie-card");
    div.innerHTML = `
    <img src="${data.posterUrl}" alt="${data.name}">
    <h2 class="movie-title">${data.name}</h2>
    <select class="select-time">
      <option value="">Select Time</option>
      ${data.showTime
        .map((time) => `<option value="${time}">${time}</option>`)
        .join("")}
    </select>
    <button class="book-btn">Book Now</button>
    `;
    movieContent.appendChild(div);

    div.querySelector(".book-btn").addEventListener("click", () => {
      if (!isLoggedIn) {
        alert("Please login first.");
      } else {
        const selectedTime = div.querySelector(".select-time").value;
        if (!selectedTime) {
          alert("Please select a showtime.");
          return;
        }
        showBookingDetails(data.name, selectedTime);
      }
    });
  });
}

function showBookingDetails(movieName, time) {
  const username = usernameInput.value;
  bookingUsername.innerText = username;
  bookingMovie.innerText = movieName;
  bookingTime.innerText = time;

  bookingModal.style.display = "block";
}

loginBtn.addEventListener("click", () => {
  if (isLoggedIn) {
    isLoggedIn = false;
    loginBtn.textContent = "Login";
    bookShow.style.display = "block";
    window.location.reload();
    usernameInput.value = "";
    dobLogin.value = "";
    passwordInput.value = "";
  } else {
    loginModal.style.display = "block";
  }
});

closeLoginModal.addEventListener("click", () => {
  loginModal.style.display = "none";
});
closeBookingModal.addEventListener("click", () => {
  bookingModal.style.display = "none";
});

submitLogin.addEventListener("click", () => {
  const username = usernameInput.value;
  const dob = new Date(dobLogin.value);
  const password = passwordInput.value;

  if (!username || !dob || !password) {
    alert("Please fill in all fields.");
    return;
  }

  if (username.length < 4 || password.length < 4) {
    alert("Username and Password should have at least 4 characters.");
    return;
  }

  const age = new Date().getFullYear() - dob.getFullYear();

  if (age < 2) {
    alert("You are not eligible fro all this Movies");
  }

  isLoggedIn = true;
  loginBtn.textContent = "Logout";

  loginModal.style.display = "none";

  currentMovies = movies.filter((movie) => age >= movie.ageRestriction);
  displayMovies(currentMovies);

  alert("Login successful");
});

searchInput.addEventListener("input", () => {
  const search = searchInput.value.toLowerCase();
  let filteredMovies;

  if (isLoggedIn) {
    filteredMovies = currentMovies.filter((data) =>
      data.name.toLowerCase().includes(search)
    );
  } else {
    filteredMovies = movies.filter((data) =>
      data.name.toLowerCase().includes(search)
    );
  }

  displayMovies(filteredMovies);
});

displayMovies(movies);
