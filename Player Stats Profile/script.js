// ===== CONFIGURATION - UPDATE THESE SETTINGS =====
const config = {
    // CSV Data Source - Update this URL to your CSV file
    csvUrl: 'player_stats.csv'

    // Or use URL parameter to specify which CSV file to load
    // csvUrl: new URLSearchParams(window.location.search).get('data') || "default-player.csv",
};

// Global variable to store player data
let playerConfig = null;

// ===== CSV DATA LOADING FUNCTIONS =====
async function loadPlayerDataFromCSV() {
    try {
        showLoading(true);

        const response = await fetch(config.csvUrl);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const csvText = await response.text();
        const playerData = parseCSVToPlayerConfig(csvText);

        playerConfig = playerData;
        initializeTemplate();
        showLoading(false);

    } catch (error) {
        console.error('Error loading CSV data:', error);
        showError(`Failed to load player data: ${error.message}`);
    }
}

function parseCSVToPlayerConfig(csvText) {
    const lines = csvText.trim().split('\n');
    const data = {};

    // Parse CSV into key-value pairs
    lines.forEach(line => {
        const [key, value] = line.split(',').map(item => item.trim().replace(/"/g, ''));
        if (key && value !== undefined) {
            data[key] = value;
        }
    });

    // Map CSV data to player config structure
    const playerData = {
        name: data['Player Name'] || data['Name'] || 'Unknown Player',
        team: data['Team'] || data['Club'] || 'Unknown Team',
        season: data['Season'] || '2024/25',
        league: data['League'] || data['Competition'] || 'League',

        stats: {
            attacking: {
                "Goals": { 
                    value: parseInt(data['Goals']) || 0
                },
                "Assists": { value: parseInt(data['Assists']) || 0 },
                "Hat Tricks": { value: parseInt(data['Hat Tricks']) || 0 },
                "Goals per 90 min": { value: parseFloat(data['Goals per 90']).toFixed(2) || "0.00" },
                "Goal Involvement per 90": { value: parseFloat(data['Goal Involvement per 90']).toFixed(2) || "0.00" }
            },
            shooting: {
                "Total Shots": { value: parseInt(data['Total Shots']) || 0 },
                "Shots on Target": { value: parseInt(data['Shots on Target']) || 0 },
                "Shooting Accuracy": { value: data['Shooting Accuracy'] || "0%" },
                "Shots per 90 min": { value: parseFloat(data['Shots per 90']).toFixed(2) || "0.00" },
                "Goal every X shots": { value: parseFloat(data['Goal every X shots']).toFixed(2) || "0.00" }
            },
            playingTime: {
                "Appearances": { value: parseInt(data['Appearances']) || 0 },
                "Minutes Played": { value: data['Minutes Played'] || "0" },
                "Minutes per Game": { value: parseFloat(data['Minutes per Game']).toFixed(1) || "0.0" },
                "Scoring Frequency": { value: data['Scoring Frequency'] || "0 min" }
            },
            defensive: {
                "Tackles per Game": { value: parseFloat(data['Tackles per Game']).toFixed(2) || "0.00" },
                "Interceptions per Game": { value: parseFloat(data['Interceptions per Game']).toFixed(2) || "0.00" },
                "Blocks per Game": { value: parseFloat(data['Blocks per Game']).toFixed(1) || "0.0" },
                "Total Blocks": { value: parseInt(data['Total Blocks']) || 0 },
                "Aerial Duels Won": { value: parseInt(data['Aerial Duels Won']) || 0 }
            },
            advanced: {
                "Non-Penalty xG per 90": { value: parseFloat(data['Non-Penalty xG per 90']).toFixed(2) || "0.00" },
                "npxG Output": { value: parseFloat(data['npxG Output']).toFixed(2) || "0.00" },
                "xA per 90 min": { value: parseFloat(data['xA per 90']).toFixed(2) || "0.00" },
                "Pass Completion": { value: data['Pass Completion'] || "0%" },
                "Key Passes per Game": { value: parseFloat(data['Key Passes per Game']).toFixed(2) || "0.00" }
            },
            discipline: {
                "Yellow Cards": { value: parseInt(data['Yellow Cards']) || 0 },
                "Red Cards": { value: parseInt(data['Red Cards']) || 0 },
                "Fouls per 90 min": { value: parseFloat(data['Fouls per 90']).toFixed(2) || "0.00" },
                "Career Penalty %": { value: data['Career Penalty %'] || "0%" },
                "Career Penalties": { value: data['Career Penalties'] || "0/0" }
            }
        },

        // Parse achievements (comma-separated in CSV)
        achievements: data['Achievements'] ? 
            data['Achievements'].split('|').map(a => a.trim()) : 
            ['Season Complete']
    };

    return playerData;
}

function showLoading(show) {
    const playerName = document.getElementById('player-name');
    const subtitle = document.getElementById('player-subtitle');

    if (show) {
        playerName.textContent = 'Loading Player Data...';
        subtitle.textContent = 'Fetching statistics from CSV...';
    }
}

function showError(message) {
    const playerName = document.getElementById('player-name');
    const subtitle = document.getElementById('player-subtitle');

    playerName.textContent = 'Error Loading Data';
    subtitle.textContent = message;

    // Show fallback message in stats cards
    document.querySelectorAll('.stat-card').forEach(card => {
        const statsContainer = card.querySelector('div[id$="-stats"]');
        if (statsContainer) {
            statsContainer.innerHTML = '<p style="color: #ff6b6b; text-align: center; padding: 20px;">Failed to load data</p>';
        }
    });
}

// ===== TEMPLATE ENGINE =====
function initializeTemplate() {
    if (!playerConfig) {
        console.error('No player config available');
        return;
    }

    // Set page title
    document.getElementById('page-title').textContent = `${playerConfig.name} - ${playerConfig.season} Stats`;

    // Set header info
    document.getElementById('player-name').textContent = playerConfig.name;
    document.getElementById('player-subtitle').textContent = `${playerConfig.season} Season Statistics " ${playerConfig.team}`;

    // Populate stats
    populateStats('attacking-stats', playerConfig.stats.attacking);
    populateStats('shooting-stats', playerConfig.stats.shooting);
    populateStats('playing-time-stats', playerConfig.stats.playingTime);
    populateStats('defensive-stats', playerConfig.stats.defensive);
    populateStats('advanced-stats', playerConfig.stats.advanced);
    populateStats('discipline-stats', playerConfig.stats.discipline);

    // Populate achievements
    populateAchievements();

    // Set footer
    document.getElementById('footer-text').textContent = 
        `Statistics compiled from the ${playerConfig.season} ${playerConfig.league} season " Data as of ${new Date().toLocaleDateString()}`;
}

function populateStats(containerId, statsData) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    Object.entries(statsData).forEach(([label, data]) => {
        const statItem = document.createElement('div');
        statItem.className = 'stat-item';

        const statLabel = document.createElement('span');
        statLabel.className = 'stat-label';
        statLabel.textContent = label;

        const statValue = document.createElement('span');
        statValue.className = data.highlight ? 'stat-value highlight' : 'stat-value';
        statValue.textContent = data.value;

        statItem.appendChild(statLabel);
        statItem.appendChild(statValue);
        container.appendChild(statItem);
    });
}

function populateAchievements() {
    const container = document.getElementById('achievements');
    container.innerHTML = '';

    playerConfig.achievements.forEach(achievement => {
        const badge = document.createElement('div');
        badge.className = 'badge';
        badge.textContent = achievement;
        container.appendChild(badge);
    });
}

// Initialize when page loads - Load from CSV
document.addEventListener('DOMContentLoaded', () => {
    // Check if CSV URL is provided via URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const csvParam = urlParams.get('csv');

    if (csvParam) {
        config.csvUrl = csvParam;
    }

    loadPlayerDataFromCSV();
});