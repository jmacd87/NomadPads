# NextApp

NextApp is a Next.js-based web application that integrates various third-party services, including authentication, cloud storage, mapping, and UI enhancements.

## Features

- **Next.js 14** for server-side rendering and static site generation
- **NextAuth.js** for authentication and user session management
- **MongoDB with Mongoose** for database interactions
- **Cloudinary** for image uploads and processing
- **Mapbox GL & React Map GL** for interactive maps and geolocation
- **Tailwind CSS** for modern styling
- **React Toastify** for notifications
- **Sharp** for image processing optimization
- **ESLint & TypeScript** for improved code quality and type safety

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/jmacd87/NomadPads.git
   cd nextapp
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

3. Create a `.env.local` file and configure environment variables:

   ```sh
   NEXTAUTH_SECRET=your_secret
   MONGODB_URI=your_mongodb_connection_string
   CLOUDINARY_URL=your_cloudinary_url
   MAPBOX_ACCESS_TOKEN=your_mapbox_access_token
   ```

4. Run the development server:
   ```sh
   npm run dev
   ```
   The application will be available at `http://localhost:3000`.

## Scripts

- `npm run dev` – Start the development server
- `npm run build` – Build the production-ready application
- `npm run start` – Start the production server
- `npm run lint` – Run ESLint to check for code quality

## Folder Structure

```
nextapp/
├── public/          # Static assets
├── pages/           # Next.js pages
├── components/      # Reusable components
├── lib/             # Helper functions and utilities
├── models/          # Mongoose models
├── styles/          # Global styles
├── .env.local       # Environment variables (ignored in git)
├── package.json     # Project dependencies and scripts
└── next.config.js   # Next.js configuration
```

## Dependencies

- **Frontend:** React, Next.js, Tailwind CSS
- **Backend:** NextAuth.js, Mongoose, Cloudinary, Mapbox
- **Utilities:** React Toastify, Sharp, ESLint

## Deployment

To deploy the app, use:

```sh
npm run build
npm run start
```

For production deployment, services like Vercel or AWS can be used.
