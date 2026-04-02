# NexDev Execution Plan

Version: 1.0
Date: 2026-04-03
Status: Coordination plan for Phase 1 and immediate Phase 2 handoff

## 1. Purpose

This document is the single source of truth for all external AI contributors.

Its goals are:

1. Keep every AI inside the correct phase.
2. Stop AIs from sending code when only planning/review is requested.
3. Make all reports consistent with the real repository state.
4. Give the operator a clean sequence to follow without confusion.

## 2. Current Verified State

Verified directly from the repository at `frontend/`:

### Phase 0

Phase 0 is complete.

Confirmed:

- React + Vite + Tailwind are installed.
- Fonts are wired in `frontend/src/main.jsx`.
- Tailwind design tokens exist in `frontend/tailwind.config.js`.
- Global styles exist in `frontend/src/index.css`.
- Zustand request store exists in `frontend/src/store/requestStore.js`.

### Actual Blockers

The app is blank because key UI files are empty.

Verified empty files:

- `frontend/src/app/AppShell.jsx`
- `frontend/src/app/App.jsx`
- `frontend/src/layouts/MainPane.jsx`
- `frontend/src/layouts/Sidebar.jsx`
- `frontend/src/modules/request/editor/RequestEditor.jsx`
- `frontend/src/modules/request/editor/MethodSelector.jsx`
- `frontend/src/modules/request/editor/UrlInput.jsx`
- `frontend/src/modules/request/editor/SendButton.jsx`

Important note:

- `frontend/src/App.jsx` is not empty, but currently returns an empty fragment, so the app still renders nothing.

### Existing Store Reality

`frontend/src/store/requestStore.js` already contains:

- `method`
- `url`
- `isLoading`
- `response`
- `setMethod`
- `setUrl`
- `sendRequest`

Known issue already present in store:

- `sendRequest` sets `isLoading: true`
- On error it resets loading
- On success it does **not** reset `isLoading` to `false`

This is a real implementation detail and must be considered in Phase 2.

## 3. Phase Boundaries

These boundaries are strict.

### Phase 1 Goal

Render a visible application shell so the blank screen is removed.

Phase 1 success means:

- App renders
- Left sidebar renders
- Center main pane renders
- Right context/assistant panel renders
- No blank screen remains

### Phase 2 Goal

Make the minimum API request flow usable.

Phase 2 success means:

1. User selects HTTP method
2. User enters URL
3. User clicks Send
4. Response is visible on screen

### Forbidden Phase Mixing

Do not pull Phase 2 work into Phase 1 unless explicitly approved.

Examples:

- Do not add request sending during Phase 1
- Do not add headers/body/auth/history/tabs polish during Phase 1
- Do not redesign the UI during Phase 1 or Phase 2

## 4. Locked Scope by Phase

### Phase 1 Allowed

- Wire `frontend/src/App.jsx` to render the shell
- Implement `frontend/src/app/AppShell.jsx`
- Implement left layout shell
- Implement center layout shell
- Implement right context/assistant shell
- Use existing design tokens only
- Add placeholders only where needed

### Phase 1 Not Allowed

- Request body editor
- Headers editor
- Authentication
- History
- AI explanation logic
- Major store refactors
- Visual redesign
- New libraries

### Phase 2 Allowed

- `RequestEditor`
- `MethodSelector`
- `UrlInput`
- `SendButton`
- Basic response output
- Minimal store bug fix if required for send flow

### Phase 2 Not Allowed

- Headers tab
- Auth tab
- Body editor
- Save request
- Collections logic
- History logic
- Fancy JSON viewer
- Animations/polish beyond basic usability

## 5. Design System Rules

All AIs must respect the existing tokens.

Use only the existing color system from `frontend/tailwind.config.js`:

- `bg-bg-primary`
- `bg-bg-secondary`
- `text-text-primary`
- `text-text-secondary`
- `bg-accent`
- `bg-accent-hover`
- `border-border`
- `text-method-get`
- `text-method-post`
- `text-method-put`
- `text-method-patch`
- `text-method-delete`

Use these layout constants:

- Sidebar width: `240px`
- Right panel width: `320px`
- Top bar height: `56px`

