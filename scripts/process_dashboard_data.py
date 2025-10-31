import pandas as pd
import json
import numpy as np

def process_dashboard_data():
    """Process Home Credit data for dashboard visualization"""
    
    # Read the training data
    print("Reading data...")
    df = pd.read_csv('./application_train.csv')
    
    # Calculate key metrics
    total_applications = len(df)
    default_rate = df['TARGET'].mean()
    approved_rate = 1 - default_rate
    
    # Risk distribution
    risk_distribution = df['TARGET'].value_counts().to_dict()
    risk_data = [
        {"name": "Low Risk", "value": int(risk_distribution.get(0, 0)), "color": "#10b981"},
        {"name": "High Risk", "value": int(risk_distribution.get(1, 0)), "color": "#ef4444"}
    ]
    
    # Gender distribution
    gender_dist = df['CODE_GENDER'].value_counts().to_dict()
    gender_data = [
        {"name": "Female", "value": int(gender_dist.get('F', 0)), "color": "#ec4899"},
        {"name": "Male", "value": int(gender_dist.get('M', 0)), "color": "#3b82f6"},
        {"name": "Other", "value": int(gender_dist.get('XNA', 0)), "color": "#a855f7"}
    ]
    
    # Income type distribution
    income_dist = df['NAME_INCOME_TYPE'].value_counts().head(6).to_dict()
    income_data = [{"name": k, "value": int(v)} for k, v in income_dist.items()]
    
    # Contract type
    contract_dist = df['NAME_CONTRACT_TYPE'].value_counts().to_dict()
    contract_data = [{"name": k, "value": int(v)} for k, v in contract_dist.items()]
    
    # Education level
    education_dist = df['NAME_EDUCATION_TYPE'].value_counts().to_dict()
    education_data = [{"name": k, "value": int(v)} for k, v in education_dist.items()]
    
    # Credit amount distribution (by bins)
    credit_bins = pd.cut(df['AMT_CREDIT'], bins=10)
    credit_ranges = credit_bins.value_counts().sort_index()
    credit_data = []
    for interval, count in credit_ranges.items():
        credit_data.append({
            "range": f"${int(interval.left/1000)}K-${int(interval.right/1000)}K",
            "count": int(count)
        })
    
    # Income vs Credit (sample)
    income_credit_sample = df[['AMT_INCOME_TOTAL', 'AMT_CREDIT', 'TARGET']].dropna().sample(min(1000, len(df)))
    income_credit_data = []
    for _, row in income_credit_sample.iterrows():
        income_credit_data.append({
            "income": float(row['AMT_INCOME_TOTAL']),
            "credit": float(row['AMT_CREDIT']),
            "risk": int(row['TARGET'])
        })
    
    # Age distribution (convert days to years)
    df['AGE_YEARS'] = -df['DAYS_BIRTH'] / 365
    age_bins = pd.cut(df['AGE_YEARS'], bins=[0, 25, 35, 45, 55, 65, 100])
    age_dist = age_bins.value_counts().sort_index()
    age_data = []
    for interval, count in age_dist.items():
        age_data.append({
            "ageGroup": f"{int(interval.left)}-{int(interval.right)}",
            "count": int(count)
        })
    
    # Default rate by income type
    default_by_income = df.groupby('NAME_INCOME_TYPE')['TARGET'].agg(['mean', 'count']).reset_index()
    default_by_income = default_by_income[default_by_income['count'] > 100].sort_values('mean', ascending=False).head(6)
    default_income_data = []
    for _, row in default_by_income.iterrows():
        default_income_data.append({
            "category": row['NAME_INCOME_TYPE'],
            "rate": float(row['mean']),
            "count": int(row['count'])
        })
    
    # Time series data (applications over time - simulated based on ID)
    df['application_month'] = (df['SK_ID_CURR'] % 36) + 1
    monthly_apps = df.groupby('application_month').size().reset_index(name='count')
    monthly_data = []
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    for _, row in monthly_apps.iterrows():
        month_idx = (int(row['application_month']) - 1) % 12
        year = 2015 + (int(row['application_month']) - 1) // 12
        monthly_data.append({
            "month": f"{months[month_idx]} {year}",
            "applications": int(row['count'])
        })
    
    # Family status distribution
    family_dist = df['NAME_FAMILY_STATUS'].value_counts().to_dict()
    family_data = [{"name": k, "value": int(v)} for k, v in family_dist.items()]
    
    # Housing type distribution
    housing_dist = df['NAME_HOUSING_TYPE'].value_counts().to_dict()
    housing_data = [{"name": k, "value": int(v)} for k, v in housing_dist.items()]
    
    # Average credit by education
    credit_by_edu = df.groupby('NAME_EDUCATION_TYPE')['AMT_CREDIT'].mean().reset_index()
    credit_edu_data = []
    for _, row in credit_by_edu.iterrows():
        credit_edu_data.append({
            "education": row['NAME_EDUCATION_TYPE'],
            "avgCredit": float(row['AMT_CREDIT'])
        })
    
    # Compile all data
    dashboard_data = {
        "overview": {
            "totalApplications": int(total_applications),
            "defaultRate": float(default_rate),
            "approvalRate": float(approved_rate),
            "avgCreditAmount": float(df['AMT_CREDIT'].mean()),
            "avgIncome": float(df['AMT_INCOME_TOTAL'].mean()),
            "totalCreditVolume": float(df['AMT_CREDIT'].sum())
        },
        "riskDistribution": risk_data,
        "genderDistribution": gender_data,
        "incomeTypeDistribution": income_data,
        "contractTypeDistribution": contract_data,
        "educationDistribution": education_data,
        "creditAmountDistribution": credit_data,
        "incomeCreditScatter": income_credit_data,
        "ageDistribution": age_data,
        "defaultRateByIncome": default_income_data,
        "monthlyApplications": monthly_data,
        "familyStatusDistribution": family_data,
        "housingTypeDistribution": housing_data,
        "avgCreditByEducation": credit_edu_data
    }
    
    # Save to JSON
    with open('./dashboard/public/dashboard-data.json', 'w') as f:
        json.dump(dashboard_data, f, indent=2)
    
    print(f"✅ Dashboard data processed successfully!")
    print(f"Total applications: {total_applications:,}")
    print(f"Default rate: {default_rate:.2%}")
    print(f"Data saved to: dashboard/public/dashboard-data.json")

if __name__ == "__main__":
    process_dashboard_data()
