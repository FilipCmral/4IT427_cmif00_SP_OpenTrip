# Open Trip
 
A web app for discovering points of interest in cities around the world. Search any city and explore landmarks, attractions, and hidden gems.
 
## Table of Contents
 
- [Description](#description)
- [Screenshots](#screenshots)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [License](#license)
## Description
 
Open Trip lets users search for a city and browse its points of interest. Each result shows the place's name, category, and rating. Clicking through to a detail page reveals a full description sourced from Wikipedia, an address, a photo, and a link to read more.
 
**Key features:**
- City search with dynamic results
- Points of interest displayed in a responsive card grid
- Detail page per point of interest with photo, description, address, and Wikipedia link
- Client-side routing
- Data fetching with TanStack Query
- Clean UI with CSS Modules
## Technologies
 
- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [TanStack Query](https://tanstack.com/query) — server state management
- [React Router](https://reactrouter.com/) — client-side routing
- [CSS Modules](https://github.com/css-modules/css-modules) — scoped component styling
- [OpenTripMap API](https://dev.opentripmap.com/) — points of interest data
- [Wikimedia API](https://www.mediawiki.org/wiki/API:Main_page) — photos and Wikipedia extracts
## Installation
 
Make sure you have [Node.js](https://nodejs.org/) installed.
 
1. Clone the repository:
```bash
git clone https://github.com/your-username/open-trip.git
cd open-trip
```
 
2. Install dependencies:
```bash
npm install
```
 
3. Create a `.env` file in the root directory and add your OpenTripMap API key:
```
VITE_OPENTRIPMAP_API_KEY=your_api_key_here
```
 
You can get a free API key at [dev.opentripmap.com](https://dev.opentripmap.com/).
 
4. Start the development server:
```bash
npm run dev
```
 
The app will be running at `http://localhost:5173`.
 
## Usage
 
1. On the home page, type a city name into the search bar (e.g. *Prague*, *Berlin*, *London*) and click **Search**.
2. Browse the results — each card shows the place name, category, and rating.
3. Click **See more** on any card to open the detail page.
4. The detail page shows the full name, rating, address, photo, Wikipedia description, and a link to the full Wikipedia article.
5. Use the **Back to search** link to return to results.
## Project Structure
 
```
src/
├── api/                        # Fetch functions for OpenTripMap API
│   ├── fetchPointsOfInterest.ts
│   └── fetchPointOfInterestDetails.ts
├── components/                 # Reusable UI components
│   ├── PointOfInterestCard.tsx
│   ├── PointOfInterestDetailsButton.tsx
│   ├── SearchBar.tsx
│   ├── SearchButton.tsx
│   └── SearchPointsOfInterestForm.tsx
├── context/                    # React context providers
│   ├── SearchPointsOfInterestContext.tsx
│   └── PointOfInterestDetailsContext.tsx
├── hooks/                      # Custom hooks
│   └── useSearchPointsOfInterest.ts
├── pages/                      # Page components
│   ├── SearchForPointsOfInterestPage.tsx
│   └── PointOfInterestDetailsPage.tsx
├── types/                      # TypeScript types
│   └── pointOfInterest.types.ts
├── App.tsx
├── main.tsx
└── index.css                   # Global styles and CSS variables
```