// const texts = ['make design a accessible skill at Columbia?', ' help Columbia students create recruitment-ready design portfolios?', 'help Columbia students gain practical design experience?','build an inclusive, interdisciplinary community of designers at Columbia?', 'help Columbia students advance career opportunities?', ' help Columbia students build practical design skills?'];
// let count=0;
// let index=0;
// let currentText='';
// let letter= '';


// (function type(){
// 	console.log("working");

// 	if(count ===texts.length){
// 		count=0;
// 	}
// 	currentText = texts[count];
// 	letter = currentText.slice(0, ++index);

// 	document.querySelector(".typing").textContent = letter;
// 	if(letter.length===currentText.length){
// 		count++;
//         index =0;
//     }
    


// 	setTimeout(type, 50);

// }());


class TypeWriter {
    constructor(txtElement, words, wait = 3000) {
      this.txtElement = txtElement;
      this.words = words;
      this.txt = '';
      this.wordIndex = 0;
      this.wait = parseInt(wait, 10);
      this.type();
      this.isDeleting = false;
    }
  
    type() {
      // Current index of word
      const current = this.wordIndex % this.words.length;
      // Get full text of current word
      const fullTxt = this.words[current];
  
      // Check if deleting
      if(this.isDeleting) {
        // Remove char
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
        // Add char
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
  
      // Insert txt into element
      this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;
  
      // Initial Type Speed
      let typeSpeed = 30;
  
      if(this.isDeleting) {
        typeSpeed /= 2;
      }
  
      // If word is complete
      if(!this.isDeleting && this.txt === fullTxt) {
        // Make pause at end
        typeSpeed = this.wait;
        // Set delete to true
        this.isDeleting = true;
      } else if(this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        // Move to next word
        this.wordIndex++;
        // Pause before start typing
        typeSpeed = 30;
      }
  
      setTimeout(() => this.type(), typeSpeed);
    }
  }
  
  
  // Init On DOM Load
  document.addEventListener('DOMContentLoaded', init);
  
  // Init App
  function init() {
    const txtElement = document.querySelector('.txt-type');
    const words = JSON.parse(txtElement.getAttribute('data-words'));
    const wait = txtElement.getAttribute('data-wait');
    // Init TypeWriter
    new TypeWriter(txtElement, words, wait);
  }


