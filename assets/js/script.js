const obtenerdigimonpromesas =()=>{
    return new Promise((resolve,reject)=>{
       fetch('https://digimon-api.vercel.app/api/digimon')
       .then((digimones)=>{
        if(!digimones.ok){
            throw error('error en entregar los digimones')
        }
        return digimones.json();

       })
       .then((data)=>{
        resolve(data);

       })
       .catch((error)=>{
        console.log(`el error: ${error}`);
       })

    });
}
    