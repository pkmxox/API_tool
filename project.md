# NexDev Project Context

Version: 1.3
Last Updated: 2026-04-04
Status: Phase 1 partially implemented, MVP direction stable

## 1. Project Situation

NexDev is being built under real time pressure with investor urgency.

The project strategy is now clearly locked:

- ship a believable MVP fast
- keep scope small
- avoid extra systems early
- keep all AI guidance aligned with real repository state

This is not a "build everything" phase.
This is a "make a convincing working demo fast" phase.

## 2. Team Operating Model

There are multiple AI roles involved in the wider workflow:

- executive
- mentor
- research
- overseer/debugger

This chat is the overseer/debugger lane.

The overseer role is to:

- inspect the repository
- identify blockers
- explain problems in simple words
- reduce confusion between AI suggestions
- keep project notes updated when requested

The developer writes the code directly.

Important rule:

- no files should be edited by the overseer unless the developer explicitly asks

That rule was lifted only for this end-of-day documentation update because the developer explicitly requested it.

## 3. Verified Repository State

### Root

Current important project entries include:

- `backend/`
- `frontend/`
- `plan.md`
- `project.md`

### Backend

- `backend/` is still empty

### Frontend

The frontend is the active implementation area.

The frontend has a large file tree, but most of it is still scaffolding.

Current non-empty implementation-relevant source files:

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

Most of the rest of the frontend source tree is still empty shell files.

## 4. What Changed Today

Today was no longer just planning.
Some Phase 1 UI work was started.

### Confirmed source progress

- `frontend/src/App.jsx` now renders `AppShell`
- `frontend/src/app/AppShell.jsx` now renders a three-panel shell
- `frontend/src/layouts/Sidebar.jsx` now contains a placeholder sidebar
- `frontend/src/layouts/MainPane.jsx` now contains a workspace area
- `frontend/src/layouts/RightSideBar.jsx` was created as a new right-side placeholder panel
- `frontend/src/modules/request/editor/RequestEditor.jsx` now contains placeholder request/response sections

### Practical effect

The original blank-screen issue should now be resolved because the root app no longer returns an empty fragment.

The application is still early, but it has moved from:

- blank setup

to:

- visible shell scaffold

## 5. Current Technical Reality

### What is already working

- React + Vite are set up
- Tailwind is configured
- fonts are imported in `frontend/src/main.jsx`
- layout constants exist
- a basic Zustand request store exists
- the root app now mounts a visible shell
- ESLint runs successfully

### What is now visible but still placeholder-only

- left sidebar
- main workspace
- right-side assistant/context area
- request editor section
- response output placeholder text

### What is not implemented yet

- method selector
- URL input
- send button
- response viewer
- status display
- backend
- advanced modules like collections, history, environments, auth, scripts, AI behavior

## 6. Primary Known Problems

### MVP is still not interactive

The app likely renders now, but the core API tool flow is not usable yet.

Missing for a real MVP:

1. choose method
2. enter URL
3. send request
4. inspect response

### Request store bug

In `frontend/src/store/requestStore.js`:

- loading starts before the request
- loading is cleared on error
- loading is not cleared on success

### Response parsing limitation

The request logic always calls `res.json()`.

That means:

- valid non-JSON responses can fail
- text or HTML responses are not safely handled yet

### Build verification is still unresolved

`npm run build` still fails in this environment with:

- Tailwind oxide native binding load issue
- Vite `spawn EPERM`

So the current code quality signal is:

- lint is verified
- build is not cleanly verified from this environment

## 7. MVP Scope

The first investor-facing MVP should only prove the main use case.

### MVP must do

1. show the shell
2. choose a method
3. enter a URL
4. send the request
5. show the response

### MVP should not try to finish yet

- collections
- environment management
- history
- scripts
- body editor
- auth flows
- save request flow
- AI assistant behavior
- backend services
- deep polish

## 8. Recommended Next Work

The next implementation session should focus only on finishing the minimum request flow.

### Next file order

1. `frontend/src/modules/request/editor/MethodSelector.jsx`
2. `frontend/src/modules/request/editor/UrlInput.jsx`
3. `frontend/src/modules/request/editor/SendButton.jsx`
4. `frontend/src/modules/request/editor/RequestEditor.jsx`
5. mount response output under the request controls

### Simple next objective

Turn the current placeholder into one working line of action:

- method dropdown
- URL input
- Send button

After that:

- show the response below

## 9. End-of-Day Record For 2026-04-04

Today's progress:

- reviewed project structure again
- confirmed backend is still empty
- confirmed frontend remains mostly scaffolding
- verified that Phase 1 implementation actually started
- verified `App.jsx` now renders `AppShell`
- verified shell files were filled
- verified a new right-side layout file was added
- verified request editor placeholder was added
- verified lint passes
- rechecked build failure in this environment
- aligned documentation with actual repository state

Not completed today:

- request controls
- response UI
- request store fix
- backend work
- investor demo flow

## 10. Communication Rule

When sharing status with the other AIs, use this version of reality first:

- the app is no longer purely blank scaffolding
- Phase 1 has started
- the shell exists
- the MVP is still not interactive
- the next focus is request input and response output only

If another AI suggests work outside that narrow path, it should be considered lower priority unless it directly helps the investor demo.
