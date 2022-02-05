$( document ).ready(function() {

    $(".AllCards_list").html('').append(cards.renderListCards(Model.cards.length));

})