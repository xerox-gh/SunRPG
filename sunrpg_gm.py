"""CLI starter scene for SunRPG."""

from __future__ import annotations

STARTING_STATUS = {
    "Health": "100/100",
    "Stamina": "100/100",
    "Brainrot Meter": "0/100",
}

STARTING_LOCATION = "The Flatlands of Beginnings"
STARTING_INVENTORY = ["Rusty wrench", "Single hot pocket", "Trampoline"]


def render_status_block() -> str:
    """Return the initial player status block."""
    status_lines = "\n".join(f"- {key}: {value}" for key, value in STARTING_STATUS.items())
    inventory_lines = "\n".join(f"- {item}" for item in STARTING_INVENTORY)
    return (
        "## Current Status\n"
        f"{status_lines}\n\n"
        f"## Location\n- {STARTING_LOCATION}\n\n"
        "## Inventory\n"
        f"{inventory_lines}"
    )


def render_intro() -> str:
    """Return the SunRPG opening screen and first prompt."""
    return f"""
╔════════════════════════════════════════════════════╗
║   S U N R P G:  TOUCH GRASS, THEN TOUCH PLASMA   ║
║        no refunds • no tutorials • no chill       ║
╚════════════════════════════════════════════════════╝

The Sun squats in the skybox like an overconfident JPEG, radiating smugness.

You ragdoll-spawn into {STARTING_LOCATION}, a suspiciously flat expanse of grass,
plywood ramps, traffic cones, and one tutorial sign that reads: "Press W to regret."

A distant NPC yells, "FIRST ONE TO THE SUN GETS MODERATOR," then immediately trips over
an invisible wall and begins T-posing for medical attention.

What do you want to do first?

{render_status_block()}
""".strip()


def main() -> None:
    """Print the opening scene and wait for player input."""
    print(render_intro())
    input("\n> ")


if __name__ == "__main__":
    main()
