
# Football xG Analysis

A data visualization project that analyzes Expected Goals (xG) vs Actual Goals for teams in Europe's top 5 football leagues for **2024-2025** Season.

## Overview

This project fetches real-time football statistics from FBref and creates an interactive scatter plot visualization showing which teams are overperforming or underperforming relative to their Expected Goals (xG).

## Features

- **Real-time data**: Fetches current season statistics from FBref
- **Interactive visualization**: Color-coded scatter plot with performance indicators
- **Team annotations**: Highlights top overperformers and underperformers
- **Professional styling**: Modern, publication-ready charts

## Usage

1. Click the **Run** button to execute the analysis
2. The script will:
   - Fetch current league data from FBref
   - Calculate performance differences (Goals Scored - Expected Goals)
   - Generate a scatter plot visualization
   - Save the chart as `football_xg_analysis.png`

## Understanding the Visualization

- **X-axis**: Expected Goals (xG) - statistical prediction of goals a team should score
- **Y-axis**: Goals Scored (GF) - actual goals scored by the team
- **Color coding**: 
  - Red/Orange: Teams underperforming their xG
  - Blue: Teams overperforming their xG
- **Diagonal line**: Perfect correlation line (where xG equals actual goals)
- **Annotations**: 
  - Green boxes: Top 10 overperforming teams
  - Red boxes: Top 10 underperforming teams

## Dependencies

- `pandas`: Data manipulation and web scraping
- `matplotlib`: Chart creation and styling
- `seaborn`: Statistical visualization enhancements
- `numpy`: Numerical operations
- `lxml`: HTML parsing for web data

## Data Source

Data is sourced from [FBref.com](https://fbref.com/en/comps/Big5/Big-5-European-Leagues-Stats), which provides comprehensive football statistics for Europe's top 5 leagues:
- Premier League (England)
- La Liga (Spain)
- Bundesliga (Germany)
- Serie A (Italy)
- Ligue 1 (France)

## Output

The visualization is saved as a high-resolution PNG file (`football_xg_analysis.png`) that can be used for presentations, reports, or sharing on social media.

## License

This project is open source and available under the MIT License.
