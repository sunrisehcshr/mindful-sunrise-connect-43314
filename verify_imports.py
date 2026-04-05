with open('/workspace/src/app/services/ServicesClient.tsx', 'r') as f:
    content = f.read()

if 'const processSteps =' not in content:
    print("Process steps missing")

if 'const TimelineStep =' not in content:
    print("TimelineStep missing")

if 'const lineHeight = useTransform' not in content:
    print("Hooks missing")
