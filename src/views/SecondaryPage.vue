<template>
    <div class="blur-background">
      <div
        class="background-image"
        ref="backgroundImage"
        @mouseover="zoomIn"
        @mouseleave="zoomOut"
      ></div>
      <div class="content">
        <div class="content_middle">
          <div class="content_middle_left">
            <img :src="Women" alt="" />
          </div>
          <div class="content_middle_right">
            <div class="top-buttons">
              <button class="btn btn-danger" @click="changeBackgroundAndPlayAudio(Audio1, Image1)">
                Mots de Bienvenue 1
              </button>
              <button class="btn btn-danger" @click="changeBackgroundAndPlayAudio(Audio2, Image2)">
                Mots de Bienvenue 2
              </button>
              <button class="btn btn-danger" @click="changeBackgroundAndPlayAudio(Audio3, Image3)">
                Mots de Bienvenue 3
              </button>
            </div>
            <div class="bottom-buttons">
              <button class="btn btn-danger" @click="changeBackgroundAndPlayAudio(Audio4, Image4)">
                Mots de Bienvenue 4
              </button>
              <button class="btn btn-danger" @click="changeBackgroundAndPlayAudio(Audio5, Image5)">
                Mots de Bienvenue 5
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import Women from "@/assets/images/Leonardo_Diffusion_XL_A_stunning_African_woman_with_a_light_co_2-removebg-preview.png";
  import Audio1 from "@/assets/songs/Someone to stay - vancouver clinic sleep.mp4"
  import Audio2 from "@/assets/songs/02 - Killing Me To Love You.mp3"
  import Audio3 from "@/assets/songs/03 - Living Water.mp3"
  import Audio4 from "@/assets/songs/04 - Empire.mp3"
  import Audio5 from "@/assets/songs/06 - Lung.mp3"
  import Image1 from "@/assets/images/24197339lpw-24206702-article-jpg_9357418_1250x625.jpg"
  import Image2 from "@/assets/images/musée-bénin.jpeg"
  import Image3 from "@/assets/images/Musee-recade-Benin.jpeg"
  import Image4 from "@/assets/images/phpR3aSJt.jpg"
  import Image5 from "@/assets/images/Porto-Novo-Musée-IbùgbéI-sèbayé-Voici-pourquoi-vous-devez-le-visiter.webp"
  import { ref, type Ref } from "vue";
  
  const isHovered = ref(false);
  let audioPlayer: HTMLAudioElement | null = null;


  
  const zoomIn = () => {
    isHovered.value = true;
  };
  
  const zoomOut = () => {
    isHovered.value = false;
  };
  
const backgroundImage: Ref<HTMLDivElement | null> = ref(null);

    const changeBackgroundAndPlayAudio = (audioPath: string, imagePath: string) => {
  // Vérifier si backgroundImage.value n'est pas null
  if (backgroundImage.value) {
    // Appliquer une transition de fondu
    backgroundImage.value.style.transition = 'background-image 0.5s ease-out';

    // Changer l'image de fond avec transition
    setTimeout(() => {
      backgroundImage.value!.style.backgroundImage = `url(${imagePath})`;
    }, 100); // Déclencher la transition après une courte pause pour que la transition se produise
  }

  // Arrêter l'audio en cours s'il y en a un
  if (audioPlayer && !audioPlayer.paused) {
    audioPlayer.pause();
  }
  
  // Charger et jouer le nouvel audio
  audioPlayer = new Audio(audioPath);
  audioPlayer.play();
};



  </script>
  
  <style scoped>
  .blur-background {
    position: relative;
    height: 100vh;
  }
  
  .background-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("@/assets/images/Musees-du-Benin-le-guide-complet.jpg");
    background-size: cover;
    background-position: center;
    filter: blur(3px);
    z-index: -1;
    transition: transform 0.5s ease;
    transform: scale(1);
  }
  
  .content {
    z-index: 1;
  }
  
  .content_middle {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px;
  }
  
  .content_middle_left img {
    max-width: 100%;
    transition: transform 0.5s ease;
  }
  
  .content_middle_left img:hover {
    transform: scale(1.2);
  }
  
  .content_middle_right {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .top-buttons {
    display: flex;
    gap: 10px;
  }
  
  .bottom-buttons {
    display: flex;
    justify-content: center;
    gap: 10px;
  }
  </style>
  