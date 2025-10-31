# 🎯 Navigation Guide - Home Credit Risk Dashboard

## 🚀 Current Status

Your dashboard is **LIVE** at: **http://localhost:3000**

## 🗺️ Dashboard Layout

### Sidebar (Left Panel)
The collapsible sidebar is your main navigation hub:

#### Main Navigation Items
1. **📊 Dashboard** - Analytics & Visualizations view
2. **🧠 Prediction** - Credit risk assessment tool

#### Bottom Items
- Reports (coming soon)
- Analytics (coming soon)
- Settings (coming soon)

#### Features
- **Collapse/Expand**: Click the arrow button to toggle sidebar width
- **Active Indicator**: See which page you're on with the gradient highlight
- **System Status**: Green dot indicates all systems operational

---

## 📊 Dashboard View

### What You'll See

#### Top Section - Key Metrics (6 Cards)
- **Total Applications**: 307,511
- **Default Rate**: 8.07%
- **Approval Rate**: 91.93%
- **Average Credit**: Dollar amount
- **Average Income**: Dollar amount
- **Total Volume**: Total credit volume

#### Main Visualizations

1. **Risk Distribution** (Donut Chart)
   - Low Risk vs High Risk breakdown
   - Interactive tooltips on hover

2. **Gender Distribution** (Donut Chart)
   - Male, Female, Other demographics
   - Color-coded segments

3. **Contract Type** (Donut Chart)
   - Cash loans vs Revolving loans

4. **Income Type Distribution** (Bar Chart)
   - Various income sources
   - Vertical bars with counts

5. **Default Rate by Income** (Bar Chart)
   - Risk rates across income types
   - Comparison analysis

6. **Monthly Application Trends** (Line Chart)
   - Time series with gradient fill
   - Application volume over months

7. **Education Level** (Donut Chart)
   - Education demographics

8. **Family Status** (Donut Chart)
   - Marital/family situations

9. **Housing Type** (Donut Chart)
   - Living arrangements

10. **Credit Amount Distribution** (Bar Chart)
    - Credit ranges and counts

11. **Age Distribution** (Bar Chart)
    - Age group analysis

### How to Interact
- **Hover** over any chart for detailed tooltips
- **Scroll** down to see all visualizations
- Charts are **animated** on load and hover

---

## 🧠 Prediction View

### Purpose
Assess credit risk for a new applicant in real-time.

### Form Sections

#### 1. Personal Information
- **Gender**: Male/Female
- **Age**: In years
- **Number of Children**: 0+
- **Family Status**: Married, Single, etc.

#### 2. Financial Information
- **Annual Income**: In dollars
- **Credit Amount**: Requested loan amount
- **Loan Annuity**: Annual payment
- **Employment Days**: How long employed

#### 3. Additional Details
- **Own Car**: Yes/No
- **Own Realty**: Yes/No
- **Housing Type**: Apartment, With parents, etc.
- **Education**: Highest level achieved
- **Occupation**: Job type

### How to Use

1. **Fill out all required fields** (marked with red asterisk)
2. **Click "Calculate Risk Score"** button
3. **Wait 1-2 seconds** for calculation (animated loader)
4. **View Results** in the right panel

### Results Panel

#### Risk Score (Circular Progress)
- **0-30**: Low Risk (Green)
- **31-60**: Medium Risk (Yellow)
- **61-100**: High Risk (Red)

Shows animated circular progress bar with score in center.

#### Risk Level Badge
Color-coded badge showing Low/Medium/High with icon.

#### Confidence Level
Percentage showing model confidence (typically 85-95%).

#### Recommendation
Text recommendation for loan approval:
- **Low Risk**: Approve with standard terms
- **Medium Risk**: Approve with caution
- **High Risk**: Decline or require collateral

#### Key Risk Factors
Horizontal bar chart showing top 5 factors:
- Income/Credit Ratio
- Age
- Employment History
- Education Level
- Assets Ownership

Each factor shows percentage impact on risk score.

### Example Scenario

**Good Applicant (Low Risk)**
- Age: 40
- Income: $80,000
- Credit: $50,000
- Employment: 3650 days (10 years)
- Education: Higher education
- Owns car & realty

**Result**: Risk Score ~20, Low Risk, Recommend Approval

**Risky Applicant (High Risk)**
- Age: 22
- Income: $25,000
- Credit: $100,000
- Employment: 180 days (6 months)
- Education: Lower secondary
- No car or realty

**Result**: Risk Score ~70, High Risk, Recommend Decline

---

## 🎨 Visual Features

### Animations
- **Sidebar**: Smooth expand/collapse
- **Page Transitions**: Fade in/out when switching views
- **Charts**: Animated entry and hover effects
- **Buttons**: Scale and color transitions
- **Progress Bars**: Animated fill effects

### Color Scheme
- **Primary**: Blue tones (#0ea5e9)
- **Accent**: Purple/Pink tones (#d946ef)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Danger**: Red (#ef4444)

### Glass Morphism
Frosted glass effect with:
- Semi-transparent backgrounds
- Backdrop blur
- Subtle borders
- Shadow effects

---

## ⌨️ Keyboard Tips

- **Tab**: Navigate through form fields
- **Enter**: Submit prediction form
- **Scroll**: Navigate long pages
- **Ctrl/Cmd + R**: Refresh page

---

## 📱 Responsive Design

### Desktop (1920px+)
- Full sidebar visible
- 3-column grid for donut charts
- 2-column grid for bar charts
- Maximum data density

### Tablet (768px - 1920px)
- Collapsible sidebar
- 2-column grids
- Adjusted chart heights

### Mobile (<768px)
- Single column layout
- Hamburger menu (if implemented)
- Touch-friendly controls
- Vertical scrolling

---

## 🚀 Quick Actions

### To View Analytics
1. Ensure sidebar shows "Dashboard" highlighted
2. Scroll through visualizations
3. Hover for details

### To Predict Risk
1. Click "Prediction" in sidebar
2. Fill out form (all required fields)
3. Click "Calculate Risk Score"
4. Review results

### To Toggle Sidebar
1. Click arrow button on right edge of sidebar
2. Sidebar collapses to icons only
3. Click again to expand

### To Refresh Data
Currently, data is static from JSON file. To update:
```bash
python scripts/process_dashboard_data.py
```

---

## 🎯 Best Practices

### Dashboard View
- Let charts fully load before interacting
- Use tooltips to understand data points
- Compare metrics across different charts
- Look for patterns in monthly trends

### Prediction View
- Enter realistic values
- Check that income > credit/3 for better rates
- Higher education = lower risk typically
- Longer employment = lower risk
- Asset ownership reduces risk

---

## 🔧 Troubleshooting

### Sidebar Not Responding
- Refresh the page (Ctrl/Cmd + R)
- Check browser console for errors

### Charts Not Loading
- Verify dashboard-data.json exists in public folder
- Check browser console for fetch errors

### Prediction Not Calculating
- Ensure all required fields are filled
- Check for valid number formats
- Look for error messages in browser console

### Page Not Loading
- Verify dev server is running: `npm run dev`
- Check terminal for errors
- Navigate to http://localhost:3000

---

## 💫 Advanced Features

### Coming Soon
- Export reports
- Save predictions
- Historical comparison
- Custom date ranges
- Real-time updates
- User authentication
- API integration

---

## 📚 Learn More

- Check `dashboard/README.md` for technical details
- See `QUICK_START.md` for setup instructions
- Review component files for customization
- Explore Tailwind CSS documentation for styling

---

**Enjoy your beautiful, feature-rich credit risk dashboard!** 🎉
