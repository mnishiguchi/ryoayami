# ryoayami website

[![Netlify Status](https://api.netlify.com/api/v1/badges/cf22c3f7-bf93-4707-9718-b44391ad928c/deploy-status)](https://app.netlify.com/sites/ryoayami/deploys)

This is the ryoayami's blog website. Its pages are generated with [Hugo static site generator](https://gohugo.io). Its content management system (CMS) is built with [Netlify CMS](https://www.netlifycms.org/).

## Dependencies

Make sure these are installed:

```
hugo version
node --version
npm --version
```

Install Node dependencies:

```
npm install
```

## Commands

- `hugo server --noHTTPCache`
  - start a development server
  - See `hugo help server`
- `hugo`
  - compile the Hugo site to be deployed
  - See `hugo help`

## Production

This site is hosted on [Netlify](https://gohugo.io/hosting-and-deployment/hosting-on-netlify/).
