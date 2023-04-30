console.log("Executing Map.js");
console.log(ctx);

function draw_map(map_layer, tiles_w, tiles_h){
  ctx.drawImage(map_layer, 0, 0, tiles_w * TILE_SIZE * SCALE, tiles_h * TILE_SIZE * SCALE);
}

function draw_frame(anim_row = 0, anim_frame = anims.walk_f, map_to_draw = CURR_MAP) {
  ctx.clearRect(0, 0, map_to_draw.map_size.w * TILE_SIZE * SCALE, map_to_draw.map_size.h * TILE_SIZE * SCALE);
  ctx.translate(map_to_draw.map_pos.x, map_to_draw.map_pos.y);

  Object.keys(map_to_draw.map_layers_below_player).forEach(element => {
    draw_map(map_to_draw.map_layers_below_player[element], map_to_draw.map_size.w, map_to_draw.map_size.h);
  });

  player.draw(anim_row, anim_frame);

  Object.keys(map_to_draw.map_layers_above_player).forEach(element => {
    draw_map(map_to_draw.map_layers_above_player[element], map_to_draw.map_size.w, map_to_draw.map_size.h);
  });
}

draw_frame();
