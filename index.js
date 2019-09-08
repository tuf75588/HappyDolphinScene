const emoteRef = document.querySelector('#dolphin-container')
const halfWidth = 100;
const fullWidth = halfWidth * 2;
console.log('connected!')
const state = {
  position: {
    x: (window.innerWidth / 2) - (emoteRef.clientWidth / 2),
    y: (window.innerHeight / 2) - (emoteRef.clientHeight / 2),
  },
  velocity: {
    x: 1,
    y: 2,
  }
}

function draw() {
  emoteRef.style.top = `${state.position.y}px`
  emoteRef.style.left = `${state.position.x}px`
}

function updatePosition() {
  state.position.x += (state.velocity.x * 4);
  state.position.y += (state.velocity.y * 4);
}
//! collision detection

function bounce() {
  //right edge of screen
  if (state.position.x + emoteRef.clientWidth >= window.innerWidth) {
    state.velocity.x *= -1
  } else if (state.position.x <= 0) {
    state.velocity.x *= -1
  }
  if (state.position.y + emoteRef.clientHeight >= window.innerHeight) {
    state.velocity.y *= -1;
  } else if (state.position.y <= 0) {
    state.velocity.y *= -1
  }
}

function paint() {
  draw();
  updatePosition(');
  bounce()
  requestAnimationFrame(paint)
}
paint()
