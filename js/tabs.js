// Get all the tab buttons (returns a list of 4 buttons)
const tabBtns = document.querySelectorAll(".tab-btn");

// Get all the project cards (returns a list of 6 cards)
const cards = document.querySelectorAll(".project__cards");

// Loop through each button and listen for clicks
tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {

    // Step 1: Remove "active" class from ALL buttons
    tabBtns.forEach((item) => item.classList.remove("active"))

    // Step 2: Add "active" class to the button that was clicked
    btn.classList.add("active")

    // Step 3: Read the category from the clicked button
    // Example: if user clicked "Web Design", category = "web-design"
    const category = btn.dataset.category;

    // Step 4: Loop through every card and decide: show or hide?
    cards.forEach((card) => {

      // If user clicked "ALL" -> show every card
      // OR if the cards' category matches the clicked category -> show it
      if(category === "all" || card.dataset.category === category){
        card.style.display = "block";
      }else{
        //Otherwise -> hide the card
        card.style.display = "none"
      }
    });
  });
});