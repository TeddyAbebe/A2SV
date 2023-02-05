/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
  const n = position.length;
  let cars = [];
  for (let i = 0; i < n; i++) {
    cars.push({ pos: position[i], speed: speed[i] });
  }
  cars.sort((a, b) => b.pos - a.pos);
  let fleets = 0;
  let t = 0;
  for (let i = 0; i < n; i++) {
    if (t === 0 || (target - cars[i].pos) / cars[i].speed > t) {
      fleets++;
      t = (target - cars[i].pos) / cars[i].speed;
    }
  }
  return fleets;
};
