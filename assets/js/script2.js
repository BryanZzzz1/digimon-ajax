$(document).ready(function(){
    function obtenerDigimones(){
        $('#obtenerDigimones').click(function(){
            $.ajax({
                url: 'https://digimon-api.vercel.app/api/digimon', type:'GET',
                success: function(data){
                    mostrardigimones(data);
                },
                error: function(error){
                    console.error(error);
                }
            });
        });

    }

    function mostrardigimones(digimones){
        let digimonList ='';
        $.map(digimones, function(digimon){
         let card  =`
            <div class ="col-lg-4 col-md-6 mb-4">
               <div class="card" style="width: 18rem;">
                   <img src="${digimon.img}" class="card-img-top" alt="${digimon.name}">
                   <div class="card-body">
                      <h5 class="card-title">${digimon.name}</h5>
                      <p class="card-text">${digimon.level}</p>
                      <a href="#" class="btn btn-primary">${digimon.type}</a>
                  </div>
              </div>
           </div>   
         `;
            
         
          digimonList = digimonList + card;

        });
        $('#digimonList').html(digimonList);
    }

    obtenerDigimones(); 
});