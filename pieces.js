 function blueTank(current_position){
    return{
        current_position,
        img:"./ricochet/tank_blue.jpg",
    }
 }
 function redTank(current_position){
    return{
        current_position,
        img:"./ricochet/tank_red.jpg",
    }
}
function blueRicochet(current_position){
    return{
        current_position,
        img:"./ricochet/blue_Ricochet.jpg",
    }
}
function redRicochet(current_position){
    return{
        current_position,
        img:"./ricochet/red_Ricochet.jpg",
    }
}
function redSemi(current_position){
    return{
        current_position,
        img:"./ricochet/red_semiRicochet.jpg",
    }
}
function blueSemi(current_position){
    return{
        current_position,
        img:"./ricochet/blue_semiRicochet.jpg",
    }
}
function blueCanon(current_position){
    return{
        current_position,
        img:"./ricochet/blue_canon.jpg",
    }
}
function redCanon(current_position){
    return{
        current_position,
        img:"./ricochet/red_canon.jpg",
    }
}
 export{blueTank};
 export{redTank};
 export{redRicochet};
 export{blueRicochet};
 export{redSemi};
 export{blueSemi};
 export{blueCanon};
 export{redCanon};