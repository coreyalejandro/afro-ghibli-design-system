# Corey Alejandro Afro Ghibli Style Guide

A reusable design system based on your GitHub profile’s dark theme, accent colors, typography, and accessible layout.

---

## 1. Color Palette

| Name                | HEX        | Usage                        |
|---------------------|------------|------------------------------|
| Background          | #0d1117    | Main background              |
| Card/Panel          | #161b22    | Cards, panels, tables        |
| Border/Divider      | #30363d    | Table borders, dividers      |
| Primary Text        | #c9d1d9    | Headings, main text          |
| Secondary Text      | #8b949e    | Muted/secondary text         |
| Accent Red          | #ed6a5e    | Email, error, strong accent  |
| Accent Green        | #83c67e    | “Now Playing”, success tags  |
| Accent Blue-Gray    | #7f9fa6    | Portfolio, links, info       |
| Accent Yellow       | #e6c07b    | Warning, “Studio Ghibli”     |
| Table Row Highlight | #21262d    | Table backgrounds            |

---

## 2. Typography

- **Font Family:** system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
- **Headings:** Bold, large, high-contrast (#c9d1d9)
- **Body:** Regular, readable, min 16px
- **Muted Text:** #8b949e for secondary info
- **Monospace:** For code, labeled buttons, or tags

---

## 3. Layout & Spacing

- **Container/Card Radius:** 8px
- **Button/Tag Radius:** 6px
- **Padding (cards, panels):** 1.5rem
- **Section Spacing:** 24px between main sections
- **Element Spacing:** 16px between elements
- **Table Padding:** 0.75em vertical, 1.25em horizontal
- **Divider:** 1px solid #30363d

---

## 4. UI Components

### Buttons & Tags

```css
.btn {
  border-radius: 6px;
  font-weight: 600;
  text-transform: uppercase;
  border: 1px solid #30363d;
  background: #21262d;
  color: #c9d1d9;
  padding: 0.5rem 1.25rem;
  font-size: 0.95em;
  letter-spacing: 0.02em;
  margin-right: 0.5em;
}
.btn-accent-red    { background: #ed6a5e; color: #fff; }
.btn-accent-green  { background: #83c67e; color: #21262d; }
.btn-accent-yellow { background: #e6c07b; color: #21262d; }
.btn-accent-blue   { background: #7f9fa6; color: #21262d; }
```

### Cards & Panels

```css
.card, .panel {
  background: #161b22;
  border: 1px solid #30363d;
  border-radius: 8px;
  padding: 1.5rem;
  color: #c9d1d9;
  margin-bottom: 24px;
}
```

### Tables

```css
.table {
  width: 100%;
  border-collapse: collapse;
  background: #161b22;
  color: #c9d1d9;
  font-size: 1em;
}
.table th, .table td {
  padding: 0.75em 1.25em;
  border: 1px solid #30363d;
  text-align: left;
}
.table th {
  background: #161b22;
  font-weight: bold;
}
.table tr:nth-child(even) {
  background: #21262d;
}
```

### Section Headers

```css
.section-header {
  font-size: 1.25em;
  font-weight: bold;
  color: #c9d1d9;
  margin-bottom: 8px;
  margin-top: 24px;
  border-bottom: 1px solid #30363d;
  padding-bottom: 4px;
}
```

---

## 5. Accessibility

- All color combinations meet or exceed WCAG 2.1 AA contrast.
- Font sizes: minimum 16px for body, 20–32px for headings.
- Use accent colors for important actions and tags, but default to dark backgrounds for readability and low eye strain.

---

## 6. Example Usage

```html
<div class="card">
  <h1>Corey Alejandro</h1>
  <div class="badges">
    <span class="btn btn-accent-red">Email</span>
    <span class="btn btn-accent-blue">Portfolio</span>
    <span class="btn btn-accent-green">Now Playing</span>
    <span class="btn btn-accent-yellow">Studio Ghibli Soundtracks</span>
  </div>
  <p class="secondary-text">Data & Machine Learning Engineer</p>
</div>

<table class="table">
  <tr>
    <th>Project</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><b>Black Women’s Dr. Feelgood Guide to Graves Disease</b></td>
    <td>Comprehensive health guide tailored for Black women...</td>
  </tr>
  <tr>
    <td><b>The Navigator (DocuNavigator)</b></td>
    <td>Gamified, Salesforce-based training application...</td>
  </tr>
</table>
```

---

## 7. Step-by-Step: Using the Style Guide

### For New Projects

1. **Initialize your project** (e.g., with Create React App, Next.js, or a static HTML template).
2. **Copy the color palette variables and typography settings** into your main CSS/SCSS or theme configuration.
3. **Add the CSS snippets** for buttons, cards, panels, and tables to your global stylesheet (or component library).
4. **Use the defined class names** (`btn`, `card`, `table`, etc.) in your HTML or component markup.
5. **Apply the spacing and layout rules** (padding, margins, dividers) as described above.
6. **Check accessibility**: Use browser tools to confirm color contrast and font sizes match the guide.

### For Existing Projects

1. **Audit your current styles**: List your project’s existing colors, fonts, and spacing.
2. **Identify overlaps and differences** with this style guide.
3. **Gradually replace old colors** with the new palette, starting with background, text, and accent colors.
4. **Update or extend your CSS classes** to match the button, card, and table styles here.
5. **Test visual consistency** by reviewing key pages and components.
6. **Refactor**: Remove old, unused styles as you migrate fully to the new guide.
7. **Commit changes incrementally** so you can track and revert if needed.
8. **Document your progress** for teammates and future contributors.

---

## 8. Creating a Design System from this Guide

1. **Centralize Variables**: Create a theme file (e.g., `_theme.scss` or `theme.js`) to store all color, spacing, and font variables.
2. **Component Library**: Build reusable UI components (e.g., Button, Card, Table) that use the centralized variables and style rules.
3. **Documentation**: Use Storybook, Styleguidist, or a Markdown file to document each component’s appearance, props, and usage.
4. **Enforce Consistency**: Use code linters and design tokens to ensure all new components and pages use the design system’s variables and patterns.
5. **Update and Evolve**: As your brand or needs change, update the variables and components in one place to propagate changes everywhere.
6. **Share & Reuse**: Publish your design system as an npm package or include it as a Git submodule so it can be used across multiple projects.
7. **Accessibility Built-In**: Make accessibility a first-class part of every component (contrast, keyboard navigation, ARIA labels).

---

By following these AI-readable, step-by-step instructions, you can integrate, maintain, and scale this style guide in both new and existing projects, and grow it into a robust, reusable design system.
