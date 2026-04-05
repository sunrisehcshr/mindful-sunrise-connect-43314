import re

path = "src/app/medicaid-therapy/page.tsx"
with open(path, "r") as f:
    content = f.read()

content = content.replace(
    '<input\n                        type="text"\n                        name="honeypot"',
    '<input\n                        id="honeypot"\n                        type="text"\n                        name="honeypot"'
)

with open(path, "w") as f:
    f.write(content)

# Fix any honeypot missing id in AppointmentForm.tsx
path_app = "src/components/Appointment/AppointmentForm.tsx"
with open(path_app, "r") as f:
    content = f.read()
content = content.replace(
    '<input\n                type="text"\n                name="honeypot"',
    '<input\n                id="appointment-honeypot"\n                type="text"\n                name="honeypot"'
)
with open(path_app, "w") as f:
    f.write(content)

path_app_q = "src/components/Appointment/QuickAppointmentForm.tsx"
with open(path_app_q, "r") as f:
    content = f.read()
content = content.replace(
    '<input type="text" name="honeypot"',
    '<input id="quick-appointment-honeypot" type="text" name="honeypot"'
)
with open(path_app_q, "w") as f:
    f.write(content)

