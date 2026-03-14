export const content = `
## 1.1 המבנה של אטום

<div style="display: flex; flex-direction: column; md:flex-row; gap: 2rem; margin: 2rem 0;" dir="rtl">
<div style="flex: 1;">
<p style="margin-bottom: 1rem;">
אטום מורכב מגרעין צפוף וזעיר המוקף באלקטרונים המפוזרים בנפח גדול יחסית של חלל סביב הגרעין הנקרא ענן אלקטרונים. הגרעין מכיל <strong>פרוטונים בעלי מטען חיובי</strong> ו<strong>נויטרונים חסרי מטען</strong>, ולכן הוא טעון חיובית. <strong>האלקטרונים טעונים שלילית</strong>. כמות המטען החיובי על פרוטון שווה לכמות המטען השלילי על אלקטרון. לכן, מספר הפרוטונים ומספר האלקטרונים באטום לא טעון חייב להיות זהה.
</p>
<p style="margin-bottom: 1rem;">
אלקטרונים נעים ברציפות. כמו כל דבר שנע, לאלקטרונים יש אנרגיה קינטית, ואנרגיה זו פועלת נגד כוח המשיכה של הפרוטונים הטעונים חיובית שמושכים את האלקטרונים הטעונים שלילית לעבר הגרעין.
</p>
<p>
לפרוטונים ולנויטרונים יש בערך אותה מסה והם מסיביים פי 1800 בערך מאלקטרון. רוב ה<em>מסה</em> של אטום, לכן, נמצאת בגרעין שלו. רוב ה<em>נפח</em> של אטום, לעומת זאת, תפוס על ידי ענן האלקטרונים שלו. כאן יהיה המיקוד שלנו מכיוון שהאלקטרונים הם אלו שיוצרים קשרים כימיים.
</p>
</div>
<div style="flex-shrink: 0; width: 100%; max-width: 300px; font-size: 0.875rem; color: #1e3a8a; font-weight: 600;">
<div style="margin-bottom: 1rem;">
הגרעין מכיל פרוטונים טעונים חיובית ונויטרונים חסרי מטען.
</div>
<div style="margin-bottom: 1rem;">
האלקטרונים טעונים שלילית.
</div>
<div style="position: relative; height: 200px; display: flex; align-items: center; justify-content: center; margin: 2rem 0;">
<div style="width: 150px; height: 150px; border-radius: 50%; background: radial-gradient(circle, rgba(253,224,71,1) 0%, rgba(253,224,71,0) 70%); position: relative; display: flex; align-items: center; justify-content: center;">
<div style="width: 8px; height: 8px; border-radius: 50%; background-color: #ea580c;"></div>
</div>
<div style="position: absolute; top: 0; left: 50%; transform: translateX(-50%); background-color: #fef08a; border: 1px solid #eab308; padding: 0.25rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; color: #422006;">
גרעין (פרוטונים + נויטרונים)
</div>
<div style="position: absolute; bottom: 0; right: 0; background-color: #fef08a; border: 1px solid #eab308; padding: 0.25rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; color: #422006;">
ענן אלקטרונים
</div>
<svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; pointer-events: none;" viewBox="0 0 300 200">
<line x1="150" y1="20" x2="150" y2="100" stroke="#9ca3af" stroke-width="1" />
<line x1="220" y1="180" x2="160" y2="120" stroke="#9ca3af" stroke-width="1" />
</svg>
</div>
<div style="text-align: center; color: #1c1917; font-weight: bold; margin-bottom: 2rem;">
אטום
</div>
</div>
</div>

<div style="display: flex; flex-direction: column; md:flex-row; gap: 2rem; margin: 2rem 0;" dir="rtl">
<div style="flex-shrink: 0; width: 100%; max-width: 250px; font-size: 0.875rem; color: #1e3a8a; font-weight: 600; display: flex; flex-direction: column; gap: 1.5rem;">
<div>
מספר אטומי = מספר הפרוטונים בגרעין
</div>
<div>
מספר מסה = מספר הפרוטונים + מספר הנויטרונים
</div>
</div>
<div style="flex: 1;">
<p style="margin-bottom: 1rem;">
ה<strong>מספר האטומי</strong> של אטום הוא מספר הפרוטונים בגרעין שלו. המספר האטומי ייחודי ליסוד מסוים. לדוגמה, המספר האטומי של פחמן הוא 6, מה שאומר שלכל אטומי הפחמן הלא טעונים יש שישה פרוטונים ושישה אלקטרונים. למרות שאטומים יכולים לצבור אלקטרונים ולהפוך לטעונים שלילית או לאבד אלקטרונים ולהפוך לטעונים חיובית, מספר הפרוטונים באטום של יסוד מסוים לעולם אינו משתנה.
</p>
<p>
<strong>מספר המסה</strong> של אטום הוא סכום הפרוטונים והנויטרונים שלו. למרות שלכל אטומי הפחמן יש את אותו <em>מספר אטומי</em>, אין להם את אותו <em>מספר מסה</em>. מדוע? מכיוון שלאטומי פחמן יכולים להיות מספרים משתנים של נויטרונים. לדוגמה, ל-98.89% מכל אטומי הפחמן יש שישה נויטרונים - מה שנותן להם מספר מסה של 12 - ול-1.11% יש שבעה נויטרונים - מה שנותן להם מספר מסה של 13. שני הסוגים השונים הללו של אטומי פחמן (<sup>12</sup>C ו-<sup>13</sup>C) נקראים <strong>איזוטופים</strong>.
</p>
</div>
</div>

<div align="center" style="margin: 2rem 0; font-family: sans-serif;" dir="rtl">
<div style="display: flex; justify-content: center; gap: 2rem; align-items: flex-start;">
<div style="position: relative;">
<div style="background-color: #fef08a; border: 1px solid #eab308; padding: 0.25rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; color: #422006; margin-bottom: 2rem;">
לאיזוטופים יש<br/>מספרי מסה שונים
</div>
<svg style="position: absolute; top: 30px; left: 50%; width: 100px; height: 40px; pointer-events: none;" viewBox="0 0 100 40">
<path d="M 50 0 Q 80 20 100 40" fill="none" stroke="#9ca3af" stroke-width="1" />
</svg>
</div>

<div style="display: flex; gap: 2rem; text-align: center;">
<div>
<div style="color: #ef4444; font-weight: bold;">12</div>
<div style="font-size: 1.25rem;"><sup>12</sup>C</div>
<div style="color: #ef4444; font-weight: bold;">6</div>
</div>
<div>
<div style="color: #ef4444; font-weight: bold;">13</div>
<div style="font-size: 1.25rem;"><sup>13</sup>C</div>
<div style="color: #ef4444; font-weight: bold;">6</div>
</div>
<div>
<div style="color: #ef4444; font-weight: bold;">14</div>
<div style="font-size: 1.25rem;"><sup>14</sup>C</div>
<div style="color: #ef4444; font-weight: bold;">6</div>
</div>
</div>

<div style="position: relative;">
<div style="background-color: #fef08a; border: 1px solid #eab308; padding: 0.25rem 0.5rem; border-radius: 9999px; font-size: 0.75rem; color: #422006; margin-bottom: 2rem;">
לאיזוטופים יש את<br/>אותו מספר אטומי
</div>
<svg style="position: absolute; top: 30px; left: -50px; width: 100px; height: 40px; pointer-events: none;" viewBox="0 0 100 40">
<path d="M 50 0 Q 20 20 0 40" fill="none" stroke="#9ca3af" stroke-width="1" />
</svg>
</div>
</div>
<div style="font-weight: bold; margin-top: 1rem; font-size: 0.875rem;">
איזוטופים של פחמן
</div>
</div>

<div style="display: flex; flex-direction: column; md:flex-row; gap: 2rem; margin: 2rem 0;" dir="rtl">
<div style="flex-shrink: 0; width: 100%; max-width: 250px; font-size: 0.875rem; color: #1e3a8a; font-weight: 600; display: flex; flex-direction: column; gap: 1.5rem;">
<div>
מספר אטומי = מספר הפרוטונים בגרעין
</div>
<div>
מספר מסה = מספר הפרוטונים + מספר הנויטרונים
</div>
<div>
מולקולה היא קבוצה של שני אטומים או יותר המוחזקים יחד על ידי קשרים.
</div>
</div>
<div style="flex: 1;">
<p style="margin-bottom: 1rem;">
פחמן מכיל גם כמות עקבות של <sup>14</sup>C, שיש לו שישה פרוטונים ושמונה נויטרונים. איזוטופ זה של פחמן הוא רדיואקטיבי, ודועך עם זמן מחצית חיים של 5730 שנים. (<em>זמן מחצית חיים</em> הוא הזמן שלוקח למחצית מהגרעינים לדעוך.) כל עוד צמח או בעל חיים חיים, ה-<sup>14</sup>C שאובד באמצעות נשימה או הפרשה מתחדש ללא הרף. כאשר הוא מת, לעומת זאת, הוא כבר לא צורך <sup>14</sup>C. כתוצאה מכך, ה-<sup>14</sup>C שלו אובד לאט באמצעות דעיכה רדיואקטיבית. לכן, ניתן לקבוע את גילו של חומר שמקורו באורגניזם חי על ידי תכולת ה-<sup>14</sup>C שלו.
</p>
<p>
<strong>מסה אטומית</strong> היא הממוצע המשוקלל של האיזוטופים ביסוד. מכיוון ש<em>יחידת מסה אטומית (amu)</em> מוגדרת בדיוק כ-1/12 מהמסה של <sup>12</sup>C, המסה של <sup>12</sup>C היא 12.0000 amu; המסה של <sup>13</sup>C היא 13.0035 amu. לכן, המסה האטומית של פחמן היא 12.011 amu מכיוון ש-(0.9889 × 12.0000) + (0.0111 × 13.0035) = 12.011. <strong>מסה מולקולרית</strong> היא סכום המסות האטומיות של כל האטומים במולקולה.
</p>
</div>
</div>
`;
