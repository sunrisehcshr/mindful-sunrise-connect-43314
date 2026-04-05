import re

path = "src/components/Appointment/AppointmentForm.tsx"
with open(path, "r") as f:
    content = f.read()

content = re.sub(r'<input\s+type="text"\s+name="honeypot"', r'<input id="appointment-honeypot" type="text" name="honeypot"', content)

with open(path, "w") as f:
    f.write(content)
