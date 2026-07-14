# Data Project Template

A starter template for data analysis projects. Structure:

project/
├── data/
│   ├── raw/
│   ├── processed/
│   └── external/
├── notebooks/
│   ├── 01_eda.ipynb
│   ├── 02_feature_engineering.ipynb
│   └── 03_modeling.ipynb
├── src/
│   ├── data/
│   ├── features/
│   ├── models/
│   └── visualization/
├── tests/
├── reports/
│   └── figures/
├── requirements.txt
├── environment.yml
└── README.md

How to use:
- Place raw data in `data/raw/` and never modify originals.
- Use `notebooks/` for exploration and `src/` for reusable code.
- Commit code and small datasets; use DVC for large data.
