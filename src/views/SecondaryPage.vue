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
              Mots d'ouverture
            </button>
            <button class="btn btn-danger" @click="changeBackgroundAndPlayAudio(Audio2, Image2)">
              Mots de Bienvenue 
            </button>
            <button class="btn btn-danger" @click="changeBackgroundAndPlayAudio(Audio3, Image3)">
              Mots de Bienvenue 2
            </button>
          </div>
          <div class="bottom-buttons">
            <button class="btn btn-danger" @click="changeBackgroundAndPlayAudio(Audio4, Image4)">
              Mots de conclusion
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Women from "@/assets/images/Leonardo_Diffusion_XL_A_stunning_African_woman_with_a_light_co_2-removebg-preview.png";
import Audio1 from "@/assets/songs/AUD-20240227-WA0002.m4a"
import Audio2 from "@/assets/songs/AUD-20240227-WA0004.m4a"
import Audio3 from "@/assets/songs/AUD-20240227-WA0005.m4a"
import Audio4 from "@/assets/songs/AUD-20240227-WA0006.m4a"
import Image1 from "@/assets/images/24197339lpw-24206702-article-jpg_9357418_1250x625.jpg"
import Image2 from "@/assets/images/musée-bénin.jpeg"
import Image3 from "@/assets/images/Musee-recade-Benin.jpeg"
import Image4 from "@/assets/images/phpR3aSJt.jpg"
import { ref } from "vue";

const isHovered = ref(false);
let audioPlayer: HTMLAudioElement | null = null;

const zoomIn = () => {
  isHovered.value = true;
};

const zoomOut = () => {
  isHovered.value = false;
};

const backgroundImage = ref<HTMLDivElement | null>(null);

const changeBackgroundAndPlayAudio = (audioPath: string, imagePath: string) => {
  if (backgroundImage.value) {
    backgroundImage.value.style.transition = 'background-image 0.5s ease-out';
    setTimeout(() => {
      backgroundImage.value!.style.backgroundImage = `url(${imagePath})`;
    }, 100);
  }

  if (audioPlayer && !audioPlayer.paused) {
    audioPlayer.pause();
  }
  
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
  flex-direction: column; /* Adjusted for responsive layout */
  align-items: center;
  padding: 20px; /* Adjusted for smaller screens */
}

.content_middle_left img {
  max-width: 100%;
  transition: transform 0.5s ease;
}

.content_middle_left img:hover {
  transform: scale(1.1);
}

.content_middle_right {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px; /* Adjusted for smaller screens */
}

.top-buttons {
  display: flex;
  flex-wrap: wrap; /* Adjusted for smaller screens */
  justify-content: center;
  gap: 10px;
}

.bottom-buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>

