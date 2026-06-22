# Football-Analytics

_**In this Repo**_

## Europe Top 5 Leagues 
This project fetches data for 2024-2025 season from FBref and creates an scatter plot visualization showing which teams are overperforming or underperforming relative to their Expected Goals (xG).

## Pressure Map for Serie A clubs
Pressure events, percentage point difference
from Serie A 2021/22 after Match Day 20

## Data Extraction & Transformation
Parsing raw StatsBomb data and storing it in a Pandas DataFrame

## Template for Football Pitch types Using mplsoccer

## FBref Player Analytics Scraper
This script transforms a player's FBref URL into 9 separate CSV files containing different Stats categories.

## EXA Agent — Football Manager Research

Uses the [Exa Agent API](https://exa.ai/blog/exa-agent) to produce tactical and career research briefs for football managers. Exa Agent combines frontier language models with Exa's web search tools to deliver structured, source-backed research through a single API call.

The notebook (`EXA_Agent_Extended_Football_Managers.ipynb`) researches each manager across six dimensions:

- Tactical philosophy & preferred system
- Career history & trophy haul
- Key strengths
- Known weaknesses & criticisms
- Peer comparisons & rivalries
- Source URLs

### Configuration

Edit the `MANAGERS` list to research any set of managers:

```python
MANAGERS = [
    {"manager": "Jose Mourinho"},
    {"manager": "Pep Guardiola"},
]
```

### Prerequisites

- An [Exa API key](https://dashboard.exa.ai) stored in Google Colab secrets as `EXA_KEY`
- `pip install exa_py`

### Exa Agent Pricing

| Effort | Cost | Best for |
| --- | --- | --- |
| `minimal` | $0.012 / request | Lightweight tasks, lowest cost |
| `low` | $0.025 / request | Simple lookups, narrow factual tasks |
| `medium` | $0.10 / request | Standard research tasks |
| `high` | $0.50 / request | Harder research, more citations |
| `xhigh` | $1.00 / request | High-value tasks where completeness matters |

The notebook uses `auto` effort, which dynamically scales compute to the task.

**Links:** [Exa Agent Blog Post](https://exa.ai/blog/exa-agent) · [API Docs](https://exa.ai/docs/reference/agent-api-guide) · [Playground](https://dashboard.exa.ai/playground/agent)
