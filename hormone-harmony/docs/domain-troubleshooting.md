# Domain Troubleshooting - hormoneharmony.health

**Date:** November 1, 2025
**Issue:** Domain showing old B2B (Pico Molecular) content instead of new B2C (Hormone Harmony) site
**Status:** Resolved - Configuration correct, likely browser cache issue

---

## Investigation Summary

### ✅ What's Configured Correctly

1. **CNAME File**
   - Location: `/CNAME`
   - Content: `hormoneharmony.health`
   - Status: ✅ Correct

2. **GitHub Repository**
   - Repo: `gcharris/hormone-harmony`
   - Remote: `https://github.com/gcharris/hormone-harmony.git`
   - Status: ✅ Correct B2C repo

3. **GitHub Pages Deployment**
   - Workflow: `.github/workflows/deploy.yml`
   - Branch: `main`
   - Build: Vite production build to `/dist`
   - Status: ✅ Active and deploying

4. **Live Site Check**
   - URL: https://hormoneharmony.health
   - Content: **Hormone Harmony (B2C)** ✅
   - NOT showing Pico Molecular (B2B)

---

## Root Cause Analysis

### Most Likely: Browser Cache

**Symptoms:**
- User sees old Pico Molecular site
- Live check shows correct Hormone Harmony site
- CNAME and deployment are configured correctly

**Diagnosis:** Browser is serving cached version of old site

**Solution:**
1. **Hard Refresh:**
   - **Mac Chrome/Safari:** `Cmd + Shift + R`
   - **Windows Chrome:** `Ctrl + Shift + R`
   - **Mac Firefox:** `Cmd + Shift + Delete` (clear cache)

2. **Clear Browser Cache:**
   - Chrome: Settings → Privacy → Clear browsing data → Cached images
   - Safari: Develop → Empty Caches (enable Develop menu first)
   - Firefox: Preferences → Privacy → Clear Data

3. **Private/Incognito Mode:**
   - Test in incognito window (no cache)
   - If shows Hormone Harmony → cache issue confirmed

