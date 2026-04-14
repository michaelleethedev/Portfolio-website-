# Customization Guide

This guide will help you personalize the portfolio with your own information.

## 🎯 Priority Customizations (Do These First)

### 1. Update Contact Information

**File**: `src/components/Contact.jsx`

Replace placeholder contact details:
```javascript
{
  label: 'Email',
  value: 'your.email@example.com',  // ← Change this
  href: 'mailto:your.email@example.com'  // ← Change this
},
{
  label: 'GitHub',
  value: 'github.com/yourusername',  // ← Change this
  href: 'https://github.com/yourusername'  // ← Change this
},
{
  label: 'LinkedIn',
  value: 'linkedin.com/in/yourprofile',  // ← Change this
  href: 'https://linkedin.com/in/yourprofile'  // ← Change this
},
```

### 2. Update Navigation Links

**File**: `src/components/Navbar.jsx`

Update GitHub and resume links:
```javascript
<a href="https://github.com/yourusername" ...>  // ← Change this
<a href="/resume.pdf" ...>  // ← Make sure resume.pdf is in public folder
```

### 3. Add Your Resume

1. Export your resume as a PDF
2. Name it `resume.pdf`
3. Place it in the `public/` folder
4. The download buttons will now work

### 4. Update Project Links

**File**: `src/components/Projects.jsx`

For each project, update:
```javascript
{
  github: 'https://github.com/yourusername/project-name',  // ← Your actual repo
  demo: 'https://your-demo-url.com'  // ← Add when you have a live demo
}
```

Set `demo: null` if you don't have a live demo yet.

## 📝 Content Customizations

### Update About Section

**File**: `src/components/About.jsx`

Customize your bio:
```javascript
<p className="about-paragraph">
  // Replace with your own professional summary
  // Keep it focused on business value and practical skills
  // Avoid generic phrases like "passionate developer"
</p>
```

### Update Skills

**File**: `src/components/Skills.jsx`

Modify the skills array:
```javascript
const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'JavaScript', ...]  // ← Add/remove your skills
  },
  // ... other categories
];
```

### Update Projects

**File**: `src/components/Projects.jsx`

Replace with your actual projects:
```javascript
{
  icon: '🤖',  // ← Choose an emoji that fits your project
  title: 'Your Project Name',
  summary: 'One strong sentence about what it does',
  problem: 'What business problem does it solve?',
  features: [
    'Key feature 1',
    'Key feature 2',
    // ... 3-5 features total
  ],
  tech: ['React', 'Node.js', ...],  // ← Your tech stack
  github: 'https://github.com/you/project',
  demo: null  // or 'https://demo-url.com'
}
```

**Tips for writing project descriptions**:
- Frame projects as business solutions, not just code
- Use specific, measurable language
- Highlight the problem you solved
- Focus on impact and value
- Keep features concise and scannable

### Update Services

**File**: `src/components/Services.jsx`

Customize services you offer:
```javascript
{
  icon: '🌐',
  title: 'Your Service',
  description: 'What you provide',
  details: [
    'Specific deliverable 1',
    'Specific deliverable 2',
    // ...
  ]
}
```

## 🎨 Design Customizations

### Change Colors

**File**: `src/index.css`

Update CSS variables:
```css
:root {
  --color-primary: #2563eb;  /* Main brand color */
  --color-primary-dark: #1e40af;  /* Darker shade for hovers */
  --color-secondary: #0f172a;  /* Dark text color */
  --color-text: #1e293b;  /* Body text */
  --color-text-light: #64748b;  /* Lighter text */
}
```

**Color palette suggestions**:
- Blue (current): Professional, trustworthy
- Green (#10b981): Growth, innovation
- Purple (#8b5cf6): Creative, modern
- Orange (#f97316): Energetic, bold

### Change Font

**File**: `src/index.css`

Replace the Google Fonts import:
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700&display=swap');
```

Update the font family:
```css
body {
  font-family: 'YourFont', -apple-system, BlinkMacSystemFont, ...;
}
```

**Font suggestions**:
- Inter (current): Modern, professional
- Poppins: Friendly, geometric
- Roboto: Clean, neutral
- Montserrat: Bold, contemporary

### Adjust Spacing

**File**: `src/index.css`

Modify spacing variables:
```css
:root {
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;
  --spacing-2xl: 4rem;
  --spacing-3xl: 6rem;
}
```

## 🔧 Advanced Customizations

### Add New Section

1. Create component files:
   ```
   src/components/YourSection.jsx
   src/components/YourSection.css
   ```

2. Import in `App.jsx`:
   ```javascript
   import YourSection from './components/YourSection';
   ```

3. Add to the main component:
   ```javascript
   <YourSection />
   ```

4. Add navigation link in `Navbar.jsx`

### Modify Hero Section

**File**: `src/components/Hero.jsx`

Update the title and subtitle:
```javascript
<h1 className="hero-title">
  Hi, I'm <span className="hero-name">Your Name</span>
</h1>
<p className="hero-subtitle">
  Your professional tagline
</p>
```

Change the floating cards:
```javascript
<div className="hero-card hero-card-1">
  <div className="hero-card-icon">💼</div>  // ← Change emoji
  <div className="hero-card-text">Your Text</div>  // ← Change text
</div>
```

### Add Social Media Links

**File**: `src/components/Footer.jsx`

Add new links to the footer:
```javascript
<a href="https://twitter.com/yourhandle" ...>
  Twitter
</a>
```

## 📱 Mobile Customization

All components are responsive by default. To adjust mobile breakpoints:

**File**: `src/index.css` or individual component CSS files

```css
@media (max-width: 768px) {
  /* Tablet styles */
}

@media (max-width: 480px) {
  /* Mobile styles */
}
```

## 🎭 Animation Customization

### Adjust Animation Speed

**File**: `src/index.css`

```css
:root {
  --transition-fast: 150ms ease;
  --transition-base: 200ms ease;
  --transition-slow: 300ms ease;
}
```

### Disable Animations

Remove or comment out animation properties in component CSS files:
```css
/* animation: fadeInUp 0.6s ease; */
```

## 🔍 SEO Customization

**File**: `index.html`

Update meta tags:
```html
<title>Your Name - Software Developer</title>
<meta name="description" content="Your custom description" />
<meta property="og:title" content="Your Name - Portfolio" />
<meta property="og:description" content="Your description" />
```

Add more meta tags:
```html
<meta property="og:image" content="/og-image.jpg" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:creator" content="@yourhandle" />
```

## 📊 Add Analytics

See `DEPLOYMENT.md` for analytics setup instructions.

## 🐛 Testing Your Changes

After making changes:

1. Save all files
2. Check the browser (Vite hot-reloads automatically)
3. Test on mobile (use browser dev tools)
4. Check console for errors (F12 → Console)
5. Test all links and buttons
6. Verify responsive design at different screen sizes

## 💡 Best Practices

- **Keep it professional**: Avoid memes, jokes, or overly casual language
- **Be specific**: Use concrete examples and metrics when possible
- **Stay consistent**: Match the existing tone and style
- **Test thoroughly**: Check all changes on multiple devices
- **Keep it updated**: Regularly update projects and skills
- **Proofread**: Check for typos and grammar errors

## 🆘 Need Help?

- Check the main `README.md` for project structure
- Review component files for examples
- Test changes locally before deploying
- Use browser dev tools to debug CSS issues
- Refer to React documentation for component questions

---

**Remember**: This portfolio is designed to help you get hired. Keep the focus on demonstrating real skills and professional presentation.
