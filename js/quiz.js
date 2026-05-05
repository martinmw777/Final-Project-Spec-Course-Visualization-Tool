// Quiz scoring object: each answer adds one point to a matching ACC program.
document.getElementById("majorQuiz").addEventListener("submit", function(event) {
  event.preventDefault();

  const scores = {
    animation: 0,
    cit: 0,
    network: 0,
    cyber: 0,
    data: 0,
    game: 0,
    themed: 0,
    ux: 0,
    web: 0
  };

  for (let i = 1; i <= 10; i++) {
    const answer = document.getElementById("q" + i).value;
    scores[answer]++;
  }

  let topMajor = "";
  let topScore = 0;

  for (const major in scores) {
    if (scores[major] > topScore) {
      topMajor = major;
      topScore = scores[major];
    }
  }

  const majorNames = {
    animation: "Animation and Visual Effects",
    cit: "Computer and Information Technology",
    network: "Computing Infrastructure and Network Engineering Technology",
    cyber: "Cybersecurity",
    data: "Data Analytics, Technologies, and Applications",
    game: "Game Development",
    themed: "Themed Entertainment Design",
    ux: "UX Design",
    web: "Web Programming and Design"
  };

  const resultMessages = {
    animation: "This fits you because you chose creative production, visual effects, and 3D graphics interests.",
    cit: "This fits you because you chose broad IT systems, databases, and organizational technology interests.",
    network: "This fits you because you chose networks, infrastructure, cloud systems, and technical troubleshooting.",
    cyber: "This fits you because you chose security, incident investigation, and protecting systems.",
    data: "This fits you because you chose analytics, dashboards, data patterns, and machine learning topics.",
    game: "This fits you because you chose games, simulations, interactive media, and playable projects.",
    themed: "This fits you because you chose immersive attractions, exhibits, and themed experience design.",
    ux: "This fits you because you chose human-centered design, research, usability, and product experiences.",
    web: "This fits you because you chose websites, coding, interactive pages, and web application development."
  };

  document.getElementById("resultText").textContent = majorNames[topMajor] + " — " + resultMessages[topMajor];
  document.getElementById("resultBox").classList.remove("d-none");
  document.getElementById("resultBox").scrollIntoView({ behavior: "smooth" });
});
