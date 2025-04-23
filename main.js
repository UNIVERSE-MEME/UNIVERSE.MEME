document.addEventListener("DOMContentLoaded", () => {
  let currentTopic = "";
  let activeFilter = { key: "", value: "" }; // Tracks selected filter

  // === Show Topic Content ===
  function showAdaptation(topic) {
    currentTopic = topic;

    // Highlight selected topic in nav
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    const clicked = document.querySelector(`.nav-item[onclick*="${topic}"]`);
    if (clicked) clicked.classList.add('active');

    // Show original/base content
    document.getElementById("originalTitle").textContent = titles[topic] || "";
    document.getElementById("originalText").innerHTML = adaptedMap[topic]?.base || "";

    // Show + style the adaptive title
    const adaptiveTitle = document.getElementById("adaptiveTitle");
    if (adaptiveTitle) {
      adaptiveTitle.style.display = "block";
      adaptiveTitle.style.color = "#666"; // neutral gray
      adaptiveTitle.textContent = "Adaptive Perspective";
    }

    // Reapply previous filter visually
    if (activeFilter.key && activeFilter.value) {
      document.getElementById(activeFilter.key).value = activeFilter.value;
    }

    updateFromDropdown(); // This will handle adaptedText

    // Animate original content
    const originalText = document.getElementById("originalText");
    originalText.classList.add("fade-in");
    setTimeout(() => {
      originalText.classList.remove("fade-in");
    }, 700);
  }

  // === Filter Change Logic ===
  function updateFromDropdown(changedId = null) {
    if (!currentTopic) return;

    const dropdowns = ["age", "emotion", "manipulation", "ideology"];
    const section = adaptedMap[currentTopic] || {};
    let selectedKey = "";

    // If a filter changed, store + clear the others
    if (changedId) {
      activeFilter.key = changedId;
      activeFilter.value = document.getElementById(changedId).value;

      dropdowns.forEach(id => {
        const el = document.getElementById(id);
        if (id !== changedId) {
          el.value = "";
          el.classList.remove("active-filter");
        }
      });

      // Highlight selected filter if valid
      if (activeFilter.value) {
        document.getElementById(changedId).classList.add("active-filter");
      } else {
        document.getElementById(changedId).classList.remove("active-filter");
      }
    }

    // Apply content if valid
    if (activeFilter.value && section[activeFilter.value]) {
      selectedKey = activeFilter.value;
    }

    const adaptedText = document.getElementById("adaptedText");
    const adaptiveTitle = document.getElementById("adaptiveTitle");

    if (adaptedText) {
      adaptedText.innerHTML = selectedKey
        ? section[selectedKey]
        : `<span class="highlight-orange">Choose a filter to explore how meaning shifts — even “Elementary” holds profound truths.</span>`;

      adaptedText.classList.add("fade-in");
      setTimeout(() => adaptedText.classList.remove("fade-in"), 700);
    }

    if (adaptiveTitle) {
      adaptiveTitle.textContent = selectedKey
        ? (titles[currentTopic] || "Adaptive Perspective")
        : "Adaptive Perspective";
      adaptiveTitle.style.color = "#666"; // keep neutral gray
    }
  }

  // === Expose to Global Scope ===
  window.showAdaptation = showAdaptation;
  window.updateFromDropdown = updateFromDropdown;
});
