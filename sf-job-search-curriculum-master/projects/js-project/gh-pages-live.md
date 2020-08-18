# Host a live front-end project using Github Pages

If you want to add a custom domain like www.awesomesite.com, follow this guide: [Link to set up a custom domain][custom-domain]. Accessing this on GitHub? Use [this link][github-custom-domain].

[custom-domain]: custom-github-pages-domain
[github-custom-domain]: https://github.com/appacademy/sf-job-search-curriculum/blob/master/projects/js-project/gh-pages-custom-domain.md

### Note: Your project must: 

- [ ] Have, as your project's HTML source, an index.html file in the repo's root directory.
- [ ] Have no back-end.
- [ ] Include the bundled Javascript file (from when Webpack transpiled your source code).

1. In the settings menu of your github project repo, scroll down to the section called Github Pages.

![github-pages](https://assets.aaonline.io/fullstack/job-search/projects/js-project/gh-pages-images/github-pages.png)

2. Change the Source from **none** to **master** branch or **gh-pages** branch. It's recommended to create a gh-pages branch for github hosting, but it's up to you. Master works fine too. Commit and push to the chosen branch.

3. In an hour or so, your website will be available at {github username}.github.io/{repo_name} ex: johndoe.github.io/coolproject