Font usage:

- UI labels: `font-sans`
- URL / JSON / method tokens: `font-mono` only where appropriate

## 6. File Ownership and Build Order

This order is mandatory.

### Phase 1 Build Order

1. `frontend/src/App.jsx`
2. `frontend/src/app/AppShell.jsx`
3. `frontend/src/layouts/Sidebar.jsx`
4. `frontend/src/layouts/MainPane.jsx`
5. Create or wire a right-side panel component for the shell

Note:

There is no verified `frontend/src/layouts/ContextPanel.jsx` in the current file list. If a right-side shell panel is needed, it must be created intentionally and referenced from `AppShell.jsx`.

### Phase 2 Build Order

1. `frontend/src/modules/request/editor/RequestEditor.jsx`
2. `frontend/src/modules/request/editor/MethodSelector.jsx`
3. `frontend/src/modules/request/editor/UrlInput.jsx`
4. `frontend/src/modules/request/editor/SendButton.jsx`
5. Mount request editor into `frontend/src/layouts/MainPane.jsx`
6. Render raw response below the editor
7. Fix `requestStore` loading state only if needed for the MVP flow

## 7. Strict Output Contract for External AIs

This section is mandatory. Share it exactly when you ask another AI for help.

### Universal Instruction

You are not allowed to send code unless explicitly asked for code.

For this task, respond with:

- analysis
- implementation plan
- risk list
- file-by-file action list
- validation checklist

Do **not** include:

- code blocks
- JSX
- JavaScript
- pseudocode
- patch format
- "copy-paste code"
- sample component implementations
- inline snippets longer than one line

If you ignore this rule, the response is invalid and will not be used.

### Required Response Format

Every AI must reply using exactly these sections:

1. Phase Understanding
2. Files To Touch
3. Ordered Task List
4. Risks / Conflicts
5. Validation Checklist
6. Stop Point

### Additional Restrictions

- Use only the real repository paths listed in this document.
- Do not invent files unless clearly labeled as a necessary new file.
- Do not assume files are implemented if this document says they are empty.
- Do not suggest new libraries.
- Do not suggest refactoring the architecture.
- Keep recommendations inside the current phase only.

## 8. AI-Specific Instructions

Use these prompt constraints when talking to each AI.

### For Claude

You previously violated the instruction by returning code. Do not return code in this round.

You must act as a planning and architecture reviewer only.

Required behavior:

- no code
- no snippets
- no component bodies
- no placeholder JSX
- no "copy-paste" sections
- only structured planning output

Focus on:

- shell architecture
- file dependencies
- phase discipline
- integration risks

### For GPT

Act as execution manager only.

Focus on:

- scope control
- atomic task ordering
- time budgeting
- must-have versus later

Do not provide implementation code.

### For Gemini

Act as technical reviewer only.

Focus on:

- layout integrity
- token consistency
- viewport behavior
- edge-case warnings

Do not provide implementation code.

## 9. Consolidated Execution Plan

This is the plan that should govern real implementation.

### Phase 1

Objective:

Remove blank screen by rendering a stable 3-panel shell.

Deliverables:

- `frontend/src/App.jsx` renders the shell entry
- `frontend/src/app/AppShell.jsx` renders the 3-panel layout
- left panel visible
- center panel visible
- right panel visible
- `h-screen` and `overflow-hidden` applied at shell level

Validation:

- app loads without blank screen
- no horizontal viewport overflow
- background uses project tokens

### Phase 2

Objective:

Enable the MVP request flow.

Deliverables:

- method selector works
- URL input works
- Send button works
- response shows below the request controls
- loading state is handled correctly

Validation URL:

- `https://jsonplaceholder.typicode.com/todos/1`

Validation steps:

1. choose `GET`
2. paste validation URL
3. click Send
4. response appears
5. button does not remain permanently stuck in loading state

## 10. Decision Rules

When there is conflict between AI reports, use this priority:

1. Verified repository state
2. This `plan.md`
3. Scope discipline
4. Speed to working MVP
5. Nice-to-have suggestions

If an AI recommendation conflicts with the verified repository, discard that recommendation.


