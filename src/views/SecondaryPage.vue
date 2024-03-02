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
          <video :src="currentVideo" class="video" ref="videoPlayer"></video>
        </div>
        <div class="content_middle_right">
          <div class="top-buttons">
            <button class="btn btn-danger" @click="changeContent(Image1, Video2)">
              Mots d'ouverture
            </button>
            <button class="btn btn-danger" @click="changeContent(Image2, Video4)">
              Mots de Bienvenue 
            </button>
            <button class="btn btn-danger" @click="changeContent(Image3, Video1)">
              Mots de Bienvenue 2
            </button>
          </div>
          <div class="bottom-buttons">
            <button class="btn btn-danger" @click="changeContent(Image4, Video3)">
              Mots de conclusion
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Video1 from "@/assets/vidéos/VID-20240301-WA0006.mp4"
import Video2 from "@/assets/vidéos/VID-20240301-WA0016.mp4"
import Video3 from "@/assets/vidéos/VID-20240301-WA0020.mp4"
import Video4 from "@/assets/vidéos/VID-20240301-WA0021.mp4"
import Image1 from "@/assets/images/24197339lpw-24206702-article-jpg_9357418_1250x625.jpg"
import Image2 from "@/assets/images/musée-bénin.jpeg"
import Image3 from "@/assets/images/Musee-recade-Benin.jpeg"
import Image4 from "@/assets/images/phpR3aSJt.jpg"
import { ref } from "vue";

const isHovered = ref(false);

const zoomIn = () => {
  isHovered.value = true;
};

const zoomOut = () => {
  isHovered.value = false;
};

const backgroundImage = ref<HTMLDivElement | null>(null);
const videoPlayer = ref<HTMLVideoElement | null>(null);
let currentVideo = Video1; // Set the initial video

const changeContent = (imagePath: string, videoPath: string) => {
  if (backgroundImage.value) {
    backgroundImage.value.style.transition = 'background-image 1.5s ease-out';
    setTimeout(() => {
      backgroundImage.value!.style.backgroundImage = `url(${imagePath})`;
    }, 100);
  }

  
  if (videoPlayer.value) {
    videoPlayer.value.src = videoPath;
    videoPlayer.value.load();
    videoPlayer.value.play();
    currentVideo = videoPath;
  }
  
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

.content_middle_left video {
  max-width: 100%;
  max-height: 70vh; /* Added to prevent video overflow */
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
