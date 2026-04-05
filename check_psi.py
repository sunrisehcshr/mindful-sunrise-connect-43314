import urllib.request
import json
import sys

url = "https://sunrisehumancare.com"
api_base = "https://www.googleapis.com/pagespeedonline/v5/runPagespeed"

categories = "&category=performance&category=accessibility&category=best-practices&category=seo"

def get_scores(strategy):
    req_url = f"{api_base}?url={url}&strategy={strategy}{categories}"
    try:
        req = urllib.request.Request(req_url, headers={'User-Agent': 'Mozilla/5.0'})
        with urllib.request.urlopen(req) as response:
            data = json.loads(response.read().decode())
            
            lighthouse = data.get('lighthouseResult', {})
            cats = lighthouse.get('categories', {})
            
            perf = cats.get('performance', {}).get('score', 0) * 100
            acc = cats.get('accessibility', {}).get('score', 0) * 100
            bp = cats.get('best-practices', {}).get('score', 0) * 100
            seo = cats.get('seo', {}).get('score', 0) * 100
            
            return {
                "Performance": round(perf),
                "Accessibility": round(acc),
                "Best Practices": round(bp),
                "SEO": round(seo)
            }
    except Exception as e:
        return {"error": str(e)}

print("Checking Mobile...")
mobile = get_scores("mobile")
print("Mobile:", mobile)

print("Checking Desktop...")
desktop = get_scores("desktop")
print("Desktop:", desktop)

