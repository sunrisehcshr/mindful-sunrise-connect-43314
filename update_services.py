import re

with open('/workspace/src/app/services/ServicesClient.tsx', 'r') as f:
    content = f.read()

# 1. Update Image
content = content.replace(
    'https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_1600/v1774918015/diverse-couple-on-a-therapy-session-in-a-psycholog-2026-03-25-04-41-39-utc_jebtlc.jpg',
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80'
)

# 2. Add Grief Therapy after Medication Management
new_services_list = """    {
      title: "Medication Management",
      link: "/medication-management-darby-pa",
      desc: "Ongoing psychiatric care and prescription monitoring to ensure your medications are safe, effective, and properly balanced.",
      image: "https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_800/v1774918385/doctor-give-advice-about-medicine-or-vitamin-to-el-2026-01-08-05-55-04-utc_fvofy1.jpg"
    },
    {
      title: "Grief & Loss Therapy",
      link: "/grief-therapy-darby-pa",
      desc: "Compassionate bereavement support to help you process profound loss, honor your loved ones, and find a path forward.",
      image: "https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_800/v1774918388/sad-woman-crying-at-psychotherapy-session-comfort-2026-03-25-06-38-04-utc_hfj8y7.jpg"
    }"""
content = content.replace("""    {
      title: "Medication Management",
      link: "/medication-management-darby-pa",
      desc: "Ongoing psychiatric care and prescription monitoring to ensure your medications are safe, effective, and properly balanced.",
      image: "https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_800/v1774918385/doctor-give-advice-about-medicine-or-vitamin-to-el-2026-01-08-05-55-04-utc_fvofy1.jpg"
    }""", new_services_list)

# 3. Ogilvy Copywriting
# Hero Section
content = content.replace("Mental Health Services in <br className=\"hidden md:block\" />", "Find the Right Care in <br className=\"hidden md:block\" />")
content = content.replace("Expert therapy, counseling, and psychiatric care for children, teens, adults, and families in Delaware County. We proudly and exclusively accept Medicaid.", "Stop letting waitlists and confusing networks delay your healing. Get immediate access to expert therapy and psychiatric care in Delaware County. We proudly and exclusively accept Medicaid.")

# Why Choose Us Section
content = content.replace("Expert therapy & psychiatric care <br />", "Expert therapy & psychiatric care <br className=\"hidden md:block\" />")

# 4. FAQ Structure (Replace the current static map with the SpotlightItem accordion)
# First, add the SpotlightItem component definition at the top if it's not there, or we can just import it.
# Wait, IndividualTherapyClient defines SpotlightItem inside or imports it? Let's check.
