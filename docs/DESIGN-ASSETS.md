# Social Media Design assets

Background: `src/assets/background-mafia/background-design.webp`.
Generated with the built-in imagegen tool. Prompt: cinematic black marble gothic hall, crimson illuminated pillars and archways at the edges, wet reflective floor, dark smoke; dark negative space for text on the left and upper center; low marble podium and luminous red arc on the right; no phones, UI, text, logos or watermarks.

Project visuals: `src/assets/design/himsi-phone-mockup.webp`, `caktadent-phone-mockup.webp`, and `kampanye-phone-mockup.webp`.
These are transparent WebP exports of the supplied `mockup-handphone.png` with the original HIMSI, Caktadent and campaign feed artwork composed into the screens. The original artwork and supplied PNG are retained. `PhoneMockup.astro` and the phone classes in `src/styles/design.css` provide the reusable composition source.

Update each project's `mockupImg` in `DataDesign.tsx` to replace its preview. The section defaults to Corporate Social Media Design and uses a small native script for accessible accordion selection; no social embeds or additional libraries are loaded.
