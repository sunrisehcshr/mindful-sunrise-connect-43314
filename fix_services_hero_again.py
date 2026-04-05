import re

with open('/workspace/src/app/services/ServicesClient.tsx', 'r') as f:
    content = f.read()

# Fix Hero Image
img1_old = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=A%20blonde%20female%20therapist%20in%20glasses%20and%20a%20red%20top%20comforting%20a%20crying%20Black%20man%20with%20his%20face%20in%20his%20hands&image_size=landscape_16_9'
img1_new = 'https://res.cloudinary.com/dabsxebx8/image/upload/q_auto/f_auto/v1775382830/pexels-alex-green-5699748_suqrnx.jpg'
content = content.replace(img1_old, img1_new)

# Fix Grief Image in Services
img2_old = 'https://coresg-normal.trae.ai/api/ide/v1/text_to_image?prompt=Close-up%20of%20a%20person%27s%20hand%20on%20the%20shoulder%20of%20a%20Black%20man%20with%20dreadlocks%20looking%20down%20in%20distress&image_size=landscape_16_9'
img2_new = 'https://res.cloudinary.com/dabsxebx8/image/upload/q_auto/f_auto/v1775382829/pexels-rdne-9065261_qrpmut.jpg'
content = content.replace(img2_old, img2_new)

# Re-insert Steps (Timeline) Section
# We need to insert it between SECTION 2 (Why Choose Us) and SECTION 3 (Local Context)
with open('/workspace/src/app/individual-therapy-darby-pa/IndividualTherapyClient.tsx', 'r') as f:
    ind_content = f.read()

process_section_match = re.search(r'\{\/\* SECTION 4: The Process \*\/\}.*?\{\/\* SECTION 5: FAQs \*\/\}', ind_content, re.DOTALL)
process_section_code = process_section_match.group(0)
process_section_code = process_section_code.replace('{/* SECTION 5: FAQs */}', '')
process_section_code = process_section_code.replace('<section className="py-16 md:py-32 bg-stone-50 relative overflow-hidden">', '<section className="py-16 md:py-32 bg-white relative overflow-hidden">')
process_section_code = process_section_code.replace('<CurveTransition fillColor="#ffffff" />', '')
process_section_code = process_section_code.replace('SECTION 4: The Process', 'SECTION 2.5: The Process')
process_section_code = process_section_code.replace('href="/#appointment"', 'href="#appointment"')

if 'SECTION 2.5: The Process' not in content:
    content = content.replace(
        "          {/* SECTION 3: Local Context & Service Areas */}",
        f"{process_section_code}\n          {{/* SECTION 3: Local Context & Service Areas */}}"
    )

with open('/workspace/src/app/services/ServicesClient.tsx', 'w') as f:
    f.write(content)

print("Restored.")
