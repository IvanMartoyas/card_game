
function start_game() {

    let anemy_cards = cards.renderListCards(10);

    return '<div class="wrapper"><div class="card_player_fight"><div class="card_player_fight_fild"></div></div><div class="card_player_gamer"><div class="card_player_list scroll cpl">'+cards.renderListCards(10)+'</div> </div></div>';
}

$( document ).ready(function() {


    $(document).on( "click", '.card_player_gamer .cpl__card', function() {
        
        let id = $(this).attr('card_id');
        let cards_man = Model.cards;
        let card;

        cards_man.filter(function(item){
              if(item.id == id) {
                card = item;
              }             
        });

        $(".card_player_fight_fild").append(cards.render_card(card));

    });

    $("#selet_cards").click(function(){

    
        $(".card_player_list").html('').append(cards.renderListCards(10));
       
        $("#selet_cards").html("Перевыбрать карты");

        $("#start_game").fadeIn();
    });
    
    $("#start_game").click(function(){
        $(".game").append(start_game())
        $(".game").fadeIn();
    });


    
});

