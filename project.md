Here is the updated `project.md` file. I have overridden the previous version with a detailed "State of the Union" based on the file analysis. This version serves as a precise context document for the next phase of development.

```markdown
# NexDev — Project Context & Execution Guide

**Version:** 1.1.0  
**Last Updated:** 02-04-2026  
**Status:** Phase 1 — Infrastructure Complete | UI Build Pending

---

## 1. 🚦 Current State Summary

The project has successfully completed the "Scaffolding Phase".
*   **Infrastructure:** 100% (Vite, Tailwind, ESLint, Fonts, Paths)
*   **Design System:** 100% (Tokens configured, Variables set)
*   **Business Logic:** 5% (Basic Zustand store skeleton exists)
*   **UI Components:** 0% (All component files are empty shells)

**Immediate Blocker:** The application renders a blank screen because `App.jsx` and all layout components are empty.

---

## 2. 🧱 Tech Stack (Verified Installed)

| Layer | Technology | Version | Notes |
|-------|-----------|---------|-------|
| **Framework** | React | 19.2.4 | Latest version |
| **Build** | Vite | 8.0.1 | React Compiler enabled |
| **Styling** | Tailwind CSS | 4.2.2 | PostCSS + Autoprefixer active |
| **State** | Zustand | 5.0.12 | Installed, basic store created |
| **Icons** | Lucide React | 1.7.0 | Ready for import |
| **Fonts** | Inter + JetBrains | 5.2.8 | Imported in `main.jsx` |

---

## 3. 🎨 Design System (Locked)

### Color Tokens (Tailwind Config)
**Do not use arbitrary values (e.g., `bg-gray-500`). Use only these:**

| Token | Hex | Usage |
|-------|-----|-------|
| `bg-bg-primary` | `#0B0F14` | Main Canvas |
| `bg-bg-secondary` | `#121821` | Panels / Cards |
| `text-text-primary` | `#E6EDF3` | Headings |
| `text-text-secondary` | `#9BA7B4` | Body text |
| `bg-accent` | `#4F46E5` | Primary Buttons |
| `bg-accent-hover` | `#4338CA` | Hover State |
| `border-border` | `#1F2937` | Dividers |

### Method Colors
*   GET: `text-method-get`
*   POST: `text-method-post`
*   PUT: `text-method-put`
*   PATCH: `text-method-patch`
*   DELETE: `text-method-delete`

### Layout Constants
*   **Sidebar:** `240px`
*   **Context Panel:** `320px`
*   **Header:** `56px`
*   **Spacing:** `p-4` / `gap-4` (Standard)

---

## 4. 📂 Project Structure (Actual State)

The file structure exists but is largely unimplemented.

### ✅ Configured & Ready
*   `tailwind.config.js` — Colors, fonts, content paths set.
*   `src/index.css` — Tailwind directives & font config.
*   `src/main.jsx` — Renders `<App />`, imports fonts.
*   `vite.config.js` — React compiler plugins active.

### ⚠️ Implemented (Partial)
*   `src/store/requestStore.js`
    *   Contains: `method`, `url`, `isLoading`, `response`.
    *   Actions: `setMethod`, `setUrl`, `sendRequest` (basic fetch logic exists).

### 🛑 Empty Shells (Priority Build List)
*   **Layouts:**
    *   `src/app/AppShell.jsx` (Root 3-panel flex)
    *   `src/layouts/Sidebar.jsx` (Left panel)
    *   `src/layouts/MainPane.jsx` (Center workspace)
    *   `src/layouts/TitleBar.jsx` (Top header)
*   **Request Editor:**
    *   `src/modules/request/editor/RequestEditor.jsx`
    *   `src/modules/request/editor/MethodSelector.jsx`
    *   `src/modules/request/editor/UrlInput.jsx`
*   **Shared/UI:**
    *   `src/shared/Button.jsx`
    *   `src/shared/Input.jsx`
*   **Root:**
    *   `src/App.jsx` (Currently empty fragment `<> </>`)

---

## 5. 🚧 Execution Roadmap

### Phase 1: Layout Foundation (Days 1-2)
**Goal:** Render the 3-panel application shell.

1.  **App.jsx**: Import and render `AppShell`.
2.  **AppShell.jsx**: Create the flex container.
    *   `flex h-screen bg-bg-primary text-text-primary`
    *   Children: `<Sidebar />`, `<MainPane />`, `<ContextPanel />`.
3.  **Sidebar.jsx**: Implement fixed left panel (`w-[240px]`).
    *   Add Logo placeholder.
    *   Add "New Request" button placeholder.
4.  **MainPane.jsx**: Implement flexible center (`flex-1`).
    *   Prepare slot for request editor.
5.  **ContextPanel.jsx**: Implement fixed right panel (`w-[320px]`).
    *   Placeholder for "Explanation/AI" feature.

### Phase 2: Request Input (Day 3)
**Goal:** Allow user to input URL and Method.

1.  **MethodSelector.jsx**: Dropdown for GET/POST/etc. Use method colors.
2.  **UrlInput.jsx**: Text field connected to `requestStore.url`.
3.  **SendButton.jsx**: Button wired to `requestStore.sendRequest`.

### Phase 3: Response & Polish (Days 4-5)
**Goal:** Display results.

1.  **ResponseViewer.jsx**: JSON viewer component.
2.  **StatusBadge.jsx**: Display status code (200, 404, etc.).
3.  **Utils**: Finish `formatJson.js` for pretty-printing.

---

## 6. ⚠️ Development Rules (Strict)

1.  **No New Libraries:** Use only what is installed (Zustand, Lucide, Tailwind).
2.  **Token Enforcement:** Only use colors defined in Section 3.
3.  **Component Size:** Max 150 lines. Split logic into hooks if larger.
4.  **State Access:** Use Zustand hooks (`useRequestStore`) directly in components. Do not prop-drill.
5.  **Font Usage:** UI uses `font-sans`. Code/JSON uses `font-mono`.

---

## 7. 🧠 AI Instruction Prompt

When generating code for this project:
1.  **Check Structure:** Does the file already exist? If so, fill the empty shell. If not, create it in the specific folder defined in Section 4.
2.  **Verify Imports:** Import icons from `lucide-react`. Import store from `src/store/...`.
3.  **Styling:** Apply classes strictly from the Design System in Section 3.
4.  **Logic:** Connect UI inputs to the existing `requestStore` setters (`setUrl`, `setMethod`).
```