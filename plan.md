# NexDev Execution Plan

Version: 1.2
Date: 2026-04-04
Status: Phase 1 started, shell scaffold in place

## 1. Purpose

This file is the working coordination plan for the project.

Its goals are:

1. Keep the project moving toward a fast MVP.
2. Keep all AI contributors aligned on the same repository reality.
3. Prevent phase mixing and unnecessary features.
4. Give the developer a clear next action at any point.

## 2. Current Verified Repository State

Verified directly from the repository on 2026-04-04:

- `backend/` exists and is still empty.
- `frontend/` is the only active implementation area.
- The frontend now has a visible shell scaffold started.
- Most source files are still placeholders.

### Non-empty source and config files that matter right now

- `frontend/src/main.jsx`
- `frontend/src/App.jsx`
- `frontend/src/index.css`
- `frontend/src/App.css`
- `frontend/src/constants/layout.js`
- `frontend/src/store/requestStore.js`
- `frontend/src/app/AppShell.jsx`
- `frontend/src/layouts/Sidebar.jsx`
- `frontend/src/layouts/MainPane.jsx`
- `frontend/src/layouts/RightSideBar.jsx`
- `frontend/src/modules/request/editor/RequestEditor.jsx`

### Important repo reality

- `App.jsx` now renders `AppShell`.
- `AppShell.jsx` mounts left, center, and right layout panels.
- `Sidebar.jsx`, `MainPane.jsx`, and `RightSideBar.jsx` are no longer empty.
- `RequestEditor.jsx` now exists as a placeholder UI block.
- Most files under `modules`, `shared`, `hooks`, `services`, `store`, and `utils` are still zero-byte shells.

## 3. Verified Findings

### Progress made today

The blank-screen blocker was addressed in code.

Current shell path:

1. `frontend/src/main.jsx` renders `App`
2. `frontend/src/App.jsx` renders `AppShell`
3. `frontend/src/app/AppShell.jsx` renders:
   - `Sidebar`
   - `MainPane`
   - `RightSideBar`

This means Phase 1 has started and the app should now show a visible layout instead of a blank screen.

### Current shell status

What now exists:

- left sidebar placeholder
- main workspace placeholder
- right-side AI/context placeholder
- request editor placeholder section inside the main pane

What is still missing:

- real request controls
- response viewer
- proper workspace header behavior
- reusable shared components
- real right panel behavior

### Existing working logic

`frontend/src/store/requestStore.js` still contains the only meaningful request logic:

- `method`
- `url`
- `isLoading`
- `response`
- `setMethod`
- `setUrl`
- `sendRequest`

### Known store issues

In `sendRequest`:

- `isLoading` is set to `true` before the request
- on error, loading is reset
- on success, loading is not reset to `false`
- the response is always parsed with `res.json()`, which will fail for non-JSON responses

## 4. Validation

### Lint

- `npm run lint` in `frontend/` passed on 2026-04-04 after the new shell files were added

### Build

- `npm run build` in `frontend/` still failed in this environment

Observed environment-side build issues:

- Tailwind oxide native binding failed to load
- Vite reported `spawn EPERM`

Conclusion:

- lint is currently clean
- build is still not verified from this environment

## 5. Project Constraints

These remain strict working rules.

### Developer rule

The developer writes the code.

### Overseer rule

This assistant does not edit files unless explicitly told to do so.

### Delivery rule

The project must optimize for a fast investor-ready MVP, not completeness.

That means:

- visible progress first
- stable demo flow first
- low-risk scope first
- no side quests

## 6. MVP Priority

The MVP goal is to show a real, usable API tool quickly.

### Must-have order

1. Render the app shell
2. Let the user choose a method
3. Let the user enter a URL
4. Let the user send a request
5. Show response body and basic status

### Not required for the first demo

- collections
- environment editor
- history
- scripts
- body editor
- auth
- save flow
- AI assistant logic
- backend implementation
- advanced polish

## 7. Phase Boundaries

### Phase 1

Goal:

Remove the blank screen and render a visible shell.

Phase 1 current state:

- started
- major shell files created
- placeholder content visible
- basic structure achieved

Phase 1 not fully complete yet because:

- the layout still needs a more intentional request workspace composition
- request input controls are not wired
- right panel is only a placeholder

### Phase 2

Goal:

Make the minimum request flow usable.

Success means:

1. choose HTTP method
2. enter URL
3. click Send
4. show response

### Phase discipline

Do not pull later features into the current phase.

Examples to avoid:

- collections
- environment logic
- AI logic
- save flow
- auth
- history
- redesign detours

## 8. Next Implementation Order

This is the current approved build order after today's progress.

### Immediate next files

1. `frontend/src/modules/request/editor/MethodSelector.jsx`
2. `frontend/src/modules/request/editor/UrlInput.jsx`
3. `frontend/src/modules/request/editor/SendButton.jsx`
4. `frontend/src/modules/request/editor/RequestEditor.jsx`
5. `frontend/src/layouts/MainPane.jsx`

### Immediate next objective

Turn the request placeholder into a usable request bar:

- select method
- type URL
- click Send

After that:

- show response output below the editor
- then fix the store loading behavior if it causes UI issues

## 9. AI Coordination Contract

This section should guide the other AIs.

### Universal instruction

Unless code is explicitly requested, external AIs should return:

- analysis
- phase understanding
- ordered action list
- risks
- validation steps

They should not return:

- large architecture rewrites
- feature creep
- extra libraries
- unrelated backend plans
- broad redesign suggestions

### Priority order when AI advice conflicts

1. verified repository state
2. this `plan.md`
3. MVP speed
4. phase discipline
5. optional improvements

## 10. End-of-Day Summary For 2026-04-04

What happened today:

- repository structure was rechecked
- backend was confirmed empty
- frontend source map was rechecked
- Phase 1 implementation started
- `App.jsx` was wired to render `AppShell`
- `AppShell.jsx` was created with three layout regions
- `Sidebar.jsx` was filled with a basic placeholder layout
- `MainPane.jsx` was filled with a workspace placeholder
- `RightSideBar.jsx` was added as a new placeholder file
- `RequestEditor.jsx` was filled with basic placeholder sections
- lint was verified again and passed
- build issue remained unresolved in this environment

What did not happen today:

- no method selector was implemented
- no URL input was implemented
- no Send button was implemented
- no response viewer was implemented
- no backend work was started
- no request store bug was fixed yet

## 11. Immediate Next Step

The next coding session should stay narrow:

1. build `MethodSelector.jsx`
2. build `UrlInput.jsx`
3. build `SendButton.jsx`
4. mount them inside `RequestEditor.jsx`
5. connect them to `requestStore`

Stop before touching:

- collections
- AI behavior
- environments
- history
- backend
