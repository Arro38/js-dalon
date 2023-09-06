//Je déclare la variable user
let users;

const cardContainer = document.querySelector(".card-container");

//Je déclare une fonction
const fetchUser = async () => {
  const result = await fetch("https://randomuser.me/api/?results=12");
  //J'attribue comme valeur à data les résultats de la requête
  const data = await result.json();

  users = data.results;

  //On trie les données pour avoir que les plus jeunes en premier
  users
    //On parcourt le tableau d'utilisateur et chaque utilisateur s'appelle u
    .map((u) => {
      let female = `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                    class="gender"
                    >
                    <path
                    fill-rule="evenodd"
                    d="M9.5 2a.5.5 0 0 1 0-1h5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V2.707L9.871 6.836a5 5 0 1 1-.707-.707L13.293 2H9.5zM6 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"
                    />
                </svg>`;
      if (u.gender === "female") {
        female = `
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
          class="gender"
        >
          <path
            fill-rule="evenodd"
            d="M8 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM3 5a5 5 0 1 1 5.5 4.975V12h2a.5.5 0 0 1 0 1h-2v2.5a.5.5 0 0 1-1 0V13h-2a.5.5 0 0 1 0-1h2V9.975A5 5 0 0 1 3 5z"
          />
        </svg>
      `;
      }

      var date = moment(u.registered.date).fromNow(true);
      var lastIndex = date.lastIndexOf(" ");

      date = date.substring(0, lastIndex);
      cardContainer.innerHTML += `<div class="card">
          <img
            src="${u.picture.thumbnail}"
            alt="photo profil de "
          />
         
          ${female}
          <div class="nomcontainer">
            <span class="prenom">${u.name.first} </span>
            <span class="nom"> ${u.name.last} </span>
          </div>
          <span class="email">${u.email}</span>
          <div class="date">Dalon${
            u.gender === "female" ? "e" : ""
          } depuis ${date} ans </div>
        </div>`;
    });
};
//Je lance la fonction
fetchUser();
