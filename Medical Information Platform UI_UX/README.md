# SIMI - Smart Medical Information System

A comprehensive web-based healthcare management platform for patients, doctors, and medical staff.

## 🎨 Design System

**Color Palette:**
- Primary: Medical Blue #1E88E5
- Secondary: Teal #26A69A
- Background: #F5F7FA
- Text: #263238
- Success: #43A047
- Warning: #FB8C00
- Error: #E53935

**Typography:**
- Font Family: Inter (Regular 400, Medium 500, Bold 700)
- Spacing: 8px grid system
- Border Radius: 0.75rem (12px)

**UI Style:**
- Clean Medical/Clinical SaaS design
- Rounded cards with soft shadows
- High accessibility contrast
- Minimal and professional aesthetic

## 📄 Complete Page List (20+ Pages)

### Public Pages
1. **Landing Page** (`/`) - Homepage with doctor search and features
2. **Patient Login** (`/login`) - Authentication for all user types
3. **Patient Registration** (`/register`) - Sign up for patients and doctors
4. **Doctor Search** (`/doctors`) - Search doctors by specialty and location
5. **Doctor Profile** (`/doctors/:id`) - Doctor details, ratings, and booking
6. **Appointment Booking** (`/appointments/book`) - Calendar-based appointment scheduling

### Patient Portal
7. **Patient Dashboard** (`/patient-dashboard`) - Overview, upcoming appointments, notifications
8. **My Appointments** (`/appointments`) - View and manage appointments
9. **Medical History** (`/medical-records`) - Complete medical records
10. **Prescriptions & Documents** (`/prescriptions`) - Digital prescriptions
11. **Lab Results** (`/lab-results`) - Test results and reports
12. **Payments & Invoices** (`/payments`) - Payment history and processing

### Doctor Dashboard
13. **Doctor Dashboard** (`/doctor-dashboard`) - KPIs, revenue, patients, AI alerts
14. **Doctor Calendar** (`/doctor/calendar`) - Daily/weekly schedule management
15. **Patient Management** (`/doctor/patients`) - Patient list and records
16. **Patient Medical Record** (`/patients/:id/record`) - Individual patient history
17. **Consultation Interface** (`/consultation/:id`) - Document visits and generate prescriptions

### Admin/System Pages
18. **AI Prediction Dashboard** (`/ai-scheduling`) - No-show predictions and scheduling optimization
19. **Admin Analytics** (`/admin/analytics`) - System-wide statistics and insights
20. **Financial Analytics** (`/admin/financial`) - Revenue tracking and payment analytics
21. **Notification System** (`/admin/notifications`) - SMS/Email reminder management
22. **Settings & Security** (`/profile`) - User roles, authentication, permissions

### Bonus
23. **Design System** (`/design-system`) - Complete component library showcase
24. **Messages** (`/messages`) - Real-time doctor-patient messaging
25. **Notifications** (`/notifications`) - System notifications

## 🚀 Key Features

### For Patients
- Search and book appointments with doctors
- Access medical records, prescriptions, and lab results
- Secure online payments with Stripe integration
- Real-time messaging with healthcare providers
- Appointment reminders and notifications

### For Doctors
- Manage daily schedule with calendar view
- Access patient records within 2 clicks
- Digital consultation notes and prescription generator
- Patient management dashboard
- Revenue and appointment analytics

### For Administrators
- AI-powered scheduling predictions
- Financial analytics and reporting
- Automated notification and reminder system
- System-wide analytics dashboard
- User and permission management

## 🎯 User Flows

### Flow 1: Patient Books Appointment
1. Search for doctor by specialty/location
2. View doctor profile and availability
3. Select appointment time slot
4. Complete payment
5. Receive confirmation and reminders

### Flow 2: Doctor Consultation
1. View daily schedule on calendar
2. Access patient record (2 clicks)
3. Conduct consultation and document notes
4. Generate digital prescription
5. Schedule follow-up appointment

### Flow 3: AI Scheduling Optimization
1. View AI predictions dashboard
2. Review no-show probability and suggestions
3. Accept or reject optimization recommendations
4. System automatically adjusts schedule

## 🛠️ Technology Stack

- **Framework:** React 18 with TypeScript
- **Routing:** React Router v7 (Data Mode)
- **Styling:** Tailwind CSS v4
- **UI Components:** Custom design system with Radix UI primitives
- **Charts:** Recharts for data visualization
- **Animations:** Motion (Framer Motion)
- **Icons:** Lucide React
- **Form Handling:** React Hook Form
- **Notifications:** Sonner

## 🎨 Component Library

- **Buttons:** Primary, Secondary, Outline, Ghost, Icon buttons
- **Forms:** Text inputs, Dropdowns, Date pickers, File uploads
- **Navigation:** Sidebar, Top navbar, Breadcrumbs
- **Cards:** Doctor, Patient, Appointment, Analytics cards
- **Tables:** Sortable, filterable data tables
- **Charts:** Line, Bar, Pie charts with Recharts
- **Modals:** Booking, Payment, Confirmation dialogs
- **Status Elements:** Alerts, Notifications, Badges, Tooltips
- **Calendar:** Day/Week/Month views

## 📱 Responsive Design

- **Desktop:** Full-featured experience with sidebar navigation
- **Tablet:** Optimized layouts with collapsible sidebar
- **Mobile:** Touch-friendly interface with bottom navigation

## ♿ Accessibility

- WCAG 2.1 Level AA compliance
- High contrast color palette
- Keyboard navigation support
- Screen reader compatible
- Focus indicators on all interactive elements

## 🔐 Security Features

- Role-based access control (Patient, Doctor, Admin)
- Secure authentication flow
- HIPAA-compliant data handling considerations
- Protected health information (PHI) safeguards

## 🚦 Getting Started

Visit the landing page at `/` to explore the platform. You can:

1. Browse as a guest and search for doctors
2. Sign up as a patient at `/register`
3. Log in as a doctor to access the doctor dashboard
4. View the admin panel for system management

## 📊 Quick Navigation

- **Patients:** Start at `/patient-dashboard`
- **Doctors:** Start at `/doctor-dashboard`
- **Admins:** Start at `/admin/analytics`
- **Design System:** View at `/design-system`

---

**SIMI** - Making healthcare management smarter, simpler, and more accessible.