4. **DNS Cache (if above doesn't work):**
   ```bash
   # Mac
   sudo dscacheutil -flushcache
   sudo killall -HUP mDNSResponder

   # Windows
   ipconfig /flushdns
   ```

---

## Deployment Status

### GitHub Pages Configuration

**Settings → Pages:**
- Source: GitHub Actions
- Branch: `main`
- Custom domain: `hormoneharmony.health`
- HTTPS: Enforced

**Latest Deployment:**
- Check: https://github.com/gcharris/hormone-harmony/actions
- Should show successful builds
- Each push to `main` triggers auto-deploy

---

## Password Gate Implementation

### ✅ Now Enabled

**Password:** `HormoneHarmony2025`

**Component:** `SplashGate.jsx`
- Updated branding from Pico Molecular → Hormone Harmony
- Changed password from `RithmVision2025` → `HormoneHarmony2025`
- Updated welcome message for investor preview
- Changed founder image to `Josie with patch.png`

**Integration:** Added to `App.jsx`
- Password gate shows on first visit
- Unlocks to full site after correct password
- State managed with React useState

---

## Verification Checklist

### Local Development (http://localhost:5173/)
- [ ] Password gate appears on load
- [ ] Logo shows Hormone Harmony circular mark
- [ ] Password `HormoneHarmony2025` unlocks site
- [ ] After unlock, shows full B2C homepage
- [ ] Header has sticky logo lockup
- [ ] Footer has logo lockup

### Production (https://hormoneharmony.health)
- [ ] Hard refresh browser (`Cmd/Ctrl + Shift + R`)
- [ ] Password gate appears
- [ ] Correct branding (Hormone Harmony, not Pico Molecular)
- [ ] Password works
- [ ] Full site loads after unlock
- [ ] No mixed B2B/B2C content

---

## DNS & Domain Settings

### Domain Registrar Settings

**Required DNS Records:**

**For GitHub Pages:**
```
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
CNAME www   gcharris.github.io.
```

**For Apex Domain (hormoneharmony.health):**
- Set A records to GitHub Pages IPs (above)
- Ensure no conflicting CNAME on apex

**Verify:**
```bash
# Check DNS propagation
dig hormoneharmony.health

# Should show:
# hormoneharmony.health. IN A 185.199.108.153 (or similar)
```

**Propagation Time:** Up to 24-48 hours for DNS changes

---

## Common Issues & Solutions

### Issue 1: "This site can't be reached"
**Cause:** DNS not propagated or incorrect A records
**Solution:**
- Wait 24-48 hours
- Verify DNS settings at registrar
- Check https://dnschecker.org/#A/hormoneharmony.health

### Issue 2: Seeing old Pico Molecular site
**Cause:** Browser cache
**Solution:**
- Hard refresh (`Cmd/Ctrl + Shift + R`)
- Clear browser cache
- Try incognito mode

### Issue 3: "Repository not found" 404
**Cause:** CNAME file missing or wrong
**Solution:**
- Check `/CNAME` file exists in repo root
- Content should be exactly: `hormoneharmony.health`
- Commit and push if missing

### Issue 4: Password gate not showing
**Cause:** Not deployed yet
**Solution:**
- Check GitHub Actions for successful deploy
- Wait 2-5 minutes after merge to main
- Hard refresh browser

### Issue 5: HTTPS certificate error
**Cause:** GitHub Pages SSL provisioning
**Solution:**
- Wait 10-15 minutes after first deploy
- GitHub auto-provisions Let's Encrypt cert
- Ensure HTTPS enforcement enabled in repo settings

---

## Deployment Workflow

### How Updates Go Live

1. **Code Change:**
   - Edit files locally
   - Test on http://localhost:5173/

2. **Commit & Push:**
   ```bash
   git add .
   git commit -m "Enable password gate for investor demo"
   git push origin main
   ```

3. **GitHub Actions:**
   - Automatically triggered on push
   - Runs `npm install`
   - Runs `npm run build`
   - Deploys `/dist` to GitHub Pages

4. **Live Site Update:**
   - Takes 2-5 minutes
   - Check: https://github.com/gcharris/hormone-harmony/actions
   - Status: Green ✓ = deployed successfully

5. **View Changes:**
   - Visit https://hormoneharmony.health
   - Hard refresh to see updates
   - May need to clear cache

---

## File Locations

### Critical Files
```
/CNAME                              ← Domain configuration
/src/App.jsx                        ← Password gate integration
/src/components/SplashGate.jsx      ← Password gate component
/public/brand/logos/harmony-mark.png ← Logo for password page
/photos/Josie with patch.png        ← Founder image for gate
/.github/workflows/deploy.yml       ← Auto-deployment config
```

---

## Password Gate Details

### Current Configuration

**Password:** `HormoneHarmony2025`
- Change in: `/src/components/SplashGate.jsx` line 4
- Case-sensitive
- No spaces

**Branding:**
- Title: "WELCOME TO HORMONE HARMONY"
- Message: Investor preview language
- Image: Josie with patch
- Logo: Circular interwoven rings
- Disclaimer: "Investor preview. Platform in development."

**Behavior:**
- Shows on first visit
- Unlocks main site after correct password
- State not persisted (reloads require re-entry)
- Mobile responsive

### To Change Password

1. Edit `/src/components/SplashGate.jsx`
2. Line 4: `const PASSWORD = 'YourNewPassword'`
3. Commit and push to deploy

### To Disable Password Gate

1. Edit `/src/App.jsx`
2. Remove password gate logic (lines 222-235)
3. Or set `const [isUnlocked, setIsUnlocked] = useState(true);` (always unlocked)

---

## Testing Plan

### Before Sharing with Investors

1. **Clear your browser cache completely**
2. **Visit https://hormoneharmony.health**
3. **Verify password gate appears**
4. **Test password: HormoneHarmony2025**
5. **Confirm site unlocks**
6. **Scroll entire page - check all sections**
7. **Test on mobile device**
8. **Share password separately with investors** (not in link)

---

## Support Resources

**Check Deployment Status:**
https://github.com/gcharris/hormone-harmony/actions

**DNS Checker:**
https://dnschecker.org/#A/hormoneharmony.health

**GitHub Pages Docs:**
https://docs.github.com/en/pages

**SSL/HTTPS Info:**
https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https

---

## Summary

**Status:** ✅ Domain configured correctly

**Issue:** Browser cache showing old site

**Solution:**
1. Hard refresh browser (`Cmd/Ctrl + Shift + R`)
2. Clear cache if needed
3. Test in incognito mode

**Password Gate:** ✅ Now enabled with Hormone Harmony branding

**Next Steps:**
1. Push changes to deploy password gate
2. Wait 2-5 minutes
3. Hard refresh https://hormoneharmony.health
4. Verify password gate appears
5. Share password with investors

---

**Last Updated:** November 1, 2025
**Maintained By:** Development Team
