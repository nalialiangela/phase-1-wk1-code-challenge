// should return ok if the speed is less than or equalto 70
//return demerits points pe speed input > 70
//If demerits point is more than 12 points license suspended

function speedDetector(speedin){
    let response = "";
    if(speedin < 0)
    {
        response = "null";
    }else if(speedin >= 0 && speedin <= 70){
        response = "Ok";
    }else{

        let perPoint = 5;

        let diff = speedin - 70;

        demerits = Math.floor(diff / perPoint);
        if(demerits > 12){
            response = "license suspended" + demerits;
        }
        return response;
    }
}
console.log(speedDetector(98))
