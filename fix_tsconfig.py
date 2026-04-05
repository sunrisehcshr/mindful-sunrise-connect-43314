import re

path = "tsconfig.json"
with open(path, "r") as f:
    content = f.read()

content = content.replace('"target": "es5"', '"target": "es2015"')

with open(path, "w") as f:
    f.write(content)

