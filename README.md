# Home Credit Risk Analysis Project

## Project Overview
This project analyzes credit risk data from Home Credit to predict loan default risk. The analysis includes comprehensive data exploration, feature engineering, machine learning model development, and an **interactive dashboard** for visualization and real-time risk prediction.

## 🎯 New Features

### 🚀 Interactive Dashboard (Latest Addition!)
**Modern web-based dashboard built with Next.js 14, TypeScript, and Recharts**

- **Live Demo**: Run locally at `http://localhost:3000`
- **Features**:
  - 📊 Comprehensive analytics dashboard with 11+ visualizations
  - 🧠 Real-time credit risk prediction tool
  - 🎨 Modern UI with glass morphism and smooth animations
  - 📱 Fully responsive (mobile to 4K displays)
  - 🎯 Interactive sidebar navigation
  - 💫 Donut charts, bar charts, line charts with animations

**Quick Start:**
```bash
cd dashboard
npm install
npm run dev
```

See [QUICK_START.md](QUICK_START.md) and [NAVIGATION_GUIDE.md](NAVIGATION_GUIDE.md) for detailed instructions.

## Dataset Description
The project uses Home Credit default risk dataset which includes:
- **application_train.csv**: Main training data with target variable (loan default)
- **application_test.csv**: Test data for predictions
- **bureau.csv**: Credit bureau data about client's previous credits
- **bureau_balance.csv**: Monthly balances of previous credits in credit bureau
- **credit_card_balance.csv**: Monthly balance snapshots of previous credit cards
- **installments_payments.csv**: Repayment history for previous credits
- **POS_CASH_balance.csv**: Monthly balance snapshots of previous POS and cash loans
- **previous_application.csv**: All previous applications for Home Credit loans

## Notebooks Overview

### 1. `analysis.ipynb`
**Primary exploratory data analysis notebook**
- Data loading and initial exploration
- Missing value analysis
- Feature distribution analysis
- Target variable analysis
- Basic visualizations and insights

### 2. `advanced_analysis.ipynb`
**Deep dive analysis with advanced techniques**
- Advanced feature engineering
- Statistical analysis and hypothesis testing
- Advanced visualizations
- Feature importance analysis
- Cross-validation strategies

### 3. `gradient_boosting.ipynb`
**Machine Learning model development**
- Gradient boosting model implementation
- Hyperparameter tuning
- Model evaluation and validation
- Feature importance analysis
- Model comparison and selection

### 4. `enriched.ipynb`
**Feature enrichment and engineering**
- Data enrichment from secondary datasets
- Advanced feature creation
- Feature selection techniques
- Correlation analysis
- Final feature set preparation

### 5. `tableau.ipynb`
**Data preparation for Tableau visualization**
- Data export for dashboard creation
- Summary statistics generation
- Aggregated data preparation
- Visualization-ready data formatting

### 6. `secondarydata.ipynb`
**Secondary dataset analysis**
- Bureau data analysis
- Credit card balance analysis
- Installments and payments analysis
- Previous applications analysis

## Key Features and Techniques

### Data Processing
- Missing value imputation strategies
- Categorical variable encoding
- Feature scaling and normalization
- Outlier detection and treatment

### Feature Engineering
- Aggregation features from secondary datasets
- Ratio and interaction features
- Time-based features
- Domain-specific credit risk features

### Machine Learning
- Gradient Boosting Classifiers
- HistGradientBoosting for fast training
- Cross-validation for model selection
- ROC-AUC optimization for imbalanced data

### Model Evaluation
- ROC-AUC score optimization
- Cross-validation strategies
- Feature importance analysis
- Model interpretability techniques

## Results and Submissions
The project generated several submission files:
- `submission_baseline.csv`: Baseline model results
- `submission_enriched_gb.csv`: Enhanced gradient boosting model
- `submission_advanced_histgb.csv`: Advanced HistGradientBoosting model
- `submission_gb_histgradientboostingfast.csv`: Fast gradient boosting implementation

## Data Documentation
- `HomeCredit_columns_description.csv`: Detailed column descriptions
- `credit_risk_data_dictionary.csv`: Data dictionary with feature explanations

## Requirements

### Python (Data Analysis & ML)
```python
pandas
numpy
scikit-learn
matplotlib
seaborn
plotly
lightgbm
xgboot
```

### JavaScript/TypeScript (Dashboard)
```json
{
  "next": "14.2.5",
  "react": "18.3.1",
  "typescript": "5.5.4",
  "tailwindcss": "3.4.7",
  "recharts": "2.12.7",
  "framer-motion": "11.3.19"
}
```

## Usage

### Dashboard (Web Interface)
1. Navigate to dashboard directory: `cd dashboard`
2. Install dependencies: `npm install`
3. Process data: `python ../scripts/process_dashboard_data.py`
4. Start dev server: `npm run dev`
5. Open browser: `http://localhost:3000`

