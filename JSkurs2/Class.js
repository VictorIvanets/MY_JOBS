"use strict";


class Card {
    constructor(src, alt, price, oldPrice, type, description, parent){
        this.src=src;
        this.alt=alt;
        this.price=price;
        this.oldPrice=oldPrice;
        this.type=type;
        this.parent=parent;
        this.description=description;
        this.sale=Math.floor((this.price / this.oldPrice) * 100 - 100);
    }


render()
{
    document.querySelector(this.parent).insertAdjacentHTML("beforeend", `
    <div class="card">
                <img class="card_img" src="${this.src}" alt="${this.alt}">
                <div class="card_sale">${this.sale}</div>
                <div class="card_price">
                ${this.price} грн <span class="card_old-Price"><s> ${this.oldPrice} грн </s></span>
                </div>
                <div class="card_type">${this.type}</div>
                <div class="card_descr">${this.description}</div>
            </div>
    `);
}
}


    document.querySelector(".btn").addEventListener('click', ()=> {
        for(let i=0; i<1; i++) {
            new Card
                (
                posision[0], 
                posision[1], 
                posision[2], 
                posision[3], 
                posision[4], 
                posision[5],
                ".cards").render();
            new Card
                (   
                posision2[0], 
                posision2[1], 
                posision2[2], 
                posision2[3], 
                posision2[4], 
                posision2[5],
                ".cards").render();

            new Card
                (   
                posision3.src, 
                posision3.alt, 
                posision3.price, 
                posision3.oldPrice, 
                posision3.type, 
                posision3.description,
                ".cards").render();
        }
   }
    )



    let posision = [    
        `img/cheese-2.jpg`, 
        "chees2", 
        "250", 
        "400", 
        "СКИДКА", 
        "ТОЖЕ ОЧЕНЬ ВКУСНЫЙ"]

    let posision2 = [    
            `img/cheese-3.jpg`, 
            "chees3", 
            "150", 
            "300", 
            "СКИДКА!!", 
            "ОЧЕНЬ ВКУСНЫЙ"]

            let posision3 = {    
                src:`img/cheese-4.jpg`, 
                alt:"chees4", 
                price:"100", 
                oldPrice:"500", 
                type:"СУПЕР СКИДКА!!", 
                description:"ВКУСНЫЙ"}

/*

                let posision = [    
                    `img/cheese-2.jpg`, 
                    "250", 
                    "400", 
                    "chees2", 
                    "250", 
                    "400", 
                    "250", 
                    "400", 
                    "СКИДКА", 
                    "ТОЖЕ ОЧЕНЬ ВКУСНЫЙ"]

const unicN = new Set(posision)
console.log(...unicN)
*/