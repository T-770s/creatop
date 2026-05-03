import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'הצהרת נגישות',
  description: 'הצהרת הנגישות של Creatop Universe — מחויבותנו לחוויה שווה לכולם.',
  alternates: { canonical: '/accessibility' },
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="הצהרת נגישות"
      subtitle="אנחנו מחויבים לחוויה שווה לכולם — בכל יכולת, בכל מכשיר."
      lastUpdated="מאי 2026"
    >
      <section>
        <h2>1. המחויבות שלנו</h2>
        <p>
          Creatop Universe פועלת בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, תשנ&quot;ח-1998,
          ולתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות), תשע&quot;ג-2013.
          אנו שואפים לרמת נגישות לפחות AA לפי תקן{' '}
          <a
            href="https://www.w3.org/WAI/WCAG21/quickref/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            WCAG 2.1
          </a>{' '}
          ותקן ישראלי 5568.
        </p>
      </section>

      <section>
        <h2>2. ההתאמות שביצענו</h2>
        <ul>
          <li>תמיכה מלאה בקוראי מסך (NVDA, JAWS, VoiceOver) באמצעות תגיות סמנטיות ו-ARIA.</li>
          <li>ניווט מלא במקלדת — כל אינטראקציה זמינה ב-Tab, Enter, Esc.</li>
          <li>חוזי צבע גבוה לעמודי תוכן.</li>
          <li>גודל טקסט מותאם וגמיש (Responsive Typography).</li>
          <li>תיוג נגיש לכל קישור, כפתור ושדה טופס.</li>
          <li>תמיכה ב-RTL מלאה לעברית.</li>
          <li>אפשרות לצמצם אנימציות (prefers-reduced-motion).</li>
        </ul>
      </section>

      <section>
        <h2>3. חוויה תלת-מימדית</h2>
        <p>
          חוויות 3D עתירות גרפיקה דורשות חומרה ויזואלית. עבור משתמשים שאינם יכולים להשתמש
          בחוויה התלת-מימדית, אנו מספקים גרסה טקסטואלית/דו-מימדית של רוב תוכן העסקים. במידה
          ונתקלת בעמוד שאינו זמין במצב נגיש — אנא דווח לנו.
        </p>
      </section>

      <section>
        <h2>4. מגבלות ידועות</h2>
        <p>
          חלק מהאפקטים הוויזואליים (Bloom, Chromatic Aberration) עשויים להיות בעייתיים עבור
          משתמשים רגישים. במצב &quot;Reduce Motion&quot; של מערכת ההפעלה, אנו מבטלים אפקטים
          אלה אוטומטית.
        </p>
      </section>

      <section>
        <h2>5. אחראי נגישות</h2>
        <p>
          רכז נגישות החברה: צוות Creatop.
          <br />
          דוא&quot;ל:{' '}
          <a href="mailto:accessibility@creatop.app" className="text-cyan-400 hover:underline">
            accessibility@creatop.app
          </a>
        </p>
      </section>

      <section>
        <h2>6. דיווח על בעיות נגישות</h2>
        <p>
          אם נתקלת בבעיית נגישות, נשמח לקבל דיווח מפורט: עמוד, פעולה, מכשיר, טכנולוגיה
          מסייעת. נשתדל לטפל בפנייה תוך 30 ימי עבודה.
        </p>
      </section>

      <section>
        <h2>7. עדכון ההצהרה</h2>
        <p>
          הצהרה זו מתעדכנת באופן שוטף עם השינויים בשירות והשיפורים בנגישות. גרסה עדכנית
          תפורסם תמיד בעמוד זה.
        </p>
      </section>
    </LegalPage>
  );
}
