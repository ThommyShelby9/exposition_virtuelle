<template>
  <body style="background: linear-gradient(to right, #01070ea9, #015892d0)">
    <div class="wrapper" :class="{ loading: isLoading }">
      <div class="container">
        <div
          class="container_content_top d-flex justify-content-between align-items-center"
        >
          <div class="container_content_top_left">
            <img
              :src="Logo"
              alt="Abdou TIDJANI-SERPOS"
              class="img-fluid"
              style="width: 100px"
            />
          </div>
          <div class="container_content_top_right">
            <ul class="list-unstyled d-flex mb-0">
              <li
                class="me-3 mt-2"
                style="cursor: pointer"
                @mouseover="hoverItem"
                @mouseleave="unhoverItem"
              >
                A propos de nous
              </li>
              <li
                class="me-3 mt-2"
                style="cursor: pointer"
                @mouseover="hoverItem"
                @mouseleave="unhoverItem"
              >
                Contact
              </li>
              <a href="/secondary_page">
                <button
                  style="cursor: pointer"
                >
                  <span>Commencer la visite</span>
                </button>
              </a>
            </ul>
          </div>
        </div>
        <div
          class="container_content_middle d-flex justify-content-center align-items-center mt-4"
        >
          <div class="content d-flex align-item-center justify-content-center">
            <span class="loader"></span>
            <div class="women">
              <img
                :src="Women"
                alt="Portrait de belle femme nigériane en tenue traditionnelle"
                class="img-fluid"
              />
            </div>
            <div class="content_text">
              <p>
                Bienvenue dans l'univers du musée
                <span>Abdou TIDJANI-SERPOS</span>, un musée qui a beaucoup à
                offrir. Attachez solidement vos ceintures et laissez-vous
                simplement transporter à travers une visite épique.
              </p>
              <a href="/secondary_page">
                <button>
                  <span>C'est Parti!</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script setup lang="ts">
import Logo from "@/assets/images/logoAbdu-removebg-preview.png";
import Women from "@/assets/images/photo_4_2024-03-05_09-57-57-removebg-preview.png";
import { ref } from "vue";

const hoverItem = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  target.style.color = "red"; // Change la couleur du texte
  target.style.borderBottom = "2px solid red"; // Ajoute une bordure rouge en dessous
};

const unhoverItem = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  target.style.color = ""; // Rétablit la couleur du texte par défaut
  target.style.borderBottom = ""; // Retire la bordure
};

const isLoading = ref(false);

const startLoading = () => {
  isLoading.value = true;
  setTimeout(() => {
    isLoading.value = false;
  }, 4000);
};
</script>

<style scoped>
body {
  background-image: url("@/assets/images/Musees-du-Benin-le-guide-complet.jpg");
  color: whitesmoke;
  font-weight: bold;
}

.wrapper {
  height: 100vh; /* 100% de la hauteur de la fenêtre */
  width: 100%; /* 100% de la largeur de la fenêtre */
}

.container {
  padding: 20px;
}

.container_content_top {
  margin-bottom: 20px;
}

.container_content_middle {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  border-radius: 40px;
  box-shadow: 1px 1px rgb(0, 174, 255);
  padding: 90px;
}

.container_content_middle button {
  font-size: 20px;
  padding: 10px 20px;
}

button {
 outline: none;
 cursor: pointer;
 border: none;
 padding: 0.9rem 2rem;
 margin: 0;
 font-family: inherit;
 font-size: inherit;
 position: relative;
 display: inline-block;
 letter-spacing: 0.05rem;
 font-weight: 700;
 font-size: 17px;
 border-radius: 500px;
 overflow: hidden;
 background: #66ff66;
 color: ghostwhite;
}

button span {
 position: relative;
 z-index: 10;
 transition: color 0.4s;
}

button:hover span {
 color: black;
}

button::before,
button::after {
 position: absolute;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 z-index: 0;
}

button::before {
 content: "";
 background: #000;
 width: 120%;
 left: -10%;
 transform: skew(30deg);
 transition: transform 0.4s cubic-bezier(0.3, 1, 0.8, 1);
}

button:hover::before {
 transform: translate3d(100%, 0, 0);
}


.women img {
  max-width: 250px;
}

.content_text p {
  margin-bottom: 10px;
  font-size: 30px;
}

.content_text p span {
  color: transparent;
  -webkit-text-stroke: 0.7px rgb(7, 196, 243);
  font-size: 30px;
  background-image: linear-gradient(#d3481eec, #f10c0c);
  background-repeat: no-repeat;
  -webkit-background-clip: text;
  background-position: -10rem 0;
  animation: homeBgText 6s linear infinite;
  animation-delay: 3s;
}

.content_text p span::before {
  content: "";
  top: 0;
  left: 0;
  width: 0;
  position: absolute;
  border-right: 0.1rem solid #112e42;
  z-index: -1;
  animation: homeCursorText 6s linear infinite;
  animation-delay: 3s;
}

.loader {
  width: 48px;
  height: 48px;
  border: 3px solid #fff;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
  display: none;
}

.loader::after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 3px solid;
  border-color: #ff3d00 transparent;
}

.wrapper.loading .loader {
  display: block;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@keyframes homeBgText {
  0%,
  10%,
  100% {
    background-position: -50rem 0;
  }
  65%,
  85% {
    background-position: 0 0;
  }
}

@keyframes homeCursorText {
  0%,
  10%,
  100% {
    width: 0;
  }
  65%,
  78%,
  85% {
    width: 100%;
    opacity: 1;
  }
  75%,
  81% {
    opacity: 0;
  }
}

@media (max-width: 767.98px) {
  .container_content_middle {
    flex-direction: column;
    align-items: center;
    gap: 20px;
    border: 1px solid black;
    padding: 30px;
  }
  .women img {
    max-width: 100%;
  }
  .content_text p {
    font-size: 20px;
  }
}
</style>
