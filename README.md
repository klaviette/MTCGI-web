# Trading Card Game Index & Price Tracker

A web application and Discord bot for tracking Pokémon card market data, visualizing trends, and comparing sets/eras over time.

For each TCG IP, we aggregate data from top cards based on a rigid selection criteria, and create a market-cap weighted index that takes into account price, volatility, and trade volume. We hope that this weighted index will help collectors make decisions based on market moves.

This project combines a React-based frontend, a Firebase Realtime DB backend, and Discord bot integration to deliver real-time insights for collectors and players. Selenium powers the data collection process, scraping trading card prices and volume data from external sources.

---

## Features

- Market Index Graphs – Line charts with overlayed volume bars to track card values over time  
- Biggest Movers – Highlights cards with the most significant changes within a time window  
- Subgroup Comparisons – Compare by sets, eras, or other custom categories  
- Discord Bot Integration – Query indexes, retrieve graphs, and display data directly in Discord  
- Database-backed – Data is fetched, cached, and updated with regular data syncs
- Web Scraping – Automated with Selenium for reliable market data ingestion

---

## Technologies

**Frontend**
- React (with Vite)  
- Chart.js + react-chartjs-2 for data visualization  
- Tailwind CSS for styling 

**Backend & Data**
- Firebase (Firestore, Hosting, optional Auth)  
- Selenium for web scraping and automated data collection  
- External APIs for Pokémon TCG market data
- Web scraping, index calculation, and web server hosting are done on our personal servers or cloud services

**Infrastructure**
- Docker for local Selenium + scraper services  
- Nginx + Cloudflare for reverse proxy and security  

**Discord Bot**
- discord.js for bot functionality  
- Generates and sends graphs to servers on command  

---

## Data Collection

We use **Selenium** to scrape trading card market data that isn’t directly available via APIs.

- Runs on a schedule (hourly, TBD)  
- Collects card price + trade volume + volatility data
- Caches normalized data to Firebase Realtime DB

This hybrid approach (API + scraping) ensures more complete and timely coverage of card prices.

