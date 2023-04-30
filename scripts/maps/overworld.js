const overworld = {
  map_layers_below_player: {
    map_ground_filler: document.getElementById("ground_filler"),
    map_ground: document.getElementById("ground"),
    map_grass: document.getElementById("grass"),
    map_structures_below: document.getElementById("structures_below"),
    map_objects_below: document.getElementById("objects_below"),
  },
  map_layers_above_player: {
    map_structures_above: document.getElementById("structures_above"),
    map_objects_above: document.getElementById("objects_above"),
  },
  map_pos: { x: 0, y: 0 },
  map_size: { w: 150, h: 100 },
  map_scale: 3,
  draw_map: function (map_layer, tiles_w, tiles_h) {
    ctx.drawImage(
      map_layer,
      0,
      0,
      tiles_w * TILE_SIZE * this.map_scale,
      tiles_h * TILE_SIZE * this.map_scale
    );
  },
  speak: function () {
    console.log("inside" + this.map_layers_below_player.map_ground_filler);

    // Object.keys(this.map_layers_below_player).forEach(element => {
    //   console.log(this.map_layers_below_player[element]);
    // });
  },
};

// overworld.speak();
