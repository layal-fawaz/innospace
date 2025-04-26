
let appointment_section = document.getElementById("appointment");
let button = document.getElementsByClassName("myButton");

button[0].onclick = function () {
  appointment_section.style.display = "flex";
  appointment_section.scrollIntoView({ behavior: "smooth" }); 
};


/*----------------------------------------------------------------*/

let read_more = document.getElementsByClassName("read_more");
let span = document.getElementById('more');

read_more[0].onclick = function () {
  if (span.style.display === "inline") {
    span.style.display = "none";
    read_more[0].innerHTML = "read more";
  } else {
    span.style.display = "inline";
    read_more[0].innerHTML = "less";
  }
};

/*----------------------------------------------------------------*/


let divs = document.querySelectorAll("#explore  .explore > div");

divs.forEach((div) => {
  let buttons = div.querySelectorAll("#explore button");
  let images = div.querySelectorAll("#explore img");
  let paragraphs = div.querySelectorAll(" #explore p");

  buttons.forEach((button) => {
    button.onclick = function () {

      images.forEach((img) => img.classList.add("hidden"));
      paragraphs.forEach((p) => p.classList.add("hidden"));

      images.forEach((img) => {
        if (img.dataset.img === button.id) {
          img.classList.remove("hidden");
        }
      });

      paragraphs.forEach((p) => {
        if (p.dataset.text === button.id) {
          p.classList.remove("hidden");
        }
      });
    };
  });
});

/*----------------------------------------------------------------*/
let img_ideas = document.querySelectorAll('#ideas img'); 
let ideas_div = document.querySelectorAll('.services div'); 

img_ideas.forEach(function(img, index) {
  img.onclick = function() {
    ideas_div[index].style.backgroundColor = '#bca749'; 
  };

  img.ondblclick = function() {
    ideas_div[index].style.backgroundColor = null; 
  };

});
/*----------------------------------------------------------------*/
let select =document.getElementById('select');
let div_filter=document.getElementsByClassName('filter');
let title=document.querySelectorAll('.card h2');
select.onchange = function() {
    if (select.value === div_filter[0].dataset.select) {
        div_filter[0].style.visibility='visible';
        div_filter[0].style.display='block';
        div_filter[1].style.display='none';
        title[0].innerHTML='first idea';
        title[0].style.color=' #ad7a71';
        title[1].style.color=null;

    }

    else if (select.value === div_filter[1].dataset.select) {
      div_filter[1].style.display='block';
      div_filter[0].style.display='none';
      title[1].innerHTML='secoend idea';
      title[1].style.color=' #ad7a71';
      title[0].style.color=null;
  }
};

/*----------------------------------------------------------------*/
let inputs_form = document.querySelectorAll('#form input');
let book_button = document.querySelector('#form .myButton');

book_button.onclick = function () {
  let boolean = false; 
  
  inputs_form.forEach(input => {
    if (input.value === '') {
      boolean = true;
    }
  });

  if (boolean) {
    Swal.fire({
      title: "Missing Fields!",
      text: "Please fill in all required fields before proceeding.",
      icon: "warning",
      confirmButtonText: "OK"
    });
      }

      else{
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "YOUR BOOKING HAS BEEN SUCCESSFULLY COMPLETED!",
          showConfirmButton: false,
          timer: 1500,
          customClass: {
            title: 'small-title'  
          }
        });
      }

      
};

