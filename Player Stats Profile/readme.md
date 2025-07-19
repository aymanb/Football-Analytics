
# Football Player Statistics Dashboard

A dynamic, responsive web application that displays football player statistics loaded from CSV files. Features team-specific color themes, animated UI elements, and comprehensive performance metrics.

## Features

- **Dynamic CSV Data Loading**: Load player statistics from any CSV file
- **Team Color Themes**: Automatic styling based on player's team
- **Responsive Design**: Optimized for desktop and mobile devices
- **Interactive UI**: Hover effects, animations, and gradient backgrounds
- **Comprehensive Stats**: Six categories of player performance metrics
- **Achievement Badges**: Highlight player accomplishments
- **Error Handling**: Graceful fallbacks for data loading issues

## Demo

The dashboard displays statistics for Kylian Mbappé's 2024/25 Real Madrid season, including:
- ⚽ Attacking Performance (Goals, Assists, Hat Tricks)
- 🎯 Shooting Stats (Accuracy, Shots per 90)
- ⏱️ Playing Time (Appearances, Minutes)
- 🛡️ Defensive Actions (Tackles, Interceptions)
- 📊 Advanced Metrics (xG, Pass Completion)
- 📝 Discipline & Penalties

## File Structure

```
├── index.html              # Main HTML template
├── style.css              # Responsive CSS with animations
├── script.js              # JavaScript for data loading and templating
├── player_stats_csv.csv   # Sample player data
├── script_explanation.md  # Detailed code documentation
└── README.md             # This file
```

## Quick Start

1. **Clone or download** the project files
2. **Replace** `player_stats_csv.csv` with your player's data
3. **Open** `index.html` in a web browser or deploy to a web server
4. **Customize** team colors in `script.js` if needed

## CSV Data Format

Your CSV file should follow this structure:

```csv
Player Name,Kylian Mbappe
Team,Real Madrid
Season,2024/25
League,La Liga
Goals,31
Assists,3
Hat Tricks,2
Goals per 90,0.96
Total Shots,113
Shooting Accuracy,68.14%
Appearances,34
Minutes Played,2917
Tackles per Game,0.45
Non-Penalty xG per 90,0.73
Pass Completion,85.58%
Yellow Cards,4
Career Penalty %,81.03%
Achievements,La Liga Top Scorer|Real Madrid #1 Scorer|99th Percentile npxG
```

### Required CSV Fields

| Field | Description | Example |
|-------|-------------|---------|
| `Player Name` | Full player name | "Kylian Mbappe" |
| `Team` | Club/team name | "Real Madrid" |
| `Season` | Season identifier | "2024/25" |
| `League` | Competition name | "La Liga" |
| `Goals` | Total goals scored | 31 |
| `Assists` | Total assists | 3 |
| `Appearances` | Games played | 34 |
| `Minutes Played` | Total minutes | 2917 |
| `Achievements` | Pipe-separated list | "Top Scorer\|Best Player" |

## Customization

### Loading Different CSV Files

**Method 1: Replace the default file**
```bash
# Replace player_stats_csv.csv with your data
```

**Method 2: Use URL parameters**
```
https://yoursite.com?csv=custom_player.csv
```

**Method 3: Modify the config**
```javascript
// In script.js
const config = {
    csvUrl: 'your_custom_file.csv'
};
```

### Adding Team Colors

To add a new team's color scheme:

```javascript
// In script.js config object
teamColors: {
    "Your Team": {
        primaryColor: "#your-color",
        secondaryColor: "#your-color",
        accentColor: "#your-color",
        bgPrimary: "#your-color",
        bgSecondary: "#your-color",
        bgTertiary: "#your-color"
    }
}
```

### Styling Customization

The CSS uses custom properties (CSS variables) for easy theming:

```css
:root {
    --primary-color: #e0e1ddff;
    --secondary-color: #415a77ff;
    --accent-color: #778da9ff;
    /* Add more custom properties */
}
```

## Deployment

### Deploy on Replit
1. Import this project to Replit
2. The project is pre-configured with static web server
3. Click "Run" to start the server
4. Use the preview URL to share your dashboard

### Deploy Elsewhere
1. Upload all files to your web server
2. Ensure CSV files are accessible via HTTP
3. No server-side processing required (pure client-side)

## Browser Support

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## Technical Details

- **Framework**: Vanilla JavaScript (no dependencies)
- **Styling**: Pure CSS with custom properties and animations
- **Data Format**: CSV with key-value pairs
- **Responsive**: CSS Grid and Flexbox
- **Performance**: Lightweight (~10KB total)

## Statistics Categories

1. **Attacking Performance**: Goals, assists, involvement rates
2. **Shooting Stats**: Shot accuracy, frequency, efficiency
3. **Playing Time**: Appearances, minutes, game time
4. **Defensive Actions**: Tackles, blocks, aerial duels
5. **Advanced Metrics**: Expected goals (xG), pass completion
6. **Discipline**: Cards, fouls, penalty statistics

## Contributing

1. Fork the repository
2. Create your feature branch
3. Add your enhancements
4. Test with different CSV files
5. Submit a pull request

## License

This project is open source and available under the MIT License.

## Support

For issues or questions:
- Check the `script_explanation.md` for detailed code documentation
- Ensure your CSV file follows the required format
- Verify all required fields are present in your data

---
