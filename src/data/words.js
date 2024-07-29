const words = {
  english: {
    unit1: [
      { word: "1st - first", definition: "ראשון" },
      { word: "2nd - second", definition: "שני" },
      { word: "3rd - third", definition: "שלישי" },
      { word: "4th - fourth", definition: "רביעי" },
      { word: "5th - fifth", definition: "חמישי" },
      { word: "6th - sixth", definition: "שישי" },
      { word: "7th - seventh", definition: "שביעי" },
      { word: "8th - eighth", definition: "שמיני" },
      { word: "9th - ninth", definition: "תשיעי" },
      { word: "tenth - 10th", definition: "עשירי" },
      { word: "how", definition: "איך, כיצד" },
      { word: "what", definition: "מה, איזה" },
      { word: "which", definition: "איזה" },
      { word: "who", definition: "מי, ש-" },
      { word: "whom", definition: "מי" },
      { word: "whose", definition: "אשר לו, אשר הוא" },
      { word: "as if", definition: "כאילו" },
      { word: "based on", definition: "מבוסס על" },
      { word: "even if", definition: "גם אם" },
      { word: "granted (that)", definition: "בהנחה ש-, נתון ש-" },
      { word: "If", definition: "אם" },
      { word: "in case", definition: "במקרה" },
      { word: "in order to", definition: "על-מנת, בכדי" },
      { word: "only", definition: "רק" },
      { word: "provided that", definition: "בתנאי ש-" },
      { word: "so long as", definition: "כל עוד" },
      { word: "unless", definition: "אלא אם כן" },
      { word: "which", definition: "אשר, ש-" },
      { word: "while", definition: "כל עוד" },
      { word: "always", definition: "תמיד" },
      { word: "consistently", definition: "בעקביות" },
      { word: "constantly", definition: "באופן קבוע" },
      { word: "daily", definition: "יומיומי" },
      { word: "every day", definition: "כל יום" },
      { word: "every now and then", definition: "לפעמים" },
      { word: "for the most part", definition: "בדרך-כלל" },
      { word: "forever", definition: "לנצח, לתמיד" },
      { word: "frequently", definition: "לעיתים קרובות" },
      { word: "from time to time", definition: "מפעם לפעם" },
      { word: "hardly ever", definition: "כמעט אף פעם" },
      { word: "mostly", definition: "לרוב" },
      { word: "never", definition: "אף פעם" },
      { word: "occasionally", definition: "מידי פעם" },
      { word: "often", definition: "לעיתים קרובות" },
      { word: "once in a while", definition: "מידי פעם" },
      { word: "ordinarily", definition: "בדרך-כלל" },
      { word: "permanently", definition: "קבוע" },
      { word: "perpetually", definition: "נצחי, לנצח" },
      { word: "rarely", definition: "לעיתים נדירות" },
      { word: "regularly", definition: "באופן קבוע" },
      { word: "seldom", definition: "לעיתים רחוקות" },
      { word: "sometimes", definition: "לעיתים, לפעמים" },
      { word: "usually", definition: "בדרך-כלל" },
      { word: "according", definition: "לפי" },
      { word: "accordingly", definition: "בהתאם" },
      { word: "as a result", definition: "כתוצאה" },
      { word: "consequently", definition: "כתוצאה מכך" },
      { word: "for", definition: "מפני ש-" },
      { word: "for", definition: "עבור" },
      { word: "hence", definition: "לפיכך, לכן" },
      { word: "in that case", definition: "במקרה הזה" },
      { word: "led to", definition: "הוביל ל-" },
      { word: "so", definition: "אז, כך ש-, ולכן" },
      { word: "so that", definition: "כך ש-" },
      { word: "subsequently", definition: "כתוצאה מכך" },
      { word: "then", definition: "אז" },
      { word: "thus", definition: "לכן, כך ש-" },
      { word: "after all", definition: "אחרי הכל" },
      { word: "all in all", definition: "בסך הכל" },
      { word: "altogether", definition: "בסך הכל" },
      { word: "besides", definition: "בכל מקרה" },
      { word: "i.e.", definition: "כלומר, לדוגמה" },
      { word: "in a word", definition: "במילה אחת" },
      { word: "in conclusion", definition: "לסיכום" },
      { word: "in fact", definition: "למעשה" },
      { word: "overall", definition: "כולל, באופן כללי" },
      { word: "to sum up", definition: "כדי לסכם" },
      { word: "after all", definition: "אחרי הכל" },
      { word: "because", definition: "בגלל" },
      { word: "because of", definition: "בגלל" },
      { word: "being that", definition: "מכיוון ש-" },
      { word: "due to", definition: "בגלל, לאור" },
      { word: "given that", definition: "בהתחשב בכך" },
      { word: "in light of", definition: "לאור" },
      { word: "owing to", definition: "הודות ל-" },
      { word: "since", definition: "מכיוון ש-" },
      { word: "thanks to", definition: "תודות ל-" },
      { word: "therefore", definition: "לכן" },
      { word: "why", definition: "מדוע" },
      { word: "albeit", definition: "אף על פי" },
      { word: "although", definition: "למרות ש-" },
      { word: "but", definition: "אך, אבל" },
      { word: "contradictory", definition: "סותר" },
      { word: "contrary", definition: "להפך, בניגוד ל-" },
      { word: "conversely", definition: "לעומת זאת" },
      { word: "different from", definition: "שונה מ-" },
      { word: "in comparison", definition: "בהשוואה" },
      { word: "in contrast to", definition: "בניגוד ל-" },
      { word: "instead", definition: "במקום" },
      { word: "instead of", definition: "במקום" },
      { word: "of course... but...", definition: "כמובן... אך..." },
      { word: "on the contrary", definition: "בניגוד לכך" },
      { word: "or", definition: "או" },
      { word: "otherwise", definition: "אחרת" },
      { word: "rather", definition: "עדיף" },
      { word: "rather than", definition: "במקום, יותר מ-" },
      { word: "regardless", definition: "למרות, ללא קשר" },
      { word: "than", definition: "מ-" },
      { word: "though", definition: "למרות זאת" },
      { word: "though", definition: "למרות ש-" },
      { word: "unlike", definition: "שלא כמו" },
      { word: "vice versa", definition: "להיפך" },
      { word: "where", definition: "בעוד ש-" },
      { word: "whereas", definition: "בעוד ש-" },
      { word: "yet", definition: "אך, אולם" },
      { word: "about", definition: "ליד, בערך" },
      { word: "above", definition: "מעל" },
      { word: "across", definition: "בצד השני, לרוחב" },
      { word: "adjacent to", definition: "ליד" },
      { word: "against", definition: "כנגד, ממול" },
      { word: "ahead of", definition: "לפני, לפנים" },
      { word: "along", definition: "לאורך" },
      { word: "alongside", definition: "לצד, במקביל" },
      { word: "amid", definition: "בקרב, בין" },
      { word: "among", definition: "בקרב, בין" },
      { word: "around", definition: "מסביב" },
      { word: "at", definition: "אצל, ב-" },
      { word: "before", definition: "לפני, מול" },
      { word: "behind", definition: "מאחורי" },
      { word: "below", definition: "מתחת" },
      { word: "beneath", definition: "מתחת" },
      { word: "beside", definition: "ליד" },
      { word: "between", definition: "בין" },
      { word: "beyond", definition: "מעבר" },
      { word: "by", definition: "ליד, בסמוך ל-" },
      { word: "close", definition: "קרוב" },
      { word: "distant", definition: "מרוחק" },
      { word: "elsewhere", definition: "במקום אחר" },
      { word: "farther", definition: "הלאה, יותר" },
      { word: "from", definition: "מ-" },
      { word: "here", definition: "כאן" },
      { word: "in", definition: "ב-, בתוך" },
      { word: "in front of", definition: "בחזית של, מול" },
      { word: "inside", definition: "בתוך, פנים" },
      { word: "into", definition: "אל תוך" },
      { word: "latter", definition: "שני, אחרון" },
      { word: "near", definition: "קרוב" },
      { word: "nearby", definition: "ליד, קרוב" },
      { word: "next to", definition: "ליד" },
      { word: "of", definition: "של, מ-" },
      { word: "on", definition: "על" },
      { word: "on top of", definition: "על, מעל" },
      { word: "opposite", definition: "מנוגד, ממול" },
      { word: "outside", definition: "חוץ" },
      { word: "outside", definition: "בחוץ" },
      { word: "over", definition: "על, מעל" },
      { word: "there", definition: "שם" },
      { word: "under", definition: "מתחת" },
      { word: "underneath", definition: "מתחת" },
      { word: "up", definition: "למעלה" },
      { word: "where", definition: "היכן, איפה" },
      { word: "wherever", definition: "בכל מקום, לא משנה היכן" },
      { word: "within", definition: "בתוך" },
      { word: "backward", definition: "לאחור" },
      { word: "down", definition: "למטה" },
      { word: "forward", definition: "קדימה, לפנים" },
      { word: "further", definition: "לקדם" },
      { word: "left", definition: "שמאלה" },
      { word: "right", definition: "ימינה" },
      { word: "sideways", definition: "הצידה" },
      { word: "toward", definition: "אל, אל עבר" },
      { word: "upon", definition: "על" },
      { word: "upside down", definition: "הפוך" },
      { word: "after", definition: "אחרי" },
      { word: "afterwards", definition: "לאחר מכן" },
      { word: "again", definition: "שוב" },
      { word: "as", definition: "כאשר, כש-" },
      { word: "as long as", definition: "כל עוד" },
      { word: "as soon as", definition: "כאשר, ברגע ש-" },
      { word: "at first", definition: "בהתחלה" },
      { word: "at last", definition: "סוף סוף" },
      { word: "before", definition: "לפני" },
      { word: "by", definition: "עד, לא יאוחר מ-" },
      { word: "currently", definition: "כרגע, נכון לעכשיו" },
      { word: "during", definition: "תוך כדי, במשך" },
      { word: "earlier", definition: "קודם לכן" },
      { word: "eventually", definition: "לבסוף" },
      { word: "finally", definition: "לבסוף, סוף סוף" },
      { word: "first of all", definition: "ראשית" },
      { word: "former", definition: "קודם, לשעבר" },
      { word: "from", definition: "מ-" },
      { word: "further", definition: "בהמשך" },
      { word: "immediately", definition: "מיד" },
      { word: "in a moment", definition: "בעוד רגע" },
      { word: "in due time", definition: "בבוא העת" },
      { word: "initially", definition: "בתחילה" },
      { word: "instantly", definition: "מיד" },
      { word: "last", definition: "אחרון" },
      { word: "later", definition: "מאוחר יותר" },
      { word: "meanwhile", definition: "בינתיים" },
      { word: "next", definition: "הבא" },
      { word: "now", definition: "עכשיו" },
      { word: "once", definition: "ברגע ש-" },
      { word: "once", definition: "פעם (בעבר)" },
      { word: "past", definition: "עבר, שעבר" },
      { word: "presently", definition: "כעת" },
      { word: "previously", definition: "הקודם, לפני-כן" },
      { word: "prior to", definition: "קודם ל-, לפני" },
      { word: "shortly", definition: "בקיצור, בקרוב" },
      { word: "simultaneously", definition: "בו זמנית" },
      { word: "since", definition: "מאז" },
      { word: "soon", definition: "בהקדם, מוקדם" },
      { word: "still", definition: "עדיין, למרות זאת" },
      { word: "suddenly", definition: "לפתע" },
      { word: "then", definition: "אז" },
      { word: "to begin with", definition: "בתור התחלה" },
      { word: "until", definition: "עד ש-" },
      { word: "until now", definition: "עד עתה" },
      { word: "when", definition: "כאשר, כש-" },
      { word: "whenever", definition: "כש-, מתישהו" },
      { word: "while", definition: "בזמן ש-" },
      { word: "yet", definition: "עדיין, בכל זאת" },
      { word: "despite", definition: "למרות" },
      { word: "even so", definition: "אף על פי כן" },
      { word: "even though", definition: "למרות ש-" },
      { word: "however", definition: "למרות זאת" },
      { word: "in spite of", definition: "למרות" },
      { word: "nevertheless", definition: "למרות זאת" },
      { word: "nonetheless", definition: "למרות זאת" },
      { word: "additionally", definition: "בנוסף" },
      { word: "along with", definition: "יחד עם" },
      { word: "also", definition: "גם" },
      { word: "and", definition: "ו-" },
      { word: "as well as", definition: "כמו גם" },
      { word: "aside from", definition: "חוץ מ-" },
      { word: "besides", definition: "בנוסף על" },
      { word: "besides", definition: "מלבד, חוץ מ-" },
      { word: "but", definition: "מלבד, חוץ מ-" },
      { word: "coupled with", definition: "יחד עם" },
      { word: "except", definition: "מלבד, חוץ מ-" },
      { word: "furthermore", definition: "זאת ועוד" },
      { word: "in addition", definition: "בנוסף" },
      { word: "including", definition: "כולל" },
      { word: "moreover", definition: "זאת ועוד" },
      { word: "not only", definition: "לא רק" },
      { word: "not to mention", definition: "שלא לדבר על" },
      { word: "together with", definition: "יחד עם" },
      { word: "too", definition: "גם" },
      { word: "with", definition: "באמצעות, עם" },
      { word: "without", definition: "מבלי, ללא" },
      { word: "above all", definition: "מעל לכל" },
      { word: "absolutely", definition: "לחלוטין" },
      { word: "both... and...", definition: "גם... וגם..." },
      { word: "certainly", definition: "בהחלט, בוודאי" },
      { word: "chiefly", definition: "בעיקר" },
      { word: "either... or...", definition: "או... או..." },
      { word: "especially", definition: "במיוחד" },
      { word: "essentially", definition: "בעיקרו, במהותו" },
      { word: "however", definition: "בכל דרך" },
      { word: "in fact", definition: "למעשה" },
      { word: "in general", definition: "באופן כללי" },
      { word: "in particular", definition: "במיוחד" },
      { word: "incidentally", definition: "דרך אגב" },
      { word: "indeed", definition: "בהחלט" },
      { word: "just as... so...", definition: "בדיוק כמו... גם" },
      { word: "mainly", definition: "בעיקר" },
      { word: "markedly", definition: "בצורה ניכרת" },
      { word: "namely", definition: "במיוחד, כלומר" },
      { word: "neither... nor...", definition: "לא... ולא..." },
      { word: "not only... but also...", definition: "לא רק... אלא גם..." },
      { word: "not... but...", definition: "לא... אבל..." },
      { word: "notably", definition: "ראוי לציון" },
      { word: "of course", definition: "כמובן, בוודאי" },
      {
        word: "on one hand...on the other hand",
        definition: "מצד אחד... מצד שני",
      },
      { word: "particularly", definition: "במיוחד, בפרט" },
      { word: "primarily", definition: "בעיקר" },
      { word: "significantly", definition: "באופן משמעותי" },
      { word: "specifically", definition: "במיוחד" },
      { word: "surely", definition: "ללא ספק" },
      { word: "surprisingly", definition: "במפתיע" },
      { word: "too", definition: "יותר מידי" },
      { word: "truly", definition: "באמת" },
      { word: "undoubtedly", definition: "ללא ספק" },
      { word: "whether... or...", definition: "בין אם... או..." },
      { word: "about", definition: "אודות" },
      { word: "as", definition: "כמו" },
      { word: "both", definition: "שניהם" },
      { word: "comparatively", definition: "באופן יחסי" },
      { word: "correspondingly", definition: "בהתאמה" },
      { word: "e.g.", definition: "לדוגמה" },
      { word: "equally", definition: "במידה שווה" },
      { word: "for example", definition: "לדוגמה" },
      { word: "for instance", definition: "לדוגמה" },
      { word: "identically", definition: "באופן זהה" },
      { word: "in other words", definition: "במילים אחרות" },
      { word: "in the same way", definition: "באותו אופן" },
      { word: "just as", definition: "בדיוק כמו" },
      { word: "like", definition: "כמו" },
      { word: "likewise", definition: "כמו-כן, באותו אופן" },
      { word: "similarly", definition: "באופן דומה" },
      { word: "such as", definition: "כמו למשל" },
      { word: "that", definition: "ש-" },
    ],
  },
};

export default words;
