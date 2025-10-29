import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import numpy as np

# Install and setup Open Sans font for Google Colab, add the two lines below if you are using Google Colab
# !apt-get -qq install fonts-open-sans
# !fc-cache -fv

# Set up the style
plt.style.use('seaborn-v0_8-whitegrid')
sns.set_palette("husl")

# Configure matplotlib for crisp visuals
import matplotlib

plt.rcParams['figure.dpi'] = 300
plt.rcParams['savefig.dpi'] = 300
plt.rcParams['font.family'] = 'sans-serif'
plt.rcParams['font.sans-serif'] = ['Open Sans', 'DejaVu Sans']
plt.rcParams['font.size'] = 10
plt.rcParams['axes.labelsize'] = 12
plt.rcParams['axes.titlesize'] = 14
plt.rcParams['xtick.labelsize'] = 10
plt.rcParams['ytick.labelsize'] = 10
plt.rcParams['legend.fontsize'] = 10
plt.rcParams['figure.titlesize'] = 16

# Fetch data
url = 'https://fbref.com/en/comps/Big5/Big-5-European-Leagues-Stats'
df = pd.read_html(url, attrs={'id': 'big5_table'})[0]

# Calculate performance difference top 10
df['difference'] = df['GF'] - df['xG']
overperformers = df.nlargest(10, 'difference')
underperformers = df.nsmallest(10, 'difference')

# Create a modern scatter plot
fig, ax = plt.subplots(figsize=(12, 8), facecolor='white')

# Create scatter plot with gradient colors based on performance
scatter = ax.scatter(df['xG'], df['GF'],
                    c=df['difference'],
                    cmap='RdYlBu',
                    s=100,
                    alpha=0.7,
                    edgecolors='white',
                    linewidth=1.5)

# Add colorbar
cbar = plt.colorbar(scatter, ax=ax)
cbar.set_label('Goals Scored vs xG', fontsize=11)

# Style the axes
ax.set_xlabel('Expected Goals (xG)', fontweight='medium')
ax.set_ylabel('Goals Scored (GF)', fontweight='medium')
ax.set_title('Expected Goals vs Actual Goals\nTop 5 European Leagues',
             fontweight='bold', pad=20)

# Add reference line
line_range = [df['xG'].min() - 5, df['xG'].max() + 5]
ax.plot(line_range, line_range, 'k--', alpha=0.4, linewidth=1.5, label='Expected = Actual')

# Annotate overperformers with style
for i in range(len(overperformers)):
    row = overperformers.iloc[i]
    ax.annotate(row['Squad'],
                xy=(row['xG'], row['GF']),
                xytext=(5, 5),
                textcoords='offset points',
                fontsize=9,
                color='darkgreen',
                weight='medium',
                bbox=dict(boxstyle='round,pad=0.3',
                         facecolor='white',
                         edgecolor='darkgreen',
                         alpha=0.8))

# Annotate underperformers with style
for i in range(len(underperformers)):
    row = underperformers.iloc[i]
    ax.annotate(row['Squad'],
                xy=(row['xG'], row['GF']),
                xytext=(5, -15),
                textcoords='offset points',
                fontsize=9,
                color='darkred',
                weight='medium',
                bbox=dict(boxstyle='round,pad=0.3',
                         facecolor='white',
                         edgecolor='darkred',
                         alpha=0.8))

# Improve grid and spines
ax.grid(True, alpha=0.3, linestyle='-', linewidth=0.5)
ax.spines['top'].set_visible(False)
ax.spines['right'].set_visible(False)
ax.spines['left'].set_linewidth(0.5)
ax.spines['bottom'].set_linewidth(0.5)

# Set axis limits with padding
ax.set_xlim(df['xG'].min() - 5, df['xG'].max() + 5)
ax.set_ylim(df['GF'].min() - 5, df['GF'].max() + 5)

plt.tight_layout()
plt.savefig('Top Leagues Scatter Plot analysis.png', bbox_inches='tight', facecolor='white')
print("Plot saved as 'Top Leagues Scatter Plot analysis.png'")
plt.show()
