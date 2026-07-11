import type { Locale } from "./i18n";

/**
 * All site copy lives here, keyed by locale. Both dictionaries share the same
 * shape (enforced by the `Dictionary` type) so pages stay in sync across TR/EN.
 *
 * Voice: warm, bold, human — a creative partner talking to a founder, not a
 * corporate brochure. Turkish uses an intimate "sen".
 */

export type ServiceKey = "ads" | "creative" | "seo-geo";

export interface ServiceContent {
  key: ServiceKey;
  icon: "ads" | "creative" | "search";
  title: string;
  tagline: string;
  summary: string;
  features: string[];
  outcome: string;
}

export interface Stat {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
}

export interface Dictionary {
  brandTagline: string;
  nav: {
    home: string;
    services: string;
    about: string;
    contact: string;
    cta: string;
  };
  routes: { services: string; about: string; contact: string };
  meta: {
    home: { title: string; description: string };
    services: { title: string; description: string };
    about: { title: string; description: string };
    contact: { title: string; description: string };
  };
  home: {
    hero: {
      eyebrow: string;
      title: string;
      titleAccent: string;
      subtitle: string;
      ctaPrimary: string;
      ctaSecondary: string;
      note: string;
      scrollCue: string;
    };
    marquee: string[];
    stats: Stat[];
    manifesto: { eyebrow: string; big: string; body: string };
    servicesIntro: { eyebrow: string; title: string; subtitle: string };
    process: {
      eyebrow: string;
      title: string;
      subtitle: string;
      steps: { title: string; desc: string }[];
    };
    whyUs: {
      eyebrow: string;
      title: string;
      subtitle: string;
      points: { title: string; desc: string }[];
    };
    faq: { eyebrow: string; title: string; items: { q: string; a: string }[] };
    ctaBand: { title: string; subtitle: string; button: string };
  };
  services: ServiceContent[];
  servicesPage: {
    hero: { eyebrow: string; title: string; subtitle: string };
    featuresLabel: string;
    outcomeLabel: string;
  };
  aboutPage: {
    hero: { eyebrow: string; title: string; subtitle: string };
    story: { title: string; paragraphs: string[] };
    mission: { title: string; body: string };
    vision: { title: string; body: string };
    values: { title: string; items: { title: string; desc: string }[] };
  };
  contactPage: {
    hero: { eyebrow: string; title: string; subtitle: string };
    formTitle: string;
    formSubtitle: string;
    formButton: string;
    emailTitle: string;
    emailDesc: string;
    orLabel: string;
  };
  footer: {
    tagline: string;
    servicesHeading: string;
    companyHeading: string;
    followHeading: string;
    rights: string;
  };
}

