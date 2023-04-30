let anim_speed = 3;
let keymap = {}

function gameLoop(){
    draw_frame(player.anim_row, Math.floor(player.anim_frame/TILE_SIZE)* TILE_SIZE);
    default_values(CURR_MAP);
}

let gameloop = setInterval(gameLoop, 20);
let speed = player.speed;

document.addEventListener('keydown', (e) => {
    // console.log(e.code);
    if(player.anim_frame + 0.5 > (no_of_frames) * TILE_SIZE - 1){
        player.anim_frame = 0;
    }
    if(e.code === "ShiftLeft" || e.code === "ShiftRight"){
        speed = 5;
    }
    if(e.code === "ArrowUp"){
        CURR_MAP.map_pos.y += speed;
        player.pos.y -= speed;
        player.anim_row = anims.walk_b;
    }else if(e.code === "ArrowDown"){
        CURR_MAP.map_pos.y -= speed;
        player.pos.y += speed;
        player.anim_row = anims.walk_f;
    }else if(e.code === "ArrowLeft"){
        CURR_MAP.map_pos.x += speed;
        player.pos.x -= speed;
        player.anim_row = anims.walk_l;
    }else if(e.code === "ArrowRight"){
        CURR_MAP.map_pos.x -= speed;
        player.pos.x += speed;
        player.anim_row = anims.walk_r;
    }else if(e.code === "Escape"){
        clearInterval(gameloop);
    }
    player.anim_frame += anim_speed;
});

document.addEventListener("keyup", (e) => {
    player.anim_frame = 0;
    if(e.code === "ArrowUp"){
        player.anim_frame = 0;
    }else if(e.code === "ArrowDown"){
        player.anim_frame = 0;
    }else if(e.code === "ShiftLeft"){
        speed = player.speed;
    }
});

document.addEventListener("keypress", (e) => {
    
});

function handleEvents(){

}

function default_values(map_to_draw){
    map_to_draw.map_pos.x = 0;
    map_to_draw.map_pos.y = 0;
}

