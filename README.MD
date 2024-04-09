# Rustybass Website
## Strapi + NextJS SSG


### Commands

#### Development

`npm run:dev`

to sync types between backend and frontend (could be improved):

`npm run sync:types`

#### Build

first run the backend

`npm run dev:backend`

with the backend running, build with:

`npm run build`

This will create an output folder that can be hosted on a static hosting solution like netlify or aws


### Version 1 (current)

Render static site offline and publish on Netlify
Images hosted on cloudinary (free)

- Minimal overhead costs

### Version 2

Host Strapi somewhere
- SSG in the cloud

