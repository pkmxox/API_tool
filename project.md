# NexDev Project Context

Version: 1.2
Last Updated: 2026-04-04
Status: Planning aligned, implementation not started

## 1. Project Situation

NexDev is being built under time pressure with investor urgency.

The main strategy is:

- ship a believable MVP fast
- keep scope small
- avoid building non-essential features early
- use planning discipline so multiple AI helpers do not create confusion

## 2. Team Operating Model

There are multiple AI roles involved in the wider workflow:

- executive
- mentor
- research
- overseer/debugger

This project chat is the overseer/debugger lane.

The overseer role is to:

- inspect the repository
- identify blockers
- explain issues in simple words
- help sequence implementation
- keep project notes updated when requested

The developer writes the code directly.

Important rule:

- no files should be edited by the overseer unless the developer explicitly asks

## 3. Verified Repository State

### Root

Current top-level project folders/files include:

- `backend/`
- `frontend/`
- `plan.md`
- `project.md`

### Backend

- `backend/` is currently empty

### Frontend

The frontend has a large source tree, but most files are still placeholders.

Only a small number of files currently contain actual code:

- `frontend/src/main.jsx`
- `frontend/src/App.jsx`
- `frontend/src/index.css`
- `frontend/src/App.css`
- `frontend/src/constants/layout.js`
- `frontend/src/store/requestStore.js`

There are also static assets present in `frontend/src/assets/`.

## 4. Current Technical Reality

### What is already working

- React + Vite are set up
- Tailwind is configured
- fonts are imported in `frontend/src/main.jsx`
- layout constants exist
- a basic Zustand request store exists
- ESLint runs successfully

### What is not working yet

- the app still renders a blank screen
- the main UI shell is not implemented
- request editor UI is not implemented
- response UI is not implemented
- backend is not implemented

## 5. Primary Known Problems

### Blank screen

`frontend/src/App.jsx` currently returns an empty fragment, so nothing visible is rendered.

### Empty shell files

Core shell files are still empty, including:

- `frontend/src/app/AppShell.jsx`
- `frontend/src/layouts/Sidebar.jsx`
- `frontend/src/layouts/MainPane.jsx`

### Request store bug

In `frontend/src/store/requestStore.js`:

- loading starts before the request
- loading is cleared on error
- loading is not cleared on success

There is also a response parsing limitation:

- the request logic always calls `res.json()`
- this will fail for valid non-JSON responses

## 6. Validation Results So Far

### Lint

- `npm run lint` in `frontend/` passed

### Build

- `npm run build` in `frontend/` did not complete successfully in this environment

Observed build environment issues:

- Tailwind native oxide binding load failure
- Vite reported `spawn EPERM`

Conclusion:

- code linting is currently okay
- production build verification is still unresolved from this environment

## 7. MVP Scope

The first investor-facing MVP should only prove the core use case.

### MVP must do

1. show the app shell
2. let the user choose a method
3. let the user enter a URL
4. send the request
5. show the response

### MVP should not try to finish yet

- collections
- environment management
- history
- scripts
- AI assistant behavior
- request saving
- advanced tabs
- backend services
- deep polish

## 8. Planned Next Work

The next implementation session should focus only on Phase 1.

### Phase 1 target

Render a visible shell and remove the blank screen.

### Recommended file order

1. `frontend/src/App.jsx`
2. `frontend/src/app/AppShell.jsx`
3. `frontend/src/layouts/Sidebar.jsx`
4. `frontend/src/layouts/MainPane.jsx`
5. right-side placeholder panel

Do not mix Phase 2 features into that work.

## 9. End-of-Day Record For 2026-04-04

Today's progress was planning and verification, not implementation.

Completed today:

- reviewed project structure
- confirmed backend is empty
- confirmed frontend is mostly scaffolding
- identified blank-screen cause
- identified request store behavior and bug
- verified lint
- documented build verification issue
- aligned the working rules for AI coordination
- aligned the project around a fast MVP strategy

Not completed today:

- shell implementation
- request editor
- response viewer
- backend work

## 10. Communication Rule

When sharing status with other AIs, use the repository reality above first.

If another AI suggests work that conflicts with the actual current files or the MVP-first plan, that suggestion should be treated as lower priority.
