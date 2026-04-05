import re

with open('/workspace/src/app/services/ServicesClient.tsx', 'r') as f:
    content = f.read()

# 1. Image 1 replacement (Service Hero Image)
img1_old = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20blonde%20female%20therapist%20in%20glasses%20and%20a%20red%20top%20comforting%20a%20crying%20Black%20man%20with%20his%20face%20in%20his%20hands&image_size=landscape_16_9'
img1_new = 'https://res.cloudinary.com/dabsxebx8/image/upload/q_auto/f_auto/v1775382830/pexels-alex-green-5699748_suqrnx.jpg'
content = content.replace(img1_old, img1_new)

# 2. Image 2 replacement (Grief Card)
img2_old = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Close-up%20of%20a%20person%27s%20hand%20on%20the%20shoulder%20of%20a%20Black%20man%20with%20dreadlocks%20looking%20down%20in%20distress&image_size=landscape_16_9'
img2_new = 'https://res.cloudinary.com/dabsxebx8/image/upload/q_auto/f_auto/v1775382829/pexels-rdne-9065261_qrpmut.jpg'
content = content.replace(img2_old, img2_new)

# 3. Remove inline CurveTransition function
curve_func_pattern = re.compile(r'function CurveTransition\(\{ fillColor \}: \{ fillColor: string \}\) \{.*?\n\}\n\n', re.DOTALL)
content = curve_func_pattern.sub('', content)

# 4. Add CurveTransition import if not present
if 'import CurveTransition' not in content:
    content = content.replace("import SectionTag from '@/components/ui/section-tag';", "import SectionTag from '@/components/ui/section-tag';\nimport CurveTransition from '@/components/ui/CurveTransition';")

# 5. Fix Section 4 (FAQ) background.
# Wait, Section 4 is currently: `<section className="py-16 md:py-24 bg-stone-50 relative overflow-hidden">`
# and it has `<CurveTransition fillColor="#ffffff" />`. That is correct, because it's transitioning from bg-white.
# BUT wait! Does it have `<CurveTransition fillColor="#ffffff" />`? Yes.
# Let's ensure it has `relative overflow-hidden` and a bit of padding.
# In IndividualTherapyClient, Section 5 (FAQ) has:
# <section className="py-16 md:py-24 bg-stone-50 relative overflow-hidden">
#   <CurveTransition fillColor="#fafaf9" />

# Section 5 (Appointment) in ServicesClient:
# <div className="relative z-10 bg-white pb-24 md:pb-32 -mt-1">
#   <CurveTransition fillColor="#fafaf9" />
# </div>
# <div className="bg-white pt-24 md:pt-32 -mt-24 md:-mt-32">
#   <AppointmentSection />
# </div>
# This is also correct.

with open('/workspace/src/app/services/ServicesClient.tsx', 'w') as f:
    f.write(content)

# 6. Update Grief Therapy Hero Image
with open('/workspace/src/app/grief-therapy-darby-pa/GriefTherapyClient.tsx', 'r') as f:
    grief_content = f.read()

grief_content = grief_content.replace(img2_old, img2_new)

with open('/workspace/src/app/grief-therapy-darby-pa/GriefTherapyClient.tsx', 'w') as f:
    f.write(grief_content)

print("Updates applied.")
