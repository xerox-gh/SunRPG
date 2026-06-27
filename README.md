# SunRPG

SunRPG is an open-world, sandbox RPG concept where the ultimate goal is simple and deeply inadvisable: reach the Sun.

The project currently includes:

- `SYSTEM_PROMPT.md`: the Game Master prompt that defines the chaotic GM behavior, world rules, mechanics, and starting scene.
- `sunrpg_gm.py`: a tiny CLI launcher that prints the title screen, starting setup, and initial tracked status for a new session.

## Run the starter scene

```bash
python3 sunrpg_gm.py
```

The CLI does not automate player choices; it presents the opening state and waits for the player to decide what to do first.
