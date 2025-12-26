# Website Deployment Guide
Since your website is built with **HTML, CSS, and JavaScript** (Static Site), the easiest and fastest way to publish it is using **Netlify** or **Vercel**. Both are free for personal use and support custom domains.

## Option 1: Netlify (Recommended for Drag-and-Drop)
This is the simplest method if you don't want to use Git commands.

1.  **Sign Up**: Go to [netlify.com](https://www.netlify.com/) and sign up.
2.  **Prepare Your Folder**: Make sure your website folder (`celestial-eagle`) has `index.html` at the very top level.
3.  **Upload**:
    *   Log in to the Netlify Dashboard.
    *   Drag and drop your entire project folder into the "Sites" area.
    *   Netlify will upload it and give you a random URL (e.g., `fancy-eagle-123.netlify.app`).
4.  **Connect Domain**:
    *   Go to **Site Settings > Domain Management**.
    *   Click **Add Custom Domain**.
    *   Enter your domain name (e.g., `jonibois.com`).
    *   Netlify will give you DNS instructions. You will need to log in to where you bought your domain (GoDaddy, Namecheap, etc.) and update the **Nameservers** or **DNS Records** (A Record / CNAME) to what Netlify tells you.

## Option 2: Vercel (Fast & Professional)
1.  **Sign Up**: Go to [vercel.com](https://vercel.com/) and sign up.
2.  **Upload**:
    *   Install the Vercel CLI (requires Node.js) OR just connect your GitHub repository if you push your code to GitHub.
    *   If using GitHub: Click "Add New Project" -> Import your repo -> Click Deploy.
3.  **Connect Domain**:
    *   Go to **Settings > Domains**.
    *   Enter your domain.
    *   Vercel will show you the exact DNS records to add to your domain registrar.

## Important Pre-Launch Checklist
Before you go live, double-check these items in your code:
*   [ ] **Title Tags**: Ensure `<title>` in `index.html` matches your brand.
*   [ ] **Favicon**: Add a small icon logo as a favicon.
*   [ ] **Links**: Test all navigation links (Collection, Lab, etc.).
*   [ ] **Images**: Ensure all images load correctly.
*   [ ] **Mobile**: Open the file on your phone (or inspect element) to check mobile view.
