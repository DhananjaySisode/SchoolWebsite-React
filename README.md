# School Website

### APP Details
- About Page
- Admission Page.
- Contact Page

## Details

### Code Architecture
- ReactJS + Node Proxy app

### Development
- Node Modules install : npm install && npm run init
- To start app : npm run start

### Deployment

#### Method 1 (Dockerfile)
- docker build --tag schoolwebsite:0.0.1 .

#### Method 2 (Standard Build)
- Node Modules install : npm install && npm run init
- Build Client (ReactJS app) : npn run build
- Run Node Server in Production mode : npm run start-server


