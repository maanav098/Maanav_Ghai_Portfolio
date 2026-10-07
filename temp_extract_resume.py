from pathlib import Path
import pypdf

base = Path(r'C:\Users\Maanav\OneDrive - Manipal University Jaipur\Desktop\PROJECTS\Cursorfolio\public')
for f in sorted(base.glob('*.pdf')):
    print('FILE:', f.name)
    try:
        reader = pypdf.PdfReader(str(f))
        text = ''
        for page in reader.pages:
            text += (page.extract_text() or '') + '\n---PAGE---\n'
        print(text[:5000])
    except Exception as e:
        print('EXTRACT ERROR', type(e).__name__, e)
    print('\n====\n')
