<template>
  <body style="background: linear-gradient(to right, #01070ea9, #015892), url('@/assets/images/Leonardo_Diffusion_XL_A_stunning_African_woman_with_a_light_co_2.jpg'); padding-bottom: 36px;">
    <div class="wrapper">
    <div class="container">
        <div class="container_content_top d-flex justify-content-between align-items-center">
            <div class="container_content_top_left">
                <img :src="Logo" alt="Abdou TIDJANI-SERPOS" class="img-fluid" style="width: 100px;">        
            </div>
            <div class="container_content_top_right">
                <ul class="list-unstyled d-flex mb-0">
                    <li class="me-3 mt-2" style="cursor: pointer;" @mouseover="hoverItem" @mouseleave="unhoverItem">A propos de nous</li>
                    <li class="me-3 mt-2" style="cursor: pointer;" @mouseover="hoverItem" @mouseleave="unhoverItem">Contact</li>
                    <button class="me-3 btn btn-danger rounded-pill" style="cursor: pointer;"><span>Commencer la visite</span></button>
                </ul>
            </div>
        </div>
        <div class="container_content_middle d-flex justify-content-between align-items-center mt-4">
          <div class="content d-flex align-item-center justify-content-center">
            <div class="women">
              <img :src="Women" alt="Portrait de belle femme nigériane en tenue traditionnelle" class="img-fluid">
            </div>
            <div class="content_text">
              <p>
                Bienvenue dans l'univers du musée <span>Abdou TIDJANI-SERPOS</span>, un musée qui a beaucoup à offrir. Attachez solidement vos ceintures et laissez-vous simplement transporter à travers une visite épique.
              </p>
              <button class="btn btn-danger rounded-pill">C'est Parti!</button>
            </div>
          </div>
        </div>
    </div>
  </div>
  </body>
  
</template>

<script setup lang="ts">
import Logo from '@/assets/images/logoAbdu-removebg-preview.png'
import Women from '@/assets/images/Leonardo_Diffusion_XL_A_stunning_African_woman_with_a_light_co_2-removebg-preview.png'

const hoverItem = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  target.style.color = 'red'; // Change la couleur du texte
  target.style.borderBottom = '2px solid red'; // Ajoute une bordure rouge en dessous
}

const unhoverItem = (event: MouseEvent) => {
  const target = event.target as HTMLElement;
  target.style.color = ''; // Rétablit la couleur du texte par défaut
  target.style.borderBottom = ''; // Retire la bordure
}
</script>

<style scoped>
*{
  color: whitesmoke;
}
button{
  font-weight: bold;
}

.container_content_middle {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px; /* Espacement entre les éléments */
  padding: 70px; /* Espacement en haut */
  border: 1px solid rgb(7, 119, 247);
  border-radius: 40px;
  box-shadow: 1px 1px 1px 1px;
}

.container_content_middle button{
  font-size: 20px;
  padding: 10px 20px ;
}

.women img {
  max-width: 400px; /* Pour s'assurer que l'image ne dépasse pas de son conteneur */
}

.content_text p {
  margin-bottom: 10px; 
  font-size: 30px;
  font-weight: 900;/* Ajoute un espacement en bas du paragraphe */
}

.content_text p span{
 color: transparent;
    -webkit-text-stroke: .7px white;
    font-size: 30px;
    background-image: linear-gradient(#d3481eec,#f10c0c);
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-position: -10rem 0;
    animation: homeBgText 6s linear infinite;
    animation-delay: 3s;
}

.content_text p span::before{
  content: '';
    top: 0;
    left: 0;
    width: 0;
    position: absolute;
    border-right: .1rem solid #112e42;
    z-index: -1;
    animation: homeCursorText 6s linear infinite;
    animation-delay: 3s;
}

@keyframes homeBgText{
    0%, 10%, 100% {
        background-position: -50rem 0;
    }
    65%, 85%{
        background-position: 0 0; 
    }
}


@keyframes homeCursorText{
    0%, 10%, 100% {
        width: 0;
    }
    65%, 78%, 85%{
       width: 100%;
       opacity: 1;
    }

    75%, 81%{
        opacity: 0;
    }
}

@media screen and (max-width: 400px) {
  .container_content_middle {
    flex-direction: column; /* Change la direction de la disposition des éléments en colonne */
    padding: 20px; /* Réduit l'espacement en haut */
  }

  .content_text p {
    font-size: 20px; /* Réduit la taille de la police */
  }

  .content_text p span {
    font-size: 20px; /* Réduit la taille de la police */
  }

  .content_text p span::before {
    display: none; /* Cache le curseur de texte animé */
  }
  
  .container_content_middle button {
    font-size: 16px; /* Réduit la taille de la police du bouton */
    padding: 8px 16px; /* Réduit le rembourrage du bouton */
  }
}

</style>
