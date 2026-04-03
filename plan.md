# NexDev Execution Plan

Version: 1.1
Date: 2026-04-04
Status: Phase 1 queued for implementation

## 1. Purpose

This file is the working coordination plan for the project.

Its goals are:

1. Keep the project moving toward a fast MVP.
2. Keep all AI contributors aligned on the same repository reality.
3. Prevent phase mixing and unnecessary features.
4. Give the developer a clear next action at any point.

## 2. Current Verified Repository State

Verified directly from the repository:

- `backend/` exists but is currently empty.
- The frontend structure is large, but most source files are still placeholders.
- Only a small set of frontend files currently contain real code.

### Non-empty core source/config files

- `frontend/src/main.jsx`
- `frontend/src/App.jsx`
- `frontend/src/index.css`
- `frontend/src/App.css`
- `frontend/src/constants/layout.js`
- `frontend/src/store/requestStore.js`

### Important repo reality

- `frontend/src/App.jsx` is not empty, but it returns an empty fragment.
- Most files under `frontend/src/app`, `frontend/src/layouts`, `frontend/src/modules`, `frontend/src/shared`, `frontend/src/hooks`, `frontend/src/services`, `frontend/src/store`, and `frontend/src/utils` are still zero-byte shells.

## 3. Verified Findings

### Current blocker

The app renders blank because:

- `frontend/src/App.jsx` returns `<> </>`
- the shell/layout files are still empty

### Existing working logic

`frontend/src/store/requestStore.js` already contains:

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

### Checks completed

- `npm run lint` in `frontend/` passes
- `npm run build` in `frontend/` failed in this environment while loading Vite/Tailwind native dependencies

Build failure notes:

- Tailwind oxide native binding failed to load
- Vite also reported `spawn EPERM`

This means lint was verified, but production build status was not cleanly confirmed from this environment.

## 4. Project Constraints

These are now strict working rules.

### Developer rule

The developer writes the code.

### Overseer rule

This assistant does not edit files unless explicitly told to do so.

Default responsibilities:

- inspect
- identify problems
- simplify next steps
- coordinate AI reports
- keep planning documents accurate when requested

### Delivery rule

The project must optimize for a fast investor-ready MVP, not completeness.

That means:

- visible progress first
- stable demo flow first
- low-risk scope first
- no side quests

## 5. MVP Priority

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

## 6. Phase Boundaries

### Phase 1

Goal:

Remove the blank screen and render a visible shell.

Success means:

- app loads
- sidebar is visible
- main pane is visible
- right-side panel is visible
- no blank screen remains

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

Examples to avoid during Phase 1:

- request body logic
- auth logic
- tabs polish
- history
- collections
- AI features
- redesign work

## 7. Next Implementation Order

This is the current approved build order.

### Phase 1 file order

1. `frontend/src/App.jsx`
2. `frontend/src/app/AppShell.jsx`
3. `frontend/src/layouts/Sidebar.jsx`
4. `frontend/src/layouts/MainPane.jsx`
5. right-side shell panel

Note:

There is no verified `ContextPanel.jsx` in the current source tree. If a right panel is needed, it must be created intentionally or another existing file must be used for that role.

### Phase 2 file order

1. `frontend/src/modules/request/editor/RequestEditor.jsx`
2. `frontend/src/modules/request/editor/MethodSelector.jsx`
3. `frontend/src/modules/request/editor/UrlInput.jsx`
4. `frontend/src/modules/request/editor/SendButton.jsx`
5. mount editor into `MainPane.jsx`
6. render response output below it
7. fix request store loading behavior if needed

## 8. AI Coordination Contract

This section should guide the other AIs.

### Universal instruction

Unless code is explicitly requested, external AIs should return:

- analysis
- phase understanding
- ordered action list
- risks
- validation steps

They should not return:

- full code
- large snippets
- patch blocks
- unnecessary architecture rewrites
- extra libraries

### Priority order when AI advice conflicts

1. verified repository state
2. this `plan.md`
3. MVP speed
4. phase discipline
5. optional improvements

## 9. End-of-Day Summary For 2026-04-04

What happened today:

- repository structure was inspected
- backend was confirmed empty
- frontend source map was checked
- blank-screen root cause was identified
- request store was reviewed
- lint was verified
- build issue was observed in the current environment
- team operating rules were clarified
- investor urgency was added as a top-level planning constraint

What did not happen today:

- no source files were implemented
- no UI files were filled
- no request flow was built
- no backend work was started

## 10. Immediate Next Step

The next coding session should start with Phase 1 only:

1. make `App.jsx` render the shell
2. fill `AppShell.jsx`
3. fill `Sidebar.jsx`
4. fill `MainPane.jsx`
5. add or wire a simple right-side placeholder panel

Stop there once the blank screen is gone and the shell is visible.
