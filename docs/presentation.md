# Art, music, interface, and content

Selected direction v1, 2026-09-06. This resolves the options in the earlier [experience discussion](experience-direction.md).

## Visual identity

Create a warm, detailed miniature city with expressive people and recognizable communal spaces. Buildings have believable proportions with slightly simplified geometry. Craft comes from silhouettes, material variation, light, signage, window activity, props, and animation.

The core palette is warm brick, cream stone, muted shop colors, leafy greens, and amber interiors. UI surfaces use clear paper-like neutrals with a dark appearance option. Selection, warnings, and previews have consistent shapes and labels as well as color.

The camera is orthographic at a fixed tilted angle, with four 90-degree rotation positions, smooth zoom, and optional focus on a person or occasion. A selected floor can become a room cutaway. The player edits functional zones and chooses meaningful furnishings; v1 does not include arbitrary wall-by-wall architectural modeling.

Owned and partner institutions are recognizable through signs, activity, and optional emblems. People vary in age, body shape, clothing, movement, and role. Named characters need readable silhouettes at normal play distance. Broader neighborhood residents are visible as part of the city.

## What moves

Prioritize walking, greetings, carrying supplies, arranging rooms, reading, teaching, cooking, arriving, waiting, singing, dancing, and departure. Small groups form and disperse. School dismissal, shop activity, and preparations change the same street's appearance.

Major activity reflects simulation state: a closed program does not show pupils attending, a completed connection is used, a gathering fills only to the actual plan's scale, and visible participants are linked to real attendees when named.

Ambient pedestrian and traffic animation is representative, not a second economic or traffic simulation. It must never determine whether a person received a service. Focus mode can keep a scene running while the strategic clock is paused.

## Music decision

Use original compositions combining niggun-inspired melodic identity, communal singing, and modern Hasidic arrangements. Three court motifs each receive intimate, festive, and grand arrangements, making nine cues. Three additional cues cover travel, reflection, and everyday atmosphere. Total initial soundtrack budget: 12 cues.

Each cue has separate instrumental and wordless vocal stems where applicable. A gathering can begin with a small musical presence and grow with participation. Arrangements can change across generations while retaining the melody. A significant first performance records the motif's association with the event.

Ordinary play alternates gentle score with audible street life and quiet. Major occasions receive fuller arrangements. A calendar/occasion profile determines which stems and activities are appropriate. The depiction of Shabbos and relevant Yom Tov occasions uses communal voices and suitable ambience, with court-operated work/transport scenes and instrumental performance suppressed. Specific scene treatment is reviewed for the represented tradition before production.

Composition is original; do not assume a familiar tune or a recording is available for reuse. A composer and culturally informed performers receive a concrete cue brief after the musical prototype. Development placeholders must have documented permission and must not become final assets by accident.

There is no requirement for full voiced dialogue. Short nonverbal reactions, environmental sound, and singing carry much of the audio identity. Event prose and dialogue remain readable text.

## Sound and interaction feel

Use spatial footsteps, doors, room activity, deliveries, conversations, and distant music. Ambient density follows actual activity, with sensible limits to prevent crowd noise becoming fatiguing. A concise cue marks a valid placement, an unmet requirement, and project completion.

The game has separate master, score, singing, ambience, and effects controls. Important audio events also have visible markers and optional captions. Music can be disabled without losing information needed to play.

Hover, selecting, dragging an allocation, and changing a draft should respond immediately. The plan preview updates capacity, cash, and conflicts together. Committing a plan produces a clear confirmation in the world and timeline; small animations never delay the next input.

## Interface structure

| Surface | Job |
| --- | --- |
| Neighborhood | Primary interaction, spatial understanding, observation, and scene markers. |
| Right-hand inspector | One selected person, property, institution, or branch with relevant actions and reasons. |
| Project planner | Requirements, assigned resources, alternatives, costs, conflicts, setup timeline, and outcomes. |
| Commitments timeline | What is reserved, when it begins/ends, and what would be displaced by a new plan. |
| Ledger | Transactions and forecasts with links to the project or agreement that caused them. |
| People and succession | Capabilities, relationships, work availability, ambitions, support, and family history. |
| Region/world | Branch service packages, routes, partnerships, and the next opportunity. |
| Chronicle | Remembered events, places, traditions, and causal links. |

The main HUD contains cash and weekly net, households, service gaps, upcoming commitments, date, and clock controls. Routine facts remain in the relevant inspector. Only critical decisions interrupt; other news is grouped into a digest with a focus link.

Draft projects can be saved and compared in up to three alternatives. Undo works while drafting. An invalid allocation explains the exact missing requirement or conflict. Closing the planner does not silently commit spending. Changes to active agreements show the notice, cost, and affected activities before the player commits.

Default controls: left-click selects; right-click or Escape backs out; WASD/arrows pan; Q/E rotate; the wheel zooms; Space pauses; 1/2/3 select 1x/4x/12x speed. Planner allocations support both drag-and-drop and select-then-assign controls. Tab moves focus and Enter activates it. Text entry captures these keys instead of moving the camera or advancing time. Every binding can be changed.

## Accessibility and language

Target 1280×720 through 4K with adjustable UI scale, a 16-pixel default body font at 1080p, and selectable larger text. All actions have keyboard paths. Key bindings are remappable; edge scrolling, motion, camera easing, and screen shake can be disabled. There is no requirement for fast reaction or precise moving-target clicks.

Meaning never depends only on color or sound. Focus order, tooltips, and captions must be readable at increased scale. Lists support sorting and filtering when useful; the default view stays small enough to scan.

The first release is in English with a searchable glossary and optional Hebrew/Yiddish terminology. Hebrew text and names use correct bidirectional layout and appropriate fonts. Full additional-language translations are outside v1, but every string uses localization IDs from the start.

## Content quantities for the first release

| Content | Budget |
| --- | --- |
| Base building shells | 12 modular shells with compatible floor/width variants. |
| Regional facade/prop palettes | 6, applied to shared geometry and authored streets. |
| District layouts | 4, with seeded property and opportunity variations. |
| Functional interior zone kits | 8. |
| Character silhouette/outfit sets | 16, with appropriate age and role variation. |
| Reusable character animation clips | 24. |
| Program templates | 18, as defined in mechanics. |
| Meaningful improvements | 36, each changing a capability, capacity, access, or usable arrangement. |
| Character traits | 30, with explicit mechanical or behavioral consequences. |
| Authored event seeds | 120, allocated in the campaign specification. |
| Occasion scene compositions | 24, using shared props, people, and animation. |
| Music cues | 12, including the three motifs and their arrangements. |
| Written event, dialogue, and reference content | Approximately 20,000 words as a production ceiling, not a fill quota. |

The [moment bank](moments.md) supplies early material; approved seeds must be mapped to actual mechanics and the 120-entry catalogue. More content is not the automatic response to a repetitive mechanic.

## Quality bar

The first finished block must make its major institutions distinguishable before labels, remain readable at ordinary zoom, and reward close observation. One gathering must look and sound inviting at different participation levels and still communicate its relevant capacity and outcome.

Review names, roles, attire, pronunciation, calendar treatment, signs, and occasions with people familiar with the represented communities. Review the wider city's residents and relationships as well. Fix content-specific errors before duplicating a kit across the campaign.

Art and music are judged in the playable scene alongside the actions they support. A beautiful scene is presentation evidence; a player discovering and wanting to repeat an interesting arrangement is mechanical evidence. Both are required before expanding production.
