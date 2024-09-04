document.addEventListener("DOMContentLoaded", function () {
  const menuCheckbox = document.querySelector("#menu");
  const mobileHeader = document.querySelector(".mobile-header");

  // Function to toggle the "active" class based on checkbox state
  function toggleMenu() {
    if (menuCheckbox.checked) {
      mobileHeader.classList.add("active");
    } else {
      mobileHeader.classList.remove("active");
    }
  }

  // Event listener for checkbox toggle
  menuCheckbox.addEventListener("change", toggleMenu);

  // Function to uncheck the checkbox and remove the "active" class on resize
  function handleResize() {
    if (window.innerWidth > 880) {
      menuCheckbox.checked = false;
      mobileHeader.classList.remove("active");
    }
  }

  // Event listener for window resize
  window.addEventListener("resize", handleResize);

  // Initial check on page load
  handleResize();
});
$(document).ready(function () {
  // Function to start animation when section is in view
  function startCounterAnimation(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $("#start .counter:not(.animated)").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");

          $({ countNum: $this.text() }).animate(
            {
              countNum: countTo,
            },
            {
              duration: 3000,
              easing: "linear",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
                //alert('finished');
              },
            }
          );
          $this.addClass("animated"); // Mark the counter as animated to avoid repetition  animate?
        });

        // Unobserve the target once animation is triggered
        observer.unobserve(entry.target);
      }
    });
  }

  // Create an intersection observer
  const observer = new IntersectionObserver(startCounterAnimation, {
    threshold: 0.5,
  });

  // Observe the counting section
  observer.observe(document.querySelector("#start"));
});

// toggle products and language

document.addEventListener("DOMContentLoaded", function () {
  const dropdowns = document.querySelectorAll(".dropdown-here");

  dropdowns.forEach((dropdown) => {
    const dropdownContainer = dropdown.querySelector(
      ".dropdown-container, .language-dropdown-container"
    );

    // Hover for desktop
    dropdown.addEventListener("mouseenter", () => {
      dropdownContainer.style.display = "block";
    });

    dropdown.addEventListener("mouseleave", () => {
      dropdownContainer.style.display = "none";
    });

    // Click for mobile
    dropdown
      .querySelector("a, .language-button")
      .addEventListener("click", (e) => {
        e.preventDefault();
        // const isDisplayed = dropdownContainer.style.display === "block";
        // dropdownContainer.style.display = isDisplayed ? "none" : "block";
        dropdownContainer.classList.toggle("show");
      });
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", (e) => {
    dropdowns.forEach((dropdown) => {
      const dropdownContainer = dropdown.querySelector(
        ".dropdown-container, .language-dropdown-container"
      );
      if (!dropdown.contains(e.target)) {
        dropdownContainer.style.display = "none";
      }
    });
  });
});
