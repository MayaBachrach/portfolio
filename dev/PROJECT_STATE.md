# Portfolio audit — 2026-11-16

## Baseline and publication
- Inspected main 1ff45db214397a4d26f5ed75fe598b1a3fda2970 and dev 2dbb930d708cafca61873515c3dabfa2338fd57a.
- Work follows AGENTS.md: develop on dev, publish its snapshot under main:dev/. Production root is a separate release.
- Preview: https://mayabachrach.github.io/portfolio/dev/
- No previous PROJECT_STATE.md existed on dev.

## Delivered
- Cached carousel geometry instead of repeated per-tile layout measurements. RAF stops offscreen, in background tabs, behind dialogs, for reduced motion and keyboard focus.
- Pointer capture, cancellation, window-level release, bounded momentum and drag-click suppression. Keyboard arrows/Home/End navigate original links; loop duplicates are hidden from the accessibility tree.
- Opening animations cancel cleanly before closing; route revisions guard interrupted closes. Focus returns to the source link, and Back/Forward are covered by regression checks.
- Removed moving bitmap cutouts. Original artwork stays stationary; authored vector finger contours, record motion, page outlines and a hanging-star layer animate. Native SVG timelines pause offscreen/behind dialogs/in background tabs and reset for reduced motion.
- DJ and producer faces use small vector eyes and restrained smiles inside the existing head/hair/crown contours. Panel stamps use the same art.
- Existing palettes, handwritten lettering, source media, project descriptions, URLs and credits preserved. No outer panel outline or carousel navigation/pause buttons. Solid existing canvas behind dialogs replaces mixed-color blur. The original filled difference-blend cursor is preserved.
- Intrinsic dimensions for project images; async decoding. Footer decoding is no longer on the page-reveal critical path. Removed forced 1200ms loader minimum. Footer timer is cancelled when inactive.
- Contact remains at least a viewport tall but may grow for accessible reflow.

## Verification
- Node 22.23.4, npm ci, build, source/resource/palette checks, Chromium browser regression suite; npm audit: 0 vulnerabilities.
- 320x568, 390x844, 844x390, 1280x800 and 5120x2200; both themes. Intro/stars fit normal viewport and contact fills viewport. 200% text reflow, reduced motion, keyboard/focus, dialog/history races, dragging, asset loads, no-JS fallback and stalled footer asset covered.
- Real Chromium screenshots inspected for mobile stars, both themes, panels and four moments in each of the ten action scenes.
- A short instrumented Chromium mobile sample measured 620 carousel-tile getBoundingClientRect calls/second before and 0 after. This is an operation-count comparison, not an FPS or real-device speed claim. Loading timings were not controlled enough to claim a measured speedup.

## Art-direction limitations / not final animation acceptance
- These are restrained vector overlays on the supplied illustrations, not full redrawn character animation. Camera/typing finger excursions are subtle at phone size.
- Graphic design, performance and animation/book-flip gestures remain limited; creative uses a join accent with stationary puzzle pieces after a moving reconstruction failed the anatomy review.
- Storytelling page outline lifts, bends and crosses the spine, then fades over the original page stack. It does not include a fully occluding page or a hand following the sheet. A dedicated drawn sequence is still needed to meet the full requested page-turn standard.
- Hands and original raster art can differ slightly in stroke weight. Dark illustrations use light ink only, with no shadow or dark edge.
- Real iOS/Safari touch, audio, pinch zoom and reduced-motion changes during an in-progress intro were not verified.
- This preview improves engineering and removes the detached bitmap motion, but is not claimed to meet every animation-art-direction acceptance criterion. Do not promote wholesale to production on that basis.

## Follow-up reflow correction
A 320px viewport with 200% root text exposed contact-grid min-content overflow. The contact grid now uses minmax(0,1fr), icon links wrap and copyright text can reflow. A regression assertion covers this width.

## User corrections — 2026-11-16
Restored the original filled difference-blend cursor; removed the unrequested outline cursor and dark drop-shadows on drawings. Panel entrance now animates only transform/opacity, prepares media frames before motion and takes 360ms. Exit takes 280ms, begins at the currently presented pose when interrupted and holds its final pose until the dialog closes, avoiding snap-to-full-size flashes.

## In-page star growth — 2026-11-16
User approved replacing floating modal panels with a continuous star-to-rectangle expansion. The existing star path is sampled into a polygon that grows into the colored project surface. Neighboring star groups move outward without changing their relative spacing; the introduction shifts and the gallery reserves height, pushing contact down. Projects use document scrolling and nonmodal dialog semantics, with Escape, history navigation and source focus restoration. Closing reverses the same progress, including interrupted openings; long-page scroll returns during collapse. Reduced motion jumps directly to the resulting layout. No cursor, artwork sources, project content or palette changes.

Visual review corrections: preserve neighboring-star spacing, prevent the hero overflow container from auto-scrolling on focus, clip incoming content to the growing silhouette, remove redundant same-color media frames inside the filled surface, and return document scroll during collapse. Chromium checks cover nonmodal semantics, reserved document space, focus/history, both themes and the existing five viewport sizes. Real iOS/Safari remains unverified.

## Softer motion and reliable closing — 2026-11-16
Fixed the transparent close icon on hover. Panel header/close control stays visible while scrolling long projects. Opening and closing use a gentler quintic easing (1050/900ms), a curved surface path and gradual content reveal. The document scroll is synchronized with growth: short projects center vertically, long projects align with a 24px top margin, and closing returns to page top. Verified actual mouse close, hover visibility, long mobile-project hit target and return to scrollY=0; keyboard and reduced-motion regressions retained.
