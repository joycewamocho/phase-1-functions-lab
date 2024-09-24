function distanceFromHqInBlocks(blocks){
    let hq = 42;
    return Math.abs(blocks - hq);
}

function distanceFromHqInFeet(blocks){
    const hqPerFeet = 264;
    const distanceInBlocks = distanceFromHqInBlocks(blocks);
    return distanceInBlocks * hqPerFeet;
}

function distanceTravelledInFeet(start, destination ){
    let hqPerFeet = 264
    return Math.abs((destination - start) * hqPerFeet);

}

function calculatesFarePrice(start, destination){
    const feetTraveled =  distanceTravelledInFeet(start, destination );

    if (feetTraveled === 264){
        return 0;
    }else if (feetTraveled > 400 && feetTraveled < 2000){
        const distanceCharged = feetTraveled - 400;
        return  distanceCharged * 0.02;
    } else if (feetTraveled > 2000  && feetTraveled <= 2500){
        return 25;
    } else {
        return "cannot travel that far"
    }
}

