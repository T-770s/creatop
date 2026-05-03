import type { Metadata } from 'next';
import LegalPage from '@/components/legal/LegalPage';

export const metadata: Metadata = {
  title: 'מדיניות פרטיות',
  description: 'מדיניות הפרטיות של Creatop Universe — איך אנחנו מטפלים במידע שלך.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="מדיניות פרטיות"
      subtitle="הפרטיות שלך חשובה לנו. כך אנחנו מטפלים במידע שלך."
      lastUpdated="מאי 2026"
    >
      <section>
        <h2>1. כללי</h2>
        <p>
          מדיניות זו חלה על השימוש באתר ובאפליקציה של Creatop Universe (להלן: &quot;האתר&quot;,
          &quot;השירות&quot;). השימוש בשירות מהווה הסכמה למדיניות זו. אנו פועלים בהתאם לחוק הגנת
          הפרטיות, תשמ&quot;א-1981, ולתקנות הגנת הפרטיות (אבטחת מידע), תשע&quot;ז-2017.
        </p>
      </section>

      <section>
        <h2>2. איזה מידע אנחנו אוספים</h2>
        <ul>
          <li>
            <strong>מידע טכני אנונימי</strong> — סוג מכשיר, דפדפן, שפה, רזולוציה, ביצועי 3D.
          </li>
          <li>
            <strong>נתוני שימוש</strong> — עמודים שביקרת בהם, עסקים שצפית בהם, זמני שהייה.
          </li>
          <li>
            <strong>מידע אישי</strong> — רק אם נמסר על-ידך מרצונך (למשל בטופס יצירת קשר).
          </li>
        </ul>
      </section>

      <section>
        <h2>3. איך אנחנו משתמשים במידע</h2>
        <p>
          המידע משמש לשיפור השירות, התאמת חוויית משתמש, ניתוח תפקוד טכני, ומענה לפניותיך. אנו
          לא מוכרים מידע אישי לצדדים שלישיים.
        </p>
      </section>

      <section>
        <h2>4. עוגיות (Cookies) ואחסון מקומי</h2>
        <p>
          האתר עשוי לעשות שימוש בעוגיות וב-Local Storage לצורך שמירת העדפות, ניתוח תנועה
          (Google Analytics או דומה) ושיפור ביצועים. ניתן לחסום עוגיות בהגדרות הדפדפן.
        </p>
      </section>

      <section>
        <h2>5. אבטחת מידע</h2>
        <p>
          אנו נוקטים אמצעי אבטחה סבירים — הצפנת תעבורה (HTTPS), הפרדת סביבות, ועמידה בתקני
          OWASP. עם זאת, אין להבטיח אבטחה מוחלטת ברשת.
        </p>
      </section>

      <section>
        <h2>6. זכויותיך</h2>
        <ul>
          <li>הזכות לעיין במידע שנשמר עליך.</li>
          <li>הזכות לבקש תיקון או מחיקה של מידע.</li>
          <li>הזכות לבטל הסכמה לעיבוד מידע.</li>
        </ul>
        <p>
          לפניות בנושאי פרטיות:{' '}
          <a href="mailto:privacy@creatop.app" className="text-cyan-400 hover:underline">
            privacy@creatop.app
          </a>
        </p>
      </section>

      <section>
        <h2>7. שירותי צד שלישי</h2>
        <p>
          אנו עשויים להשתמש בשירותי צד שלישי (CDN, ניתוח, שירותי AI). כל ספק כפוף למדיניות
          הפרטיות שלו ולמחויבות אבטחתית מולנו.
        </p>
      </section>

      <section>
        <h2>8. שינויים במדיניות</h2>
        <p>אנו עשויים לעדכן מדיניות זו מעת לעת. גרסה עדכנית תפורסם תמיד בעמוד זה.</p>
      </section>

      <section>
        <h2>9. יצירת קשר</h2>
        <p>
          לכל שאלה או בקשה ניתן לפנות אלינו בכתובת{' '}
          <a href="mailto:hello@creatop.app" className="text-cyan-400 hover:underline">
            hello@creatop.app
          </a>
          .
        </p>
      </section>
    </LegalPage>
  );
}
