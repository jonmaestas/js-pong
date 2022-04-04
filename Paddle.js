let SPEED = 0.015

export default class Paddle {
  constructor(paddleElem) {
    this.paddleElem = paddleElem
    this.reset()
  }

  get position() {
    return parseFloat(
      getComputedStyle(this.paddleElem).getPropertyValue("--position")
    )
  }

  set position(value) {
    this.paddleElem.style.setProperty("--position", value)
  }

  rect() {
    return this.paddleElem.getBoundingClientRect()
  }

  reset() {
    this.position = 50
  }

  faster() {
    SPEED *= 1.15
  }

  slower() {
    SPEED = Math.min(SPEED * 0.85, .00001)
  }

  update(delta, ballHeight) {
    this.position += SPEED * delta * (ballHeight - this.position)
  }
}
