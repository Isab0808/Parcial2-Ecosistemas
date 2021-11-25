class Book {

    constructor(book) {

        this.book = book;
    }


    Render = () => {

        let container = document.createElement("div");
        container.className = "book-container";
        let infoContainer = document.createElement("div");
        let bookName = document.createElement("p");
        let starContainer = document.createElement("div");
        starContainer.className = "startContainer";
        let score = document.createElement("p");
        bookName.innerText = this.book.name;
        let total = 0;
        let rateScore = 0;
        let bookScore;

        database.ref("Ratings").child(this.book.id).child("rating").on("value", function (data) {

            total = data.numChildren();
            rateScore = 0;
            data.forEach(function (rate) {

                let value = rate.val();
              
                rateScore = rateScore + value
                let result = rateScore/total
                bookScore = Math.round(result*100)/100;

                if(bookScore==undefined){

                    score.innerHTML= "no ratings" 
                }

                stars.forEach(star=>{

                    star.src="../img/star.svg"
                })
    
                for(let i =0;i<Math.trunc(bookScore);i++){
    
                    stars[i].src="../img/star_filled.svg";
                }
                

            })
            
            score.innerHTML = bookScore;

          

        })


        for (let i = 0; i < 5; i++) {

            let star = document.createElement("img");
            star.classList.add("star");
            star.classList.add("star" + i);
            star.src = "../img/star.svg";
            starContainer.appendChild(star);
        }

        const stars = starContainer.querySelectorAll(".star");
        let rate;

        
      
        stars.forEach(star => {

            star.addEventListener("click", () => {

                
                switch (true) {

                    case star.classList.contains("star0"):

                        rate = 1;
                        
                        break;

                    case star.classList.contains("star1"):
                        rate = 2;
                        break;

                    case star.classList.contains("star2"):
                        rate = 3;
                        break;

                    case star.classList.contains("star3"):
                        rate = 4;
                        break;
                    case star.classList.contains("star4"):
                        rate = 5;
                        break;

                }
                database.ref('Ratings').child(this.book.id).child('rating').push().set(rate);

            

            })

        });

    
        infoContainer.appendChild(bookName);
        infoContainer.appendChild(starContainer);
        container.appendChild(infoContainer);
        container.appendChild(score);

        return container;
       

     
}
}
