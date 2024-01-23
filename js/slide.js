// Obtienes el id del body
var bodyId = document.body.id;
console.log('Body ID:', bodyId);
// Creas un nuevo elemento 'style'
var style = document.createElement('style');

// Añades la regla @keyframes al elemento 'style'
style.innerHTML = `
  @keyframes animate {
    25% {
        background-image: url(../${bodyId}/img/slide/4.jpg);
    }
    50% {
        background-image: url(../${bodyId}/img/slide/3.jpg);
    }
    75% {
        background-image: url(../${bodyId}/img/slide/2.jpg);
    }
    100% {
        background-image: url(../${bodyId}/img/slide/1.jpg);
    }
  }

  .slide {
    background-size: cover;
    height: 100%;
    width: 100%;
    border-radius: 10px;
    animation: animate 10s infinite;
  }
`;

// Añades el elemento 'style' al documento
document.head.appendChild(style);