const state = {
  health: 100,
  stamina: 100,
  brainrot: 0,
  inventory: ["Rusty wrench", "Single hot pocket", "Trampoline"],
};

const log = document.querySelector("#log");
const form = document.querySelector("#command-form");
const commandInput = document.querySelector("#command");
const quickActions = document.querySelector(".quick-actions");

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function updateHud() {
  document.querySelector("#health").textContent = state.health;
  document.querySelector("#stamina").textContent = state.stamina;
  document.querySelector("#brainrot").textContent = state.brainrot;
  document.querySelector("#inventory").innerHTML = state.inventory.map((item) => `<li>${item}</li>`).join("");
}

function writeLog(message) {
  const entry = document.createElement("p");
  entry.textContent = message;
  log.append(entry);
  log.scrollTop = log.scrollHeight;
}

function rollHack() {
  return Math.floor(Math.random() * 6) + 1;
}

function handleCommand(rawCommand) {
  const command = rawCommand.trim().toLowerCase();
  if (!command) {
    writeLog("The void hears your silence and responds with dial-up noises.");
    return;
  }

  writeLog(`> ${rawCommand}`);

  if (command.includes("look")) {
    state.brainrot = clamp(state.brainrot + 3);
    writeLog("You spot plywood ramps, traffic cones, one emotionally unavailable tutorial goblin, and the Sun doing a smug little wiggle.");
  } else if (command.includes("trampoline")) {
    state.stamina = clamp(state.stamina - 12);
    writeLog("You deploy the trampoline. It squeaks like a shopping cart and launches you six feet upward, spiritually closer to the Sun but physically still cooked.");
  } else if (command.includes("hot pocket") || command.includes("eat")) {
    state.health = clamp(state.health + 8);
    state.brainrot = clamp(state.brainrot + 8);
    state.inventory = state.inventory.filter((item) => item !== "Single hot pocket");
    writeLog("You eat the hot pocket. It is frozen in the middle and molten on the edges, granting +8 Health and +8 Brainrot.");
  } else if (command.includes("flyhack") || command.includes("hack")) {
    const roll = rollHack();
    state.brainrot = clamp(state.brainrot + 15);
    if (roll >= 5) {
      state.stamina = clamp(state.stamina - 20);
      writeLog(`Flyhack roll: ${roll}. You noclip upward for 2.7 seconds before gravity files a complaint.`);
    } else if (roll >= 3) {
      state.health = clamp(state.health - 10);
      writeLog(`Flyhack roll: ${roll}. Physics glitch! Your kneecaps briefly become decorative confetti. -10 Health.`);
    } else {
      state.health = clamp(state.health - 20);
      writeLog(`Flyhack roll: ${roll}. The Anti-Cheat Police spawn in a clown car. -20 Health. They are asking to see your movement license.`);
    }
  } else {
    state.stamina = clamp(state.stamina - 5);
    writeLog(`Yes, and... you attempt "${rawCommand}". The sandbox accepts this nonsense, then makes a concerning metal pipe sound. -5 Stamina.`);
  }

  if (state.health <= 0) {
    state.health = 100;
    state.stamina = 100;
    writeLog("You died and respawned. Loading tip: the Sun is hot because it forgot to turn off RTX.");
  }

  updateHud();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleCommand(commandInput.value);
  commandInput.value = "";
  commandInput.focus();
});

quickActions.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-command]");
  if (!button) return;
  handleCommand(button.dataset.command);
});

writeLog("You ragdoll-spawn into The Flatlands of Beginnings. The Sun is visible, smug, and legally distinct from a final boss.");
writeLog("What do you want to do first?");
updateHud();
