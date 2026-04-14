# Quick Start Checklist

Get your portfolio ready to send with job applications in 30 minutes.

## ✅ Essential Steps (Required)

### 1. Personal Information (5 minutes)
- [ ] Update email in `src/components/Contact.jsx`
- [ ] Update GitHub username in `src/components/Contact.jsx` and `src/components/Navbar.jsx`
- [ ] Update LinkedIn profile in `src/components/Contact.jsx`
- [ ] Update Fiverr profile (or remove if not using)
- [ ] Update name in `src/components/Hero.jsx` (change "Saleem" to your name)
- [ ] Update footer name in `src/components/Footer.jsx`
- [ ] Update navbar logo in `src/components/Navbar.jsx`

### 2. Resume (2 minutes)
- [ ] Add your `resume.pdf` to the `public/` folder
- [ ] Test the download button works

### 3. Projects (15 minutes)
- [ ] Update project GitHub links in `src/components/Projects.jsx`
- [ ] Add live demo URLs (or keep as `null`)
- [ ] Customize project descriptions to match your actual projects
- [ ] Update tech stacks to match what you actually used

### 4. Test Everything (5 minutes)
- [ ] Click all navigation links
- [ ] Test all external links open correctly
- [ ] Check mobile responsiveness (use browser dev tools)
- [ ] Verify resume downloads
- [ ] Check for console errors (F12)

### 5. Deploy (3 minutes)
- [ ] Push code to GitHub
- [ ] Deploy to Vercel/Netlify (see `DEPLOYMENT.md`)
- [ ] Test live site
- [ ] Share the URL!

## 🎨 Optional Improvements (Do Later)

### Content Polish
- [ ] Customize About section bio
- [ ] Update skills to match your exact skillset
- [ ] Refine project descriptions
- [ ] Update services offered
- [ ] Add more specific achievements

### Design Tweaks
- [ ] Change color scheme (see `CUSTOMIZATION.md`)
- [ ] Update fonts if desired
- [ ] Add your own project screenshots
- [ ] Create custom favicon

### SEO & Analytics
- [ ] Update meta tags in `index.html`
- [ ] Add Google Analytics
- [ ] Add Open Graph image
- [ ] Submit to Google Search Console

## 🚀 Launch Checklist

Before sending to recruiters:

- [ ] All personal links work correctly
- [ ] Resume downloads successfully
- [ ] No placeholder text remains
- [ ] No console errors
- [ ] Mobile responsive
- [ ] Fast loading (< 3 seconds)
- [ ] Professional email address
- [ ] GitHub profile is public and active
- [ ] LinkedIn profile is complete

## 📝 Files You MUST Edit

Minimum required changes:

1. **`src/components/Contact.jsx`**
   - Lines with email, GitHub, LinkedIn, Fiverr

2. **`src/components/Navbar.jsx`**
   - Line with GitHub link
   - Line with logo/name

3. **`src/components/Hero.jsx`**
   - Line with your name

4. **`src/components/Projects.jsx`**
   - All GitHub repository links
   - All demo URLs

5. **`src/components/Footer.jsx`**
   - Line with your name

6. **`public/resume.pdf`**
   - Add your actual resume

## 🎯 Priority Order

If you're short on time, do these in order:

1. **Critical** (5 min): Contact info + name
2. **Important** (5 min): Resume + project links
3. **Recommended** (10 min): Project descriptions
4. **Nice to have** (10 min): About section + skills
5. **Polish** (ongoing): Design tweaks + content refinement

## 🔍 Quick Test Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🆘 Common Issues

**Issue**: Resume won't download
- **Fix**: Make sure `resume.pdf` is in the `public/` folder

**Issue**: Links don't work
- **Fix**: Check that URLs include `https://`

**Issue**: Site won't start
- **Fix**: Run `npm install` first

**Issue**: Changes don't appear
- **Fix**: Save the file and refresh browser (Vite auto-reloads)

**Issue**: Mobile looks broken
- **Fix**: Clear browser cache and test in incognito mode

## 📱 Testing on Mobile

1. Open browser dev tools (F12)
2. Click device toolbar icon
3. Select different device sizes
4. Test all sections and interactions

Or use your actual phone:
1. Find your local IP: `ipconfig` (Windows) or `ifconfig` (Mac/Linux)
2. Visit `http://YOUR_IP:5173` on your phone
3. Make sure you're on the same WiFi network

## 🎉 You're Ready!

Once you've completed the Essential Steps checklist:
1. Deploy to Vercel or Netlify
2. Get your live URL
3. Add it to your resume
4. Include it in job applications
5. Share on LinkedIn

## 📚 Additional Resources

- Full customization guide: `CUSTOMIZATION.md`
- Deployment instructions: `DEPLOYMENT.md`
- Project overview: `README.md`

---

**Time estimate**: 30 minutes to job-application ready
**Difficulty**: Beginner-friendly
**Result**: Professional portfolio that helps you get interviews
