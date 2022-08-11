
    //ratings logic
    let ratings = document.querySelectorAll(".rating");
    let selectedRating = document.querySelector(".submitCard__selectedRating");
    let ratingNumber ="";
    ratings.forEach(rating=>{
      rating.addEventListener("click",activeRating);
    })

    function activeRating(){
      ratingNumber=this.dataset.rating;
      ratings.forEach(rating=>{
        rating.classList.remove("active");
      })
      this.classList.add("active");
      selectedRating.innerText = `You selected ${ratingNumber} out of 5`;

    }

    //submit logic
    let submitBtn = document.querySelector("button");
    let ratingCard = document.querySelector(".ratingCard");
    let submitCard = document.querySelector(".submitCard")
    submitBtn.addEventListener('click',submitReview);

    function submitReview(){
      ratingCard.style.display="none";
      submitCard.style.display="flex";
    }

    