const tr: Dictionary = {
  brandTagline: "Güzellik markaları için dijital reklam ajansı",
  nav: {
    home: "Ana Sayfa",
    services: "Hizmetler",
    about: "Hakkımızda",
    contact: "İletişim",
    cta: "Hadi tanışalım",
  },
  routes: { services: "services", about: "about", contact: "contact" },
  meta: {
    home: {
      title: "Soleach | Güzellik Markaları için Dijital Reklam Ajansı",
      description:
        "Güzelliği büyütmek sanat ister. Soleach; makyaj, kozmetik ve kadın ürünleri markalarını performans reklamları, kreatif üretim ve SEO & GEO ile büyütür. Estetiği satışa çeviriyoruz.",
    },
    services: {
      title: "Hizmetler | Soleach Dijital Reklam Ajansı",
      description:
        "Sosyal medya & performans reklamları, içerik & kreatif üretim ve SEO & GEO. Güzellik markanı büyütmek için gereken her şey, tek ekipte.",
    },
    about: {
      title: "Hakkımızda | Soleach",
      description:
        "Biz her işi yapmayız — bir işi çok iyi yaparız. Soleach, güzellik ve kadın ürünleri markalarına adanmış bir dijital reklam ajansı.",
    },
    contact: {
      title: "İletişim | Soleach",
      description:
        "Markanı konuşalım. Formu doldur, 24 saat içinde sana özel bir büyüme planıyla dönelim. Taahhüt yok.",
    },
  },
  home: {
    hero: {
      eyebrow: "Güzellik markaları için dijital reklam ajansı",
      title: "Markanı büyütmek",
      titleAccent: "de bir sanat.",
      subtitle:
        "Makyajdan cilt bakımına — markanı sadece güzel göstermiyoruz. İnsanların aklına kazıyor, sepetine koyuyoruz. Reklam, içerik ve yapay zekâ görünürlüğü; hepsi tek ekipte.",
      ctaPrimary: "Markanı konuşalım",
      ctaSecondary: "Neler yapıyoruz?",
      note: "24 saat içinde dönüyoruz · Taahhüt yok, sürpriz fatura yok",
      scrollCue: "Keşfet",
    },
    marquee: [
      "Makyaj",
      "Cilt Bakımı",
      "Parfüm",
      "Saç Bakımı",
      "Kozmetik",
      "Ten Bakımı",
      "Doğal Güzellik",
      "Vegan Kozmetik",
      "Güneş Bakımı",
    ],
    stats: [
      { value: 100, prefix: "%", label: "Sadece güzellik markaları. Başka hiçbir şey." },
      { value: 3, suffix: "×", label: "Hedeflediğimiz ortalama reklam getirisi" },
      { value: 24, suffix: " saat", label: "İçinde ilk yanıtımız sende olur" },
    ],
    manifesto: {
      eyebrow: "Kısaca",
      big: "Her güzellik markasının bir hikâyesi var. Biz onu satışa çeviriyoruz.",
      body: "En güzel ürün bile, doğru insanlara ulaşmazsa rafta bekler. Biz markanın hikâyesini alır; kaydırılan bir ekranı durduran, tıklatan ve “bunu almam lazım” dedirten bir şeye dönüştürürüz. Estetik ve performans, aynı masada.",
    },
    servicesIntro: {
      eyebrow: "Ne yapıyoruz",
      title: "Markanı büyüten üç güç",
      subtitle:
        "Reklamı sanata, sanatı da satışa çeviriyoruz. Üçü bir arada, tek ekip, tek hedef: büyümen.",
    },
    process: {
      eyebrow: "Nasıl çalışıyoruz",
      title: "Tahmin yok. Sadece net bir yol.",
      subtitle:
        "Her adımda ne yaptığımızı, neden yaptığımızı ve ne getirdiğini görürsün. Sürpriz sevmeyiz — iyi olanları hariç.",
      steps: [
        {
          title: "Tanışma",
          desc: "Markanı, ürünlerini ve kime seslendiğini dinliyoruz. Rakipleri ve pazarı okuyup fırsatları masaya koyuyoruz.",
        },
        {
          title: "Strateji",
          desc: "Bütçe, kanal ve mesaj planını birlikte kuruyoruz. Net hedefler, net bir yol haritası — havada laf yok.",
        },
        {
          title: "Üretim & Yayın",
          desc: "Durduran kreatifleri üretip kampanyaları yayına alıyoruz. Doğru kitleye, doğru anda, doğru sözle.",
        },
        {
          title: "Optimizasyon",
          desc: "Veriyi sürekli izliyor, test ediyoruz. Bütçeyi en çok kazandıran yere yönlendirip büyümeyi ölçeğe taşıyoruz.",
        },
      ],
    },
    whyUs: {
      eyebrow: "Neden Soleach",
      title: "Biz her işi yapmayız. Bir işi çok iyi yaparız.",
      subtitle:
        "Güzellik, kozmetik ve kadın ürünleri. Bu kategorinin dilini, estetiğini ve alıcısını ezbere biliyoruz — çünkü başka bir şeye bakmıyoruz.",
      points: [
        {
          title: "Kategoriye adanmışlık",
          desc: "Cilt bakımından makyaja, bu ürünlerin nasıl arzu edildiğini ve satın alındığını biliyoruz. Kreatifi de ona göre kuruyoruz.",
        },
        {
          title: "Estetik + performans",
          desc: "Sadece güzel görünen değil; güzel görünüp aynı anda satan işler. Marka imajın da büyür, cironun da.",
        },
        {
          title: "Sürpriz fatura yok",
          desc: "Her kuruşun nereye gittiğini ve ne getirdiğini açık açık gösteririz. Şeffaflık lüks değil, standart.",
        },
        {
          title: "Yarının aramasına hazır",
          desc: "Markanı yalnızca Google’da değil; ChatGPT ve Perplexity gibi yapay zekâ motorlarında da görünür kılıyoruz.",
        },
      ],
    },
    faq: {
      eyebrow: "Aklındakiler",
      title: "Merak ettiklerin",
      items: [
        {
          q: "Soleach tam olarak ne yapıyor?",
          a: "Soleach, güzellik ve kadın ürünleri markalarına adanmış bir dijital reklam ajansıdır. Sosyal medya ve performans reklamlarını yönetiriz, içerik & kreatif üretiriz ve markaları hem arama motorlarında hem de yapay zekâ motorlarında (SEO & GEO) görünür kılarız.",
        },
        {
          q: "Ürün mü satıyorsunuz?",
          a: "Hayır. Biz ürün satmıyoruz; ürün satan güzellik markalarının büyümesini yönetiyoruz. Reklam, içerik ve görünürlük tarafında markanın büyüme ortağıyız.",
        },
        {
          q: "Ne tür markalarla çalışıyorsunuz?",
          a: "Makyaj, cilt bakımı, kozmetik ve kadın ürünleri kategorisindeki markalarla. Yeni doğmuş bir markadan büyümek isteyen yerleşik markalara kadar geniş bir yelpazeye hizmet veriyoruz.",
        },
        {
          q: "GEO nedir, neden önemli?",
          a: "GEO (Generative Engine Optimization), markanın ChatGPT, Perplexity ve Google AI Overviews gibi üretken yapay zekâ motorlarında doğru şekilde görünmesini sağlar. İnsanlar artık ürün araştırmasını bu araçlarla yapıyor; GEO ile markan bu yanıtların içinde yer alıyor.",
        },
        {
          q: "Başarıyı nasıl ölçüyorsunuz?",
          a: "Reklam getirisi (ROAS), edinme maliyeti, dönüşüm oranı ve marka görünürlüğü gibi net metriklerle. Her kampanyanın performansını düzenli, anlaşılır raporlarla paylaşıyoruz — grafik güzel olsun diye değil, karar verebilesin diye.",
        },
        {
          q: "Nasıl başlıyoruz?",
          a: "Formu doldurman yeterli. Ücretsiz bir tanışma görüşmesi ayarlıyor, markanı dinliyor ve sana özel bir büyüme yol haritası sunuyoruz. Beğenirsen devam ederiz.",
        },
      ],
    },
    ctaBand: {
      title: "Markanı büyütmeye hazır mısın?",
      subtitle:
        "Bir kahve kadar sürüyor. Formu doldur, markanı dinleyelim ve sana özel bir plan çıkaralım.",
      button: "Hadi başlayalım",
    },
  },
  services: [
    {
      key: "ads",
      icon: "ads",
      title: "Sosyal Medya & Performans Reklamları",
      tagline: "Doğru insan, doğru an, doğru mesaj.",
      summary:
        "Meta (Instagram & Facebook) ve TikTok’ta satış odaklı kampanyalar kuruyor, yönetiyor ve durmadan optimize ediyoruz. Bütçeni tahmine değil, veriye göre en çok kazandıran yere yönlendiriyoruz.",
      features: [
        "Instagram, Facebook ve TikTok reklam yönetimi",
        "Satış ve dönüşüm odaklı kampanya kurgusu",
        "Kitle hedefleme, yeniden pazarlama ve huni tasarımı",
        "A/B testleri ve kesintisiz optimizasyon",
        "Şeffaf performans raporları (ROAS, CPA)",
      ],
      outcome: "Reklam bütçenden ölçülebilir, kârlı bir büyüme.",
    },
    {
      key: "creative",
      icon: "creative",
      title: "İçerik & Kreatif Üretim",
      tagline: "Kaydırırken parmağı durduran görseller.",
      summary:
        "Ürününü en iyi anlatan reklam kreatifleri, Reels ve kısa videolar üretiyoruz. Güzelliğin estetiğini performansla buluşturuyor; hem markanı yakışıklı gösteriyor hem satıyoruz.",
      features: [
        "Ürün fotoğrafı ve reklam görseli konsepti",
        "Reels, TikTok ve kısa video üretimi",
        "Güven veren, UGC tarzı içerikler",
        "Marka kimliğine sadık bir görsel dil",
        "Platforma özel formatlar ve varyasyonlar",
      ],
      outcome: "İzleyeni durduran, tıklatan ve satın aldıran içerikler.",
    },
    {
      key: "seo-geo",
      icon: "search",
      title: "SEO & GEO — Yapay Zekâ Görünürlüğü",
      tagline: "Google’da da, yapay zekâda da seni bulsunlar.",
      summary:
        "Markanı hem klasik arama motorlarında (SEO) hem de ChatGPT, Perplexity gibi üretken yapay zekâ motorlarında (GEO) görünür kılıyoruz. Aramanın geleceğine bugünden hazır ol.",
      features: [
        "Teknik ve içerik odaklı SEO",
        "GEO: yapay zekâ motorlarında marka görünürlüğü",
        "Yapılandırılmış veri ve zengin sonuç kurgusu",
        "Anahtar kelime ve içerik stratejisi",
        "Ürün ve kategori sayfası optimizasyonu",
      ],
      outcome: "Müşterin ararken de, yapay zekâya sorarken de seni bulur.",
    },
  ],
  servicesPage: {
    hero: {
      eyebrow: "Hizmetler",
      title: "Markanı büyüten her şey, tek ekipte.",
      subtitle:
        "Reklamdan içeriğe, aramadan yapay zekâ görünürlüğüne. Parçalı ajanslarla uğraşma — hepsi burada.",
    },
    featuresLabel: "Neler dahil",
    outcomeLabel: "Sonuç",
  },
  aboutPage: {
    hero: {
      eyebrow: "Hakkımızda",
      title: "Güzellik markalarının büyüme ortağı.",
      subtitle:
        "Estetiği ve performansı aynı masaya oturtuyoruz. Çünkü güzellik markası büyütmek, ikisini birden ister.",
    },
    story: {
      title: "Hikâyemiz",
      paragraphs: [
        "Soleach, güzellik markalarının dijitalde hak ettiği yeri alması için doğdu. Bu kategorinin başka hiçbir şeye benzemediğini biliyoruz: burada estetik kadar güven, görsel kadar sonuç önemli.",
        "Biz her sektöre koşan genel bir ajans değiliz. Yalnızca makyaj, cilt bakımı, kozmetik ve kadın ürünleri markalarıyla çalışıyoruz. Bu odak, kategorinin dilini, alıcısını ve satın alma yolculuğunu ezbere bilmemizi sağlıyor.",
        "Reklamı sanata, sanatı da satışa çeviriyoruz. Amacımız markanı sadece güzel göstermek değil; sürdürülebilir, ölçülebilir bir büyüme yaratmak. Kısacası: senin kazanman, bizim işimiz.",
      ],
    },
    mission: {
      title: "Misyonumuz",
      body: "Güzellik markalarını, doğru kitleyle buluşturan ve gerçekten satışa dönüşen dijital kampanyalarla büyütmek.",
    },
    vision: {
      title: "Vizyonumuz",
      body: "Güzellik kategorisinde akla ilk gelen büyüme ortağı olmak; markaları hem klasik aramada hem de yapay zekâ çağında bir adım öne taşımak.",
    },
    values: {
      title: "Değerlerimiz",
      items: [
        {
          title: "Odak",
          desc: "Tek bir kategoriye adanıyoruz ve orada en iyisi olmak için çalışıyoruz.",
        },
        {
          title: "Şeffaflık",
          desc: "Her bütçenin nereye gittiğini ve ne getirdiğini saklamadan gösteririz.",
        },
        {
          title: "Estetik + veri",
          desc: "Güzel görüneni değil; güzel görünüp aynı zamanda satanı üretiriz.",
        },
        {
          title: "Meraklıyız",
          desc: "Aramanın ve tüketici davranışının nasıl değiştiğini takip eder, markanı öne taşırız.",
        },
      ],
    },
  },
  contactPage: {
    hero: {
      eyebrow: "İletişim",
      title: "Markanı birlikte büyütelim.",
      subtitle:
        "Aşağıdaki formu doldur, markanı dinleyelim ve sana özel bir büyüme yol haritası çıkaralım. 24 saat içinde dönüyoruz.",
    },
    formTitle: "Ücretsiz tanışma görüşmesi",
    formSubtitle:
      "Markan hakkında birkaç soruya yanıt ver; sana en uygun planla geri dönelim.",
    formButton: "Formu yeni sekmede aç",
    emailTitle: "E-posta",
    emailDesc: "Form yerine doğrudan yazmak istersen, kapımız açık.",
    orLabel: "veya",
  },
  footer: {
    tagline:
      "Güzellik ve kadın ürünleri markaları için dijital reklam ajansı. Estetiği satışa çeviriyoruz.",
    servicesHeading: "Hizmetler",
    companyHeading: "Kurumsal",
    followHeading: "Takip et",
    rights: "Tüm hakları saklıdır.",
  },
};

