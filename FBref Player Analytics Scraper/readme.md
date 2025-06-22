# FBref Player Analytics Scraper

A Python scraper that extracts comprehensive football analytics data from FBref player profiles and saves them as CSV files.

## What It Does

This script transforms a player's FBref URL into 9 separate CSV files containing different statistical categories. Perfect for analysts who need clean, structured data without manual copying from web tables.

## Requirements

```python
pandas
matplotlib
seaborn
numpy
```

## Usage

1. **Set the player URL**: Replace the URL with any FBref player profile
```python
url = 'https://fbref.com/en/players/2c0558b8/Jamal-Musiala'
```

2. **Run the script**: It automatically extracts and saves all statistical tables

3. **Get your data**: Find 9 CSV files named with the player's name as prefix

## Output Files

The script generates these CSV files:

- `{Player}_Standard_stats.csv` - Goals, assists, basic performance
- `{Player}_Shooting.csv` - Shot metrics and conversion rates  
- `{Player}_Passing.csv` - Pass completion, distance, direction
- `{Player}_Passing_Types.csv` - Pass type breakdown (crosses, corners, etc.)
- `{Player}_Goal_ShotCreation.csv` - Actions leading to shots/goals
- `{Player}_Defensive_Actions.csv` - Tackles, blocks, interceptions
- `{Player}_Possession.csv` - Touches, carries, dribbles
- `{Player}_Playing_Time.csv` - Minutes played across competitions
- `{Player}_Misc.csv` - Cards, fouls, offsides, aerial duels

## Example

For Jamal Musiala, you'll get files like:
- `Jamal-Musiala_Standard_stats.csv`
- `Jamal-Musiala_Shooting.csv`
- etc.

## Notes

- Works with any FBref player profile URL
- Player name is automatically extracted from the URL
- Each CSV maintains FBref's original column structure

## Quick Start

```python
# Just change this line to your target player
url = 'https://fbref.com/en/players/YOUR_PLAYER_ID/Player-Name'

# Run all cells - that's it!
```
