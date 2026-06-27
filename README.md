# SunRPG

SunRPG is an open-world, sandbox RPG concept where the ultimate goal is simple and deeply inadvisable: reach the Sun.

The project currently includes:

- `SYSTEM_PROMPT.md`: the Game Master prompt that defines the chaotic GM behavior, world rules, mechanics, and starting scene.
- `index.html`, `styles.css`, and `game.js`: a small browser-based starter scene with a visible world, HUD, inventory, command log, and quick actions.

## Run the starter scene

Open `index.html` directly in a browser, or serve the folder locally:

```bash
python3 -m http.server 8000
```

Then visit <http://localhost:8000/>.

The web starter does not choose for the player. It renders the starting state, accepts commands, and applies lightweight RPG consequences so you can see what you are doing.