### Data Analysis (Jupyter Notebooks)
1. Clone the repository
2. Install required dependencies: `pip install -r requirements.txt`
3. Download the Home Credit dataset
4. Run the notebooks in the following order:
   - `analysis.ipynb` (Basic exploration)
   - `secondarydata.ipynb` (Secondary data analysis)
   - `enriched.ipynb` (Feature engineering)
   - `advanced_analysis.ipynb` (Advanced analysis)
   - `gradient_boosting.ipynb` (Model training)
   - `tableau.ipynb` (Visualization preparation)

## Project Structure
```
Home_credit_risk/
├── README.md
├── QUICK_START.md                    # Dashboard quick start guide
├── NAVIGATION_GUIDE.md               # Dashboard navigation instructions
├── IMPLEMENTATION_SUMMARY.md         # Technical implementation details
├── dashboard/                        # 🎨 Interactive Web Dashboard
│   ├── app/                         # Next.js app directory
│   │   ├── page.tsx                 # Main app with routing
│   │   ├── layout.tsx               # Root layout
│   │   └── globals.css              # Global styles
│   ├── components/                  # React components
│   │   ├── Sidebar.tsx              # Navigation sidebar
│   │   ├── DashboardPage.tsx        # Analytics dashboard
│   │   ├── PredictionPage.tsx       # Risk prediction tool
│   │   ├── DonutChart.tsx           # Donut chart component
│   │   ├── AnimatedBarChart.tsx     # Bar chart component
│   │   ├── AnimatedLineChart.tsx    # Line chart component
│   │   └── StatCard.tsx             # KPI card component
│   ├── lib/                         # Utilities
│   │   └── utils.ts                 # Helper functions
│   ├── public/                      # Static assets
│   │   └── dashboard-data.json      # Processed data (307K+ records)
│   ├── package.json                 # Dependencies
│   └── README.md                    # Dashboard documentation
├── scripts/                         # Utility scripts
│   └── process_dashboard_data.py    # Data processing for dashboard
├── notebooks/
│   ├── analysis.ipynb
│   ├── advanced_analysis.ipynb
│   ├── gradient_boosting.ipynb
│   ├── enriched.ipynb
│   ├── tableau.ipynb
│   └── secondarydata.ipynb
├── submissions/
├── documentation/
└── requirements.txt
```

## Key Insights
- ✅ The project successfully identified key risk factors for loan default
- ✅ Feature engineering from secondary datasets significantly improved model performance
- ✅ Gradient boosting models achieved competitive ROC-AUC scores
- ✅ Advanced analytics revealed important patterns in credit behavior
- ✅ **Interactive dashboard provides real-time risk assessment capabilities**
- ✅ **Visual analytics enable quick identification of risk patterns**

## Dashboard Screenshots
- **Analytics View**: 11+ interactive charts showing risk distribution, demographics, and trends
- **Prediction View**: Real-time credit risk calculator with visual risk assessment
- **Responsive Design**: Works seamlessly on all devices from mobile to 4K displays

## Technologies Used

### Data Science Stack
- Python 3.x
- Pandas & NumPy for data manipulation
- Scikit-learn for ML models
- LightGBM & XGBoost for gradient boosting
- Matplotlib, Seaborn, Plotly for visualization

### Dashboard Stack
- Next.js 14 (React framework)
- TypeScript for type safety
- Tailwind CSS for styling
- Recharts for data visualization
- Framer Motion for animations
- Modern ES6+ JavaScript

## Future Work
- [ ] Implement deep learning approaches
- [ ] Add ensemble methods
- [x] **Develop real-time scoring capabilities** ✅ (Dashboard completed!)
- [x] **Interactive visualization dashboard** ✅ (Dashboard completed!)
- [ ] Deploy dashboard to production (Vercel/AWS)
- [ ] Add user authentication for dashboard
- [ ] Implement model API endpoints
- [ ] Mobile app version
- [ ] Enhanced feature interpretability with SHAP

## Contributors
- Data Analysis and Machine Learning Pipeline Development
- Feature Engineering and Model Optimization
- **Modern Web Dashboard Development** (Latest)

## Documentation
- 📖 [Dashboard Quick Start Guide](QUICK_START.md)
- 🗺️ [Dashboard Navigation Guide](NAVIGATION_GUIDE.md)
- 🔧 [Implementation Summary](IMPLEMENTATION_SUMMARY.md)
- 📊 [Dashboard README](dashboard/README.md)

## License
This project is for educational and research purposes.

---

## 🎉 Latest Updates

**October 2025**: Added comprehensive interactive dashboard
- Modern Next.js 14 application
- Real-time credit risk prediction
- 11+ animated visualizations
- Responsive design (mobile to 4K)
- Glass morphism UI design
- Sidebar navigation with two main views
- 307,511 credit applications processed and visualized