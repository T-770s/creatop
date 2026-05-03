import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'תנאי שימוש',
  description: 'תנאי השימוש של Creatop Universe.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="תנאי שימוש"
      subtitle="כללי המשחק. קצרים וברורים."
      lastUpdated="מאי 2026"
    >
      <section>
        <h2>1. הסכמה לתנאים</h2>
        <p>
          השימוש באתר Creatop Universe מהווה הסכמה לתנאים שלהלן. אם אינך מסכים לתנאים — אנא
          הימנע מהשימוש בשירות.
        </p>
      </section>

      <section>
        <h2>2. השירות</h2>
        <p>
          Creatop Universe הוא פלטפורמת חוויה דיגיטלית תלת-מימדית לעסקים. השירות מוצע
          &quot;AS IS&quot; ועשוי להשתנות, להתעדכן או להיסגר ללא הודעה מוקדמת.
        </p>
      </section>

      <section>
        <h2>3. שימוש מותר</h2>
        <ul>
          <li>שימוש פרטי, אישי, ובלתי מסחרי.</li>
          <li>אסור לבצע reverse engineering, scraping מסיבי, או ניסיונות פריצה.</li>
          <li>אסור להשתמש בשירות לפעילות בלתי חוקית.</li>
        </ul>
      </section>

      <section>
        <h2>4. תוכן וזכויות יוצרים</h2>
        <p>
          כל הזכויות בתוכן, בעיצוב ובקוד שייכות ל-Creatop ולשותפים שלנו. כל שכפול, הפצה או
          שימוש מסחרי ללא רשות מפורשת בכתב — אסור.
        </p>
      </section>

      <section>
        <h2>5. תוכן משתמשים ועסקים</h2>
        <p>
          עסקים המוצגים בפלטפורמה אחראים לתוכן ולמידע שמסרו. Creatop משמשת כפלטפורמה
          ויזואלית בלבד ואינה אחראית לאיכות מוצרים או שירותים של עסקים חיצוניים.
        </p>
      </section>

      <section>
        <h2>6. הגבלת אחריות</h2>
        <p>
          השירות מוצע ללא אחריות מכל סוג, מפורשת או מכללא. Creatop לא תהיה אחראית לכל נזק
          ישיר, עקיף, מקרי או תוצאתי הנובע מהשימוש בשירות, במידה המרבית המותרת על-פי דין.
        </p>
      </section>

      <section>
        <h2>7. דרישות מערכת</h2>
        <p>
          השירות דורש דפדפן מודרני (Chrome, Safari, Firefox, Edge גרסאות עדכניות) עם תמיכה
          ב-WebGL 2.0. ביצועים אופטימליים על מכשירים עם GPU ייעודי.
        </p>
      </section>

      <section>
        <h2>8. שינויים בתנאים</h2>
        <p>
          תנאים אלה עשויים להתעדכן מעת לעת. נמשיך להשתמש בשירות לאחר שינוי = הסכמה לתנאים
          המעודכנים.
        </p>
      </section>

      <section>
        <h2>9. דין וסמכות שיפוט</h2>
        <p>
          על תנאים אלה יחול הדין הישראלי בלבד. סמכות השיפוט הבלעדית נתונה לבתי המשפט
          המוסמכים בתל אביב-יפו.
        </p>
      </section>

      <section>
        <h2>10. יצירת קשר</h2>
        <p>
          שאלות על תנאי שימוש —{' '}
          <a href="mailto:legal@creatop.app" className="text-cyan-400 hover:underline">
            legal@creatop.app
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
