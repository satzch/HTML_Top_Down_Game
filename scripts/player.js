let TILE_SIZE = 16;

const no_of_frames = 4;

const anims =  {
    walk_f: 0,
    walk_b: 4,
    walk_l: 2,
    walk_r: 6
}

let sprite = document.getElementById("player");

const player = {
    speed: 4,
    pos: {x: (viewport_width-TILE_SIZE)/2, y:(viewport_height-TILE_SIZE)/2  },
    anim_row: anims.walk_f,
    anim_frame: 0,
    draw: function(anim_row, anim_frame){
        ctx.drawImage(sprite, anim_frame, anim_row * TILE_SIZE, 16, 16, player.pos.x, player.pos.y, TILE_SIZE*map_scale, TILE_SIZE*map_scale);
    }
}


let direction = anims.walk_f;


for(let i = 0; i < no_of_frames; i++){
    // draw_tile(ctx, sprite, i*TILE_SIZE, direction*TILE_SIZE, char_pos.x, char_pos.y);
}
