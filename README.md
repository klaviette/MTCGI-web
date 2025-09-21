✨ Features

📈 Market Index Graphs – Line charts with overlayed volume bars to track card values over time.

🔍 Biggest Movers – Highlights cards with the most significant changes within a time window.

🗂 Subgroup Comparisons – Compare by sets, eras, or other custom categories.

🤖 Discord Bot Integration – Query indexes, retrieve graphs, and display data directly in Discord.

💾 Database-backed – Data is fetched, cached, and updated regularly with hourly syncs.

🕸 Web Scraping – Automated with Selenium for reliable market data ingestion.

🛠️ Technologies

Frontend:

React
 (with Vite)

Chart.js
 + react-chartjs-2
 for data visualization

Tailwind CSS
 for styling

Backend & Data:

Firebase
 – Firestore database + hosting + auth (optional)

Selenium
 – web scraping & automated data collection

External APIs for Pokémon TCG market data

Infrastructure:

Docker
 for local Selenium + scraper services

Nginx
 + Cloudflare
 for reverse proxy and security

Discord Bot:

discord.js
 for bot functionality

Generates and sends graphs to servers on command
