import re

with open('/workspace/src/app/services/ServicesClient.tsx', 'r') as f:
    content = f.read()

# 1. Individual Therapy card image broken fix
content = content.replace(
    'https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_800/v1774918385/young-woman-with-her-psychologist-during-a-therapy-2025-11-20-15-46-12-utc_d2c80h.jpg',
    'https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_800/v1774918057/cropped-shot-of-a-man-having-a-therapeutic-session-2026-03-25-02-43-30-utc_bzrrq0.jpg'
)

# 2. Hero Image to Image 1
image1 = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20blonde%20female%20therapist%20in%20glasses%20and%20a%20red%20top%20comforting%20a%20crying%20Black%20man%20with%20his%20face%20in%20his%20hands&image_size=landscape_16_9'
content = content.replace(
    'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
    image1
)

# 3. Grief Therapy card image to Image 2
image2 = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Close-up%20of%20a%20person%27s%20hand%20on%20the%20shoulder%20of%20a%20Black%20man%20with%20dreadlocks%20looking%20down%20in%20distress&image_size=landscape_16_9'
content = content.replace(
    'https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto,w_800/v1774918388/sad-woman-crying-at-psychotherapy-session-comfort-2026-03-25-06-38-04-utc_hfj8y7.jpg',
    image2
)

# 4. Remove CTA Banner after FAQ
import re
cta_pattern = re.compile(r'\{\/\* SECTION 5: CTA Banner \*\/\}.*?\{\/\* Medical Reviewer \/ E-E-A-T Footer Section \(Visually Hidden for SEO\) \*\/\}', re.DOTALL)
content = cta_pattern.sub('{/* Medical Reviewer / E-E-A-T Footer Section (Visually Hidden for SEO) */}', content)

# 5. Fix Wrapper background and Transitions
content = content.replace(
    '<div className="bg-stone-50 relative z-10 -mt-10 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.15)]">',
    '<div className="bg-white relative z-10 -mt-10 rounded-t-[3rem] overflow-hidden shadow-[0_-30px_60px_rgba(0,0,0,0.15)]">'
)

content = content.replace(
    '<section className="py-16 md:py-24 bg-white relative overflow-hidden">\n            <CurveTransition fillColor="#fafaf9" />',
    '<section className="py-16 md:py-24 bg-stone-50 relative overflow-hidden">\n            <CurveTransition fillColor="#ffffff" />'
)

# Remove any CurveTransition from Section 2 (Why Choose Us) if it exists, because it should just be bg-white on bg-white
# Actually wait, I should make sure Section 2 is bg-white.
# Section 2 starts with `<section className="py-16 md:py-24 bg-white relative overflow-hidden">`
# Let's ensure it doesn't have a CurveTransition
content = content.replace(
    '<section className="py-16 md:py-24 bg-white relative overflow-hidden">\n            <CurveTransition fillColor="#fafaf9" />',
    '<section className="py-16 md:py-24 bg-white relative overflow-hidden">'
)
content = content.replace(
    '<section className="py-16 md:py-24 bg-white relative overflow-hidden">\n            <CurveTransition fillColor="#ffffff" />',
    '<section className="py-16 md:py-24 bg-white relative overflow-hidden">'
)

# Wrap AppointmentSection with CurveTransition
old_appointment = """          {/* SECTION 3: Appointment */}
          <AppointmentSection />"""
new_appointment = """          {/* SECTION 5: Appointment */}
          <div className="relative z-10 bg-white pb-24 md:pb-32 -mt-1">
            <CurveTransition fillColor="#fafaf9" />
          </div>
          <div className="bg-white pt-24 md:pt-32 -mt-24 md:-mt-32">
            <AppointmentSection />
          </div>"""
content = content.replace(old_appointment, new_appointment)

with open('/workspace/src/app/services/ServicesClient.tsx', 'w') as f:
    f.write(content)

# Update Grief Therapy Hero Image
with open('/workspace/src/app/grief-therapy-darby-pa/GriefTherapyClient.tsx', 'r') as f:
    grief_content = f.read()

grief_content = grief_content.replace(
    'https://res.cloudinary.com/dabsxebx8/image/upload/f_auto,q_auto/v1774918388/sad-woman-crying-at-psychotherapy-session-comfort-2026-03-25-06-38-04-utc_hfj8y7.jpg',
    image2
)

with open('/workspace/src/app/grief-therapy-darby-pa/GriefTherapyClient.tsx', 'w') as f:
    f.write(grief_content)

print("Final fixes applied.")