const en: Dictionary = {
  brandTagline: "Digital advertising agency for beauty brands",
  nav: {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    cta: "Let's talk",
  },
  routes: { services: "services", about: "about", contact: "contact" },
  meta: {
    home: {
      title: "Soleach | Digital Advertising Agency for Beauty Brands",
      description:
        "Growing a beauty brand is an art. Soleach grows makeup, cosmetics and women's product brands with performance ads, creative production and SEO & GEO. We turn aesthetics into sales.",
    },
    services: {
      title: "Services | Soleach Digital Advertising Agency",
      description:
        "Social & performance advertising, content & creative production, and SEO & GEO — everything you need to grow your beauty brand, in one team.",
    },
    about: {
      title: "About | Soleach",
      description:
        "We don't do everything — we do one thing exceptionally well. Soleach is a digital advertising agency devoted to beauty and women's product brands.",
    },
    contact: {
      title: "Contact | Soleach",
      description:
        "Let's talk about your brand. Fill out the form and we'll come back within 24 hours with a plan made for you. No commitment.",
    },
  },
  home: {
    hero: {
      eyebrow: "Digital advertising agency for beauty brands",
      title: "Growing your brand",
      titleAccent: "is an art.",
      subtitle:
        "From makeup to skincare — we don't just make your brand look good. We make it unforgettable, and we put it in the cart. Advertising, content and AI visibility, all in one team.",
      ctaPrimary: "Let's talk about your brand",
      ctaSecondary: "What we do",
      note: "We reply within 24 hours · No commitment, no surprise invoices",
      scrollCue: "Explore",
    },
    marquee: [
      "Makeup",
      "Skincare",
      "Fragrance",
      "Haircare",
      "Cosmetics",
      "Complexion",
      "Clean Beauty",
      "Vegan Cosmetics",
      "Sun Care",
    ],
    stats: [
      { value: 100, prefix: "", suffix: "%", label: "Beauty brands only. Nothing else." },
      { value: 3, suffix: "×", label: "Average return on ad spend we aim for" },
      { value: 24, suffix: "h", label: "Until our first reply lands in your inbox" },
    ],
    manifesto: {
      eyebrow: "In short",
      big: "Every beauty brand has a story. We turn yours into sales.",
      body: "Even the most beautiful product waits on the shelf if it never reaches the right people. We take your story and turn it into something that stops a scrolling thumb, earns the click and says \"I need this.\" Aesthetics and performance, at the same table.",
    },
    servicesIntro: {
      eyebrow: "What we do",
      title: "Three forces that grow your brand",
      subtitle:
        "We turn advertising into art, and art into sales. Three in one — one team, one goal: your growth.",
    },
    process: {
      eyebrow: "How we work",
      title: "No guesswork. Just a clear path.",
      subtitle:
        "At every step you see what we do, why we do it and what it returns. We don't like surprises — except the good ones.",
      steps: [
        {
          title: "Get to know you",
          desc: "We listen to your brand, your products and who you speak to, then read the market and competitors to put opportunities on the table.",
        },
        {
          title: "Strategy",
          desc: "We build the budget, channel and messaging plan together. Clear goals, a clear roadmap — no fluff.",
        },
        {
          title: "Production & Launch",
          desc: "We produce scroll-stopping creative and launch the campaigns — right audience, right moment, right words.",
        },
        {
          title: "Optimization",
          desc: "We track and test relentlessly, steering budget to what earns most and taking your growth to scale.",
        },
      ],
    },
    whyUs: {
      eyebrow: "Why Soleach",
      title: "We don't do everything. We do one thing brilliantly.",
      subtitle:
        "Beauty, cosmetics and women's products. We know this category's language, aesthetics and buyer by heart — because we look at nothing else.",
      points: [
        {
          title: "Devoted to the category",
          desc: "From skincare to makeup, we understand how these products are desired and bought — and we build the creative around it.",
        },
        {
          title: "Aesthetics + performance",
          desc: "Not just work that looks good, but work that looks good and sells. Your brand image grows, and so does revenue.",
        },
        {
          title: "No surprise invoices",
          desc: "We show exactly where every cent goes and what it returns. Transparency isn't a luxury — it's the standard.",
        },
        {
          title: "Ready for tomorrow's search",
          desc: "We make your brand visible not only on Google, but on AI engines like ChatGPT and Perplexity too.",
        },
      ],
    },
    faq: {
      eyebrow: "On your mind",
      title: "Good to know",
      items: [
        {
          q: "What exactly does Soleach do?",
          a: "Soleach is a digital advertising agency devoted to beauty and women's product brands. We manage social and performance advertising, produce content & creative, and make brands visible on both search engines and AI engines (SEO & GEO).",
        },
        {
          q: "Do you sell products?",
          a: "No. We don't sell products; we grow the beauty brands that do. Across advertising, content and visibility, we're your growth partner.",
        },
        {
          q: "What kind of brands do you work with?",
          a: "Brands in makeup, skincare, cosmetics and women's products — from newly launched brands to established ones ready to scale.",
        },
        {
          q: "What is GEO, and why does it matter?",
          a: "GEO (Generative Engine Optimization) makes sure your brand shows up correctly in generative AI engines like ChatGPT, Perplexity and Google AI Overviews. People now research products with these tools; GEO puts your brand inside those answers.",
        },
        {
          q: "How do you measure success?",
          a: "With clear metrics: return on ad spend (ROAS), cost per acquisition, conversion rate and brand visibility. We share every campaign's performance in regular, readable reports — not to look pretty, but so you can decide.",
        },
        {
          q: "How do we start?",
          a: "Just fill out the form. We'll set up a free intro call, listen to your brand, and present a growth roadmap made for you. If you like it, we keep going.",
        },
      ],
    },
    ctaBand: {
      title: "Ready to grow your brand?",
      subtitle:
        "It takes about as long as a coffee. Fill out the form, let us listen to your brand and build a plan made just for you.",
      button: "Let's get started",
    },
  },
  services: [
    {
      key: "ads",
      icon: "ads",
      title: "Social & Performance Advertising",
      tagline: "Right person, right moment, right message.",
      summary:
        "We build, manage and relentlessly optimize sales-focused campaigns on Meta (Instagram & Facebook) and TikTok — steering your budget by data, not guesswork, to whatever earns most.",
      features: [
        "Instagram, Facebook and TikTok ad management",
        "Sales- and conversion-focused campaign design",
        "Audience targeting, retargeting and funnel design",
        "A/B testing and non-stop optimization",
        "Transparent performance reports (ROAS, CPA)",
      ],
      outcome: "Measurable, profitable growth from your ad budget.",
    },
    {
      key: "creative",
      icon: "creative",
      title: "Content & Creative Production",
      tagline: "Visuals that stop the thumb.",
      summary:
        "We produce ad creative, Reels and short-form video that show your product at its best — pairing the aesthetics of beauty with performance. We make your brand look gorgeous and sell.",
      features: [
        "Product photography and ad creative concepts",
        "Reels, TikTok and short-form video production",
        "Trust-building, UGC-style content",
        "A visual language true to your brand identity",
        "Platform-specific formats and variations",
      ],
      outcome: "Content that stops, clicks and converts.",
    },
    {
      key: "seo-geo",
      icon: "search",
      title: "SEO & GEO — AI Visibility",
      tagline: "Be found on Google and in AI.",
      summary:
        "We make your brand visible both on classic search engines (SEO) and on generative AI engines like ChatGPT and Perplexity (GEO). Get ready today for the search of tomorrow.",
      features: [
        "Technical and content-driven SEO",
        "GEO: brand visibility on AI engines",
        "Structured data and rich-result setup",
        "Keyword and content strategy",
        "Product and category page optimization",
      ],
      outcome: "Customers find you when they search and when they ask AI.",
    },
  ],
  servicesPage: {
    hero: {
      eyebrow: "Services",
      title: "Everything that grows your brand, in one team.",
      subtitle:
        "From advertising to content, from search to AI visibility. Stop juggling scattered agencies — it's all here.",
    },
    featuresLabel: "What's included",
    outcomeLabel: "Outcome",
  },
  aboutPage: {
    hero: {
      eyebrow: "About",
      title: "The growth partner for beauty brands.",
      subtitle:
        "We sit aesthetics and performance at the same table — because growing a beauty brand takes both.",
    },
    story: {
      title: "Our story",
      paragraphs: [
        "Soleach was born to help beauty brands claim the place they deserve online. We know this category is like no other: here, trust matters as much as aesthetics, and results matter as much as visuals.",
        "We're not a generic agency chasing every industry. We work only with makeup, skincare, cosmetics and women's product brands. That focus lets us know the category's language, its buyer and its purchase journey by heart.",
        "We turn advertising into art, and art into sales. Our goal isn't just to make your brand look beautiful — it's to create sustainable, measurable growth. Put simply: your winning is our job.",
      ],
    },
    mission: {
      title: "Our mission",
      body: "To grow beauty brands with digital campaigns that connect them to the right audience and truly convert into sales.",
    },
    vision: {
      title: "Our vision",
      body: "To be the first name that comes to mind for growth in beauty — moving brands a step ahead in both classic search and the AI era.",
    },
    values: {
      title: "Our values",
      items: [
        {
          title: "Focus",
          desc: "We devote ourselves to a single category and work to be the best at it.",
        },
        {
          title: "Transparency",
          desc: "We show, without hiding, where every budget goes and what it returns.",
        },
        {
          title: "Aesthetics + data",
          desc: "We don't produce what merely looks good, but what looks good and sells.",
        },
        {
          title: "Curious",
          desc: "We track how search and consumer behavior change, and push your brand ahead.",
        },
      ],
    },
  },
  contactPage: {
    hero: {
      eyebrow: "Contact",
      title: "Let's grow your brand together.",
      subtitle:
        "Fill out the form below, let us listen to your brand, and we'll build a growth roadmap made for you. We reply within 24 hours.",
    },
    formTitle: "Free intro call",
    formSubtitle:
      "Answer a few questions about your brand and we'll come back with the plan that fits you best.",
    formButton: "Open form in a new tab",
    emailTitle: "Email",
    emailDesc: "Prefer writing directly instead of the form? Our door is open.",
    orLabel: "or",
  },
  footer: {
    tagline:
      "A digital advertising agency for beauty and women's product brands. We turn aesthetics into sales.",
    servicesHeading: "Services",
    companyHeading: "Company",
    followHeading: "Follow",
    rights: "All rights reserved.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { tr, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
