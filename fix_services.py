import re

with open('/workspace/src/app/services/ServicesClient.tsx', 'r') as f:
    content = f.read()

# 1. Hero Image
content = content.replace(
    'src="https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_1600/v1774918015/diverse-couple-on-a-therapy-session-in-a-psycholog-2026-03-25-04-41-39-utc_jebtlc.jpg"',
    'src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80"'
)

# 2. Hero Copy
content = content.replace(
    'Mental Health Services in <br className="hidden md:block" />',
    'Find the Right Care in <br className="hidden md:block" />'
)
content = content.replace(
    'Expert therapy, counseling, and psychiatric care for children, teens, adults, and families in Delaware County. We proudly and exclusively accept Medicaid.',
    'Stop letting waitlists and confusing networks delay your healing. Get immediate access to expert therapy and psychiatric care in Delaware County. We proudly and exclusively accept Medicaid.'
)

# 3. Add Grief Therapy to servicesList
old_med_block = """    {
      title: "Medication Management",
      link: "/medication-management-darby-pa",
      desc: "Ongoing psychiatric care and prescription monitoring to ensure your medications are safe, effective, and properly balanced.",
      image: "https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_800/v1774918385/doctor-give-advice-about-medicine-or-vitamin-to-el-2026-01-08-05-55-04-utc_fvofy1.jpg"
    }"""
new_med_block = """    {
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
content = content.replace(old_med_block, new_med_block)

# 4. Typography fix for Section 1 ("Our Specialties")
old_h2_specialties = 'h2 className="font-barlow font-bold text-3xl md:text-5xl text-stone-900 tracking-tight mt-4 mb-6"'
new_h2_specialties = 'h2 className="text-3xl md:text-5xl text-balance font-normal text-stone-900 tracking-tighter leading-tight mt-4 mb-6"'
content = content.replace(old_h2_specialties, new_h2_specialties)

old_text_specialties = 'Care Tailored to You'
new_text_specialties = 'Care Tailored to <span className="font-instrument-serif italic text-orange-500">You.</span>'
content = content.replace(old_text_specialties, new_text_specialties)

# 5. Typography fix for Section 2 ("Why Choose Us")
content = content.replace('Expert therapy & psychiatric care <br />', 'Expert therapy & psychiatric care <br className="hidden md:block" />')

# 6. Curve Transition fillColor fix
content = content.replace('CurveTransition fillColor="#ffffff"', 'CurveTransition fillColor="#fafaf9"')

with open('/workspace/src/app/services/ServicesClient.tsx', 'w') as f:
    f.write(content)

print("Fixes applied.")
