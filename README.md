Note

Note is a full-featured, modern note-taking web application built with Next.js, Prisma, and Tailwind CSS. The application focuses on providing a smooth and structured workflow for managing personal notes, supporting features such as tagging, pinning, soft deletion, and user authentication.

Features

User Authentication: Secure login and account management using Better Auth and GitHub OAuth.

Create, Edit, Delete Notes: Users can create, update, and delete their personal notes.

Pin Notes: Important notes can be pinned to the top of the list for quick access.

Tagging System: Notes can be tagged with custom tags including optional colors, allowing better organization and categorization.

Soft Delete and Trash Management: Deleted notes are soft deleted and moved to a trash page. Users can restore or permanently delete notes from the trash.

Responsive User Interface: Built using Tailwind CSS, the app provides a clean, modern, and responsive layout.

Dark Mode Support: Users can toggle between light, dark, and system themes.

Technology Stack

Frontend: Next.js, React, Tailwind CSS, Framer Motion

Backend: Next.js API Routes, Prisma ORM

Database: PostgreSQL (hosted on Supabase)

Authentication: Better Auth with GitHub OAuth integration

Current State

The application is fully functional for note management with the following capabilities:

Users can log in securely via GitHub.

Notes can be created, edited, and deleted.

Notes can be pinned to highlight important items.

Tags can be added to notes (with optional colors) for categorization.

Soft-deleted notes are available in a separate Trash page, where they can be restored or permanently deleted.

Dark mode is supported across the interface.

The app is structured for maintainability and scalability, allowing for future expansion into AI-assisted note management, advanced search, and other productivity features.

Setup and Installation

Clone the repository:

git clone <repository-url>
cd saasnote


Install dependencies:

npm install


Configure environment variables: Create a .env file with the following variables:

DATABASE_URL=<Your Supabase/Postgres connection string>
DIRECT_URL=<Your direct database URL>
BETTER_AUTH_URL=<Your app URL>
BETTER_AUTH_SECRET=<Your secret>
GITHUB_CLIENT_ID=<Your GitHub OAuth Client ID>
GITHUB_CLIENT_SECRET=<Your GitHub OAuth Client Secret>
NEXT_PUBLIC_APP_URL=<Your app URL>


Run the development server:

npm run dev


Access the app at http://localhost:3000
.

Deployment

SaaSNote can be deployed to Vercel. Before deploying, set the environment variables in the Vercel dashboard to match your local .env configuration. Each push to the main branch will trigger an automatic deployment.
