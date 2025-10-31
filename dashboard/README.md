# Home Credit Risk Dashboard 🚀

A stunning, modern dashboard for Home Credit Risk analytics built with cutting-edge technologies. Features beautiful 4K-ready graphics, smooth animations, and comprehensive data visualizations.

![Dashboard Preview](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Modern UI/UX** - Glass morphism effects, smooth animations, and gradient backgrounds
- 🎯 **Sidebar Navigation** - Beautiful collapsible sidebar with smooth transitions
- 📊 **Beautiful Charts** - Donut charts, bar charts, line charts with custom animations
- 🔮 **Credit Risk Prediction** - Interactive form to assess applicant risk in real-time
- 📱 **Responsive Design** - Optimized for all screen sizes (mobile, tablet, desktop, 4K)
- ⚡ **Fast Performance** - Built with Next.js 14 App Router for optimal speed
- 🎭 **Smooth Animations** - Framer Motion powered transitions and interactions
- 🎯 **Type-Safe** - Full TypeScript implementation
- 🌈 **Rich Visualizations** - Multiple chart types with interactive tooltips

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Python 3.8+ (for data processing)

### Step 1: Install Dashboard Dependencies

```bash
cd dashboard
npm install
```

### Step 2: Process Data

First, make sure you have the required Python packages:

```bash
pip install pandas numpy
```

Then run the data processing script:

```bash
cd ..
python scripts/process_dashboard_data.py
```

This will generate `dashboard/public/dashboard-data.json` with all the necessary data for the dashboard.

### Step 3: Run the Dashboard

```bash
cd dashboard
npm run dev
```

The dashboard will be available at [http://localhost:3000](http://localhost:3000)

## 🚀 Build for Production

To create an optimized production build:

```bash
cd dashboard
npm run build
npm start
```

## 📊 Dashboard Components

### Navigation
- **Sidebar** - Collapsible sidebar with smooth animations
  - Dashboard view
  - Prediction view
  - Quick stats panel
  - Collapse/expand functionality

### Dashboard View
#### Key Metrics Cards
- Total Applications
- Default Rate
- Approval Rate
- Average Credit Amount
- Average Income
- Total Credit Volume

#### Visualizations
- **Risk Distribution** - Donut chart showing high vs low risk applications
- **Gender Distribution** - Donut chart of applicant demographics
- **Contract Type** - Cash loans vs revolving loans
- **Income Type Distribution** - Bar chart of various income sources
- **Default Rate by Income** - Comparative analysis
- **Monthly Trends** - Time series line chart with gradient fill
- **Education Level** - Donut chart of education demographics
- **Family Status** - Donut chart of family situations
- **Housing Type** - Donut chart of housing situations
- **Credit Amount Distribution** - Bar chart of credit ranges
- **Age Distribution** - Bar chart of age groups

### Prediction View
- **Interactive Form** - Input applicant details
  - Personal Information (Gender, Age, Children, Family Status)
  - Financial Information (Income, Credit Amount, Employment)
  - Additional Details (Assets, Education, Occupation)
- **Real-time Risk Assessment**
  - Risk Score (0-100)
  - Risk Level (Low/Medium/High)
  - Confidence Level
  - Recommendation
  - Key Risk Factors Analysis

## 🎨 Design Features

- **Glass Morphism Effects** - Modern frosted glass UI elements
- **Gradient Backgrounds** - Animated mesh gradients
- **Floating Animations** - Subtle background element animations
- **Smooth Transitions** - Framer Motion powered page transitions
- **Interactive Charts** - Hover effects and tooltips on all charts
- **4K Ready** - Optimized for high-resolution displays
- **Dark Theme** - Elegant dark color scheme with vibrant accents

## 📁 Project Structure

```
dashboard/
├── app/
│   ├── page.tsx          # Main app with sidebar & routing
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles
├── components/
│   ├── Sidebar.tsx       # Navigation sidebar
│   ├── DashboardPage.tsx # Dashboard view
│   ├── PredictionPage.tsx # Prediction view
│   ├── DonutChart.tsx    # Donut chart component
│   ├── AnimatedBarChart.tsx   # Bar chart component
│   ├── AnimatedLineChart.tsx  # Line chart component
│   └── StatCard.tsx      # Metric card component
├── lib/
│   └── utils.ts          # Utility functions
├── public/
│   └── dashboard-data.json    # Processed data
└── package.json
```

## 🔧 Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette:
- Primary colors (blue shades)
- Accent colors (purple/pink shades)
- Chart colors in component files

### Charts
Modify chart components in `components/` directory:
- Adjust heights, colors, and animations
- Add new chart types
- Customize tooltips and legends

### Data
Update `scripts/process_dashboard_data.py` to:
- Add new metrics
- Create different visualizations
- Process additional data sources

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

## 📧 Contact

For questions or support, please open an issue on GitHub.

---

**Built with ❤️ using the latest web technologies**
