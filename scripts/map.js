console.log("Executing Map.js");
console.log(ctx);

let map_ground_filler = document.getElementById("ground_filler");
let map_ground = document.getElementById("ground");
let map_grass = document.getElementById("grass");
let map_structures_below = document.getElementById("structures_below");
let map_objects_below = document.getElementById("objects_below");
let map_structures_above = document.getElementById("structures_above");
let map_objects_above = document.getElementById("objects_above");

console.log("inside map.js" + map_ground_filler)
let map_pos = {x: 0, y: 0}
let map_size = {w: 150, h: 100}
let map_scale = 3;
// console.log(map_ground_filler);
// console.log("images loaded");

function draw_map(map_layer, tiles_w, tiles_h){
  ctx.drawImage(map_layer, 0, 0, tiles_w * TILE_SIZE * map_scale, tiles_h * TILE_SIZE * map_scale);
}

function draw_frame(anim_row = 0, anim_frame = anims.walk_f) {
  ctx.clearRect(0, 0, map_size.w * TILE_SIZE * map_scale, map_size.h * TILE_SIZE * map_scale);
  ctx.translate(map_pos.x, map_pos.y);
  Object.keys(overworld.map_layers_below_player).forEach(element => {
    draw_map(overworld.map_layers_below_player[element], map_size.w, map_size.h);
  });
  // draw_map(map_ground_filler, map_size.w, map_size.h);
  // draw_map(map_ground, map_size.w, map_size.h);
  // draw_map(map_grass, map_size.w, map_size.h);
  // draw_map(map_structures_below, map_size.w, map_size.h);
  // draw_map(map_objects_below, map_size.w, map_size.h);
  player.draw(anim_row, anim_frame);
  Object.keys(overworld.map_layers_above_player).forEach(element => {
    draw_map(overworld.map_layers_above_player[element], map_size.w, map_size.h);
  });
  // draw_map(map_structures_above, map_size.w, map_size.h);
  // draw_map(map_objects_above, map_size.w, map_size.h);
}

draw_frame();
