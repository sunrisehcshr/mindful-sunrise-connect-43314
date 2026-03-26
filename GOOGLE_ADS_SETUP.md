# Google Ads Conversion Tracking Setup

## Overview
Your new Medicaid landing page at `/medicaid-therapy` is ready for Google Ads campaigns with conversion tracking built-in.

## Setup Instructions

### Step 1: Get Your Google Ads Conversion ID

1. Sign in to your Google Ads account
2. Click the **Tools & Settings** icon in the top right
3. Under "Measurement", click **Conversions**
4. Click the **+ New conversion action** button
5. Select **Website** as the conversion source
6. Fill in the conversion details:
   - **Category**: Submit lead form
   - **Conversion name**: "Medicaid Appointment Request"
   - **Value**: Set to $1 or your estimated lead value
   - **Count**: One (count one conversion per interaction)
7. Click **Create and continue**
8. Copy your **Conversion ID** (format: AW-XXXXXXXXX)
9. Copy your **Conversion Label** (format: XXXXXXXXXX)

### Step 2: Update the Landing Page Code

1. Open `src/pages/MedicaidLanding.tsx`
2. Find this line (around line 136):
   ```typescript
   <script async src="https://www.googletagmanager.com/gtag/js?id=AW-CONVERSION_ID"></script>
   ```
3. Replace `AW-CONVERSION_ID` with your actual Conversion ID

4. Find this line (around line 140):
   ```javascript
   gtag('config', 'AW-CONVERSION_ID');
   ```
5. Replace `AW-CONVERSION_ID` with your actual Conversion ID

6. Find this section (around line 102):
   ```javascript
   trackConversion('conversion', {
     send_to: 'AW-CONVERSION_ID/CONVERSION_LABEL',
     value: 1.0,
     currency: 'USD'
   });
   ```
7. Replace `AW-CONVERSION_ID/CONVERSION_LABEL` with your actual values

### Step 3: Test the Conversion Tracking

1. Visit your landing page: `https://yoursite.com/medicaid-therapy`
2. Fill out and submit the form
3. Check Google Ads > Tools & Settings > Conversions
4. You should see a conversion recorded within 24 hours (test conversions may show immediately)

## Tracked Events

The landing page tracks the following conversion events:

### Primary Conversions
- **form_submit**: Main conversion when appointment form is submitted
- **conversion**: Google Ads conversion tag (this is what you'll optimize for)

### Secondary Events (for optimization)
- **page_view**: Landing page views
- **phone_click**: When user clicks the phone number
- **scroll_to_form**: When user clicks buttons to scroll to form

## Campaign Setup Tips

### 1. Landing Page URL
Use this URL for your Google Ads campaigns:
```
https://sunrisehumancare.com/medicaid-therapy
```

### 2. Recommended Campaign Structure
- **Campaign Type**: Search
- **Goal**: Leads
- **Location**: Delaware County, PA (Darby, Broomall, Drexel Hill, Ardmore, Springfield)
- **Budget**: Start with $30-50/day

### 3. Keyword Suggestions
High-intent keywords:
- medicaid therapist near me
- medicaid psychiatrist darby
- mental health services medicaid
- therapy covered by medicaid pa
- medicaid counseling delaware county
- free therapy with medicaid

### 4. Ad Copy Tips
Highlight these key points:
- ✅ Medicaid Accepted
- ✅ No Out-of-Pocket Costs
- ✅ Same-Day Appointments
- ✅ Licensed Professionals
- ✅ 5,000+ Patients Served

### 5. Ad Extensions
Enable these extensions:
- **Call Extension**: (814) 620-2162
- **Location Extension**: 869 Main Street, Darby, PA
- **Sitelink Extensions**:
  - Book Appointment
  - Our Services
  - Meet Our Team
  - Insurance Info

## Optimization Tips

### Week 1-2: Learning Phase
- Monitor conversions daily
- Keep budgets stable
- Don't make major changes

### Week 3+: Optimization Phase
- Pause keywords with 0 conversions after 50+ clicks
- Increase bids on high-converting keywords
- Add negative keywords for irrelevant searches
- Test different ad copy variations

### Target Metrics
- **Click-Through Rate (CTR)**: Aim for 5%+
- **Conversion Rate**: Aim for 10%+ (10 conversions per 100 clicks)
- **Cost Per Conversion**: Target $20-40 (adjust based on patient lifetime value)

## Remarketing Setup (Optional)

Consider creating a remarketing audience for users who:
1. Visited the landing page but didn't convert
2. Scrolled to the form but didn't submit
3. Clicked phone number but didn't call

## Support

If you need help with Google Ads setup or conversion tracking:
1. Google Ads Support: https://support.google.com/google-ads
2. Conversion Tracking Guide: https://support.google.com/google-ads/answer/1722022

## Important Notes

- **HIPAA Compliance**: The form does NOT collect personal health information, only contact details and service interest
- **Secure Connection**: All data is transmitted over HTTPS
- **Privacy**: Form includes disclaimer about not sharing health details
- **Spam Protection**: Built-in honeypot and rate limiting to prevent fake submissions

## Next Steps

1. ✅ Set up Google Ads Conversion Tracking (follow Step 1-2 above)
2. ✅ Update the conversion ID in the code
3. ✅ Test the form submission
4. ✅ Create your Google Ads campaign
5. ✅ Monitor and optimize based on performance

Good luck with your campaign! 🚀
