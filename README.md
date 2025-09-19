# Home Credit Risk Analysis Project

## Project Overview
This project analyzes credit risk data from Home Credit to predict loan default risk. The analysis includes comprehensive data exploration, feature engineering, and machine learning model development using various gradient boosting techniques.

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
```python
pandas
numpy
scikit-learn
matplotlib
seaborn
plotly
lightgbm
xgboost
```

## Usage
1. Clone the repository
2. Install required dependencies
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
├── notebooks/
│   ├── analysis.ipynb
│   ├── advanced_analysis.ipynb
│   ├── gradient_boosting.ipynb
│   ├── enriched.ipynb
│   ├── tableau.ipynb
│   └── secondarydata.ipynb
├── data/
│   ├── raw/
│   └── processed/
├── submissions/
├── documentation/
└── requirements.txt
```

## Key Insights
- The project successfully identified key risk factors for loan default
- Feature engineering from secondary datasets significantly improved model performance
- Gradient boosting models achieved competitive ROC-AUC scores
- Advanced analytics revealed important patterns in credit behavior

## Future Work
- Implement deep learning approaches
- Add ensemble methods
- Develop real-time scoring capabilities
- Enhance feature interpretability

## Contributors
- Data Analysis and Machine Learning Pipeline Development
- Feature Engineering and Model Optimization

## License
This project is for educational and research purposes.