//Like Count
document.addEventListener('DOMContentLoaded', (event) => {
    const likebtn = document.querySelector('#like-button');

    let addLike = () => {
        const likecount = document.getElementById('like-count');
        let currentcount = parseInt(likecount.textContent);
      
        let newcount = currentcount + 1;
      
        likecount.textContent = newcount;
      //Sets like count in loacal storage and will be used to retrive it so it can save
      localStorage.setItem('likecount', newcount);
    }

  let savecount = localStorage.getItem('likecount');

  if (savecount) {
    document.getElementById('like-count').textContent = savecount;
  }
    
    likebtn.addEventListener('click', addLike);
});



//Dislike button
document.addEventListener('DOMContentLoaded', (event) => {
    const dislikebtn = document.querySelector('#dislike-button');

  
    let addDislike = () => {

      
    const dislikecount = document.getElementById('dislike-count');
    let currendislikecount = parseInt(dislikecount.textContent);
      
    let newdislikecount = currendislikecount + 1;
      
    dislikecount.textContent = newdislikecount;

      localStorage.setItem('dislikecount', newdislikecount)
    }

      let savedislikecount = localStorage.getItem('dislikecount');
  
      if (savedislikecount) {
        document.getElementById('dislike-count').textContent = savedislikecount;
      }

  
    dislikebtn.addEventListener('click', addDislike);

});


document.addEventListener('DOMContentLoaded', (event) => {
  const submitbtn = document.querySelector('#sign-now-button');
  let counter = 0; // initialize counter
  let maxsignaturesdisplayed = 3;

  const addSignatures = () => {
    const signatureshere = document.querySelector('.signatures');

    if (counter < maxsignaturesdisplayed) {
      // Get the values from the name and hometown inputs
      const name = document.getElementById('name').value;
      const hometown = document.getElementById('Hometown').value;

      // Puts the values into the signature by creating a new paragraph element /tag
      const newsignature = document.createElement('p');
      newsignature.textContent = `🖊️ ${name} from ${hometown} has signed to help end gun violence.`;

      // Get the signature sections and append the data with the signature container
      signatureshere.appendChild(newsignature);
    } else {
      let additionalSignatures = document.querySelector('.additional-signatures');

      if (!additionalSignatures) {
        additionalSignatures = document.createElement('p');
        additionalSignatures.className = 'additional-signatures';
        signatureshere.appendChild(additionalSignatures);
      }

      additionalSignatures.textContent = `${counter - maxsignaturesdisplayed + 1} other people have signed to help end gun violence.`;
    }

    counter++;
  };

  let validateform = () => {
    let containsErrors = false;
    var petitionInputs = document.getElementById('sign-petition').elements;

    for (let i = 0; i < petitionInputs.length; i++) {
      if (petitionInputs[i].value === '' || petitionInputs[i].value.length < 2) {
        containsErrors = true;
        // adds the error class attribute whenever the input is empty or has less than two characters
        petitionInputs[i].classList.add('error');
      } else {
        containsErrors = false;
        petitionInputs[i].classList.remove('error');
      }
    }

    if (!containsErrors) {
      addSignatures();
      for (let i = 0; i < petitionInputs.length; i++) {
        petitionInputs[i].value = '';
      }
    }

    // Prevents redirect
    event.preventDefault();
  };

  submitbtn.addEventListener('click', validateform);
});

//Animations

document.addEventListener('DOMContentLoaded',(event) => {

  let animation = {

    revealDistance: 150,
    initialOpacity: 0,
    transitionDuration: '2s',
    transitionProperty: 'all',
    transitionTimingFunction: 'ease'

  }


  let revealablecontainers = document.querySelectorAll('.revealable')

    let revealcontainers = () => {

      //loops throuh all of the containers with "revealable"
      for( let i = 0; i < revealablecontainers.length; i++) {
        let windowheight = window.innerHeight;

        //finds tops of container

        let topofcontainer = revealablecontainers[i].getBoundingClientRect().top;

        if (topofcontainer < windowheight - animation.revealDistance) {

          revealablecontainers[i].classList.add('active');



        } else {

          revealablecontainers[i].classList.remove('active');

        }
      }
    }

    
    window.addEventListener('scroll', revealcontainers);
    revealcontainers();

    window.addEventListener('scroll', function() {
      var header = document.querySelector('.header-container');
      var distanceFromTop = header.offsetTop;
      
      if (window.pageYOffset > distanceFromTop) {
        header.classList.add('fixed-header');
      } else {
        header.classList.remove('fixed-header');
      }
    });
  

});




