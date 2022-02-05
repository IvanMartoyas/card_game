class randomCard {

    constructor() {

        //модель
        this.model = Model.cards;
        this.count_cards = Model.settings.count_card_game;
        this.debug = false;        
    }

    //private находит уровень карты
    getLevelCard() {

        let min = 0;
        let max = 100;
        let level = 0;
        let random = Math.floor(Math.random() * (max - min) + min);

        // level 1
        if (random >= 0 && random <= 50) {
            level = 1;
        }


        // level 1
        if (random >= 50 && random <= 80) {
            level = 2;
        }

        
        // level 1
        if (random >= 80 && random <= 90) {
            level = 3;
        }

        
        // level 1
        if (random >= 90 && random <= 98) {
            level = 4;
        }

        
        // level 1
        if (random >= 98 && random <= 100) {
            level = 5;
        }

        if(this.debug) {
            console.log("         ");
            console.log("     ------------------------    ");
            console.log("getLevelCard level random "+ random);
            console.log("getLevelCard level "+ level);
        }
        

        return level;
    }
    
    //private находит нужную карту в уровне 
    getKindCard() {
    
        let min = 0;
        let max = 100;

        // нахожу уровнеь карты
        let level = this.getLevelCard();

        //  выбираю все карты с этим уровнвем
        let listCards = this.model.filter(item => item.rang === level);

        // максимальное занчение это значение числа всех имеющихся карт данного уровня
        max = listCards.length;

        // получаю номер карты оно используется как индекс массива с выбраными картами
        let random = Math.floor(Math.random() * (max - min) + min);

        if(this.debug) {
            console.log("         ");
            console.log("     ------------------------    ");
            console.log("getKindCard listCards "+ listCards);
            console.log("getKindCard random "+ random);
        }
        
        return listCards[random];

    }

    //publick возвращает список карт в массиве
    returnCurdList(count_cards) {
    
        let cards = [];
    
        for( let i = 0; i < count_cards; i++ ) {
            cards.push(this.getKindCard());
        }
        
        if(this.debug) {
            console.log("         ");
            console.log("     ------------------------    ");
            console.log("returnCurdList cards ", cards);
        }
        
        return cards;

    }

    // рендрит представление 1 карты в html
    render_card(item){ 
        return '<div class="cpl__card" card_id="'+item.id+'"><div class="cpl__wrapper"> <div class="cpl__title">'+item.name+'</div><div class="cpl__description">'+item.description+'</div></div></div>';
    }

    // рендрит представление списка карт в html
    renderListCards(count_cards) {

        let cardsModel = this.returnCurdList(count_cards);
        let cards_wrapper ='';
        let cards ='';

        cardsModel.forEach((card) =>{
            cards += this.render_card(card);
        })

        return cards;
    }


}

cards = new randomCard();
