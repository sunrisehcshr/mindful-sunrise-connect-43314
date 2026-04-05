with open('/workspace/src/app/grief-therapy-darby-pa/GriefTherapyClient.tsx', 'r') as f:
    grief = f.read()

grief = grief.replace("Don't Wait Another Day", "Don't Carry It Alone")
grief = grief.replace("Start feeling better <br className=\"hidden md:block\" />", "Start finding your way through the dark <br className=\"hidden md:block\" />")
grief = grief.replace("<span className=\"font-instrument-serif italic text-yellow-200 font-normal\">this week.</span>", "<span className=\"font-instrument-serif italic text-yellow-200 font-normal\">today.</span>")
grief = grief.replace("You don't have to figure this out alone. Schedule your first appointment today and let our Darby, PA specialists help you move forward.", "You don't have to navigate this profound sorrow by yourself. Schedule your grief counseling session today and let our Darby, PA specialists support you.")
# Also text-balance for h2
grief = grief.replace('h2 className="font-barlow font-normal text-4xl md:text-5xl lg:text-6xl', 'h2 className="text-balance font-barlow font-normal text-4xl md:text-5xl lg:text-6xl')

with open('/workspace/src/app/grief-therapy-darby-pa/GriefTherapyClient.tsx', 'w') as f:
    f.write(grief)

with open('/workspace/src/app/relationship-therapy-darby-pa/RelationshipTherapyClient.tsx', 'r') as f:
    rel = f.read()

rel = rel.replace("Don't Wait Another Day", "Don't Let Conflict Win")
rel = rel.replace("Start feeling better <br className=\"hidden md:block\" />", "Start communicating better <br className=\"hidden md:block\" />")
rel = rel.replace("<span className=\"font-instrument-serif italic text-yellow-200 font-normal\">this week.</span>", "<span className=\"font-instrument-serif italic text-yellow-200 font-normal\">this week.</span>")
rel = rel.replace("You don't have to figure this out alone. Schedule your first appointment today and let our Darby, PA specialists help you move forward.", "You don't have to fix this alone. Schedule your relationship therapy session today and let our Darby, PA specialists help you find your way back to healthy connections.")
# text-balance
rel = rel.replace('h2 className="font-barlow font-normal text-4xl md:text-5xl lg:text-6xl', 'h2 className="text-balance font-barlow font-normal text-4xl md:text-5xl lg:text-6xl')

with open('/workspace/src/app/relationship-therapy-darby-pa/RelationshipTherapyClient.tsx', 'w') as f:
    f.write(rel)

print("CTA fixed")
