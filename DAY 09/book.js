let book_seat = "0";
let remaining_seat = "36";
const booked = document.querySelector(".book");
const remaining = document.querySelector(".unbook");
remaining.innerHTML = remaining_seat;
booked.innerHTML = book_seat;


const main = document.querySelector(".main");
main.addEventListener("click",(e)=>{
    let cls = e.target.className;
   
    // alert(booked);

    
    if(cls == "unclick"){
        e.target.classList = "click";
        book_seat = parseInt(book_seat) + 1;
        remaining_seat = parseInt(remaining_seat) - 1;
        // remaining.innerHTML = remaining_seat;
        // booked.innerHTML = book_seat;
    }if(cls == "click"){
        e.target.classList = "unclick";
        book_seat = parseInt(book_seat) - 1;
        remaining_seat = parseInt(remaining_seat) + 1;

    } 
    remaining.innerHTML = remaining_seat;
    booked.innerHTML = book_seat;
   
});
