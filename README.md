# Personal Portfolio Website

A personal portfolio website built with React, Vite and Tailwind CSS. It presents my background, skills,
projects and contact details in English and Thai.

## Features

- **Responsive design**: works on phones, tablets and desktops.
- **Bilingual**: switch between English (EN) and Thai (TH).
- **Smooth navigation**: smooth scrolling between the Home, About, Projects and Contact sections.
- **Clean UI**: styled with Tailwind CSS.

## Tech Stack

- **Frontend Framework**: [React](https://react.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)

## Getting Started

### Prerequisites

- Node.js 20.19+ (required by Vite 7)
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/xsieux292/My-Portfolio-Website.git
   ```

2. Navigate to the project directory:
   ```bash
   cd My-Portfolio-Website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Project

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

Build the project for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/         # Static assets (images, etc.)
├── components/     # Page sections: Header, Hero, About, Projects, Contact, Footer
├── context/        # React Context (e.g., LanguageContext)
├── data/           # Static data and translations
├── App.jsx         # Main application component
└── main.jsx        # Entry point
```
