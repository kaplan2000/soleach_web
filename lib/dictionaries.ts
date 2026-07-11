import type { Locale } from "./i18n";

/**
 * All site copy lives here, keyed by locale. Both dictionaries share the same
 * shape (enforced by the `Dictionary` type) so pages stay in sync across TR/EN.
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
    };
    stats: { value: string; label: string }[];
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
    cta: "Ücretsiz görüşme",
  },
  routes: { services: "services", about: "about", contact: "contact" },
  meta: {
    home: {
      title: "Soleach | Güzellik Markaları için Dijital Reklam Ajansı",
      description:
        "Soleach; makyaj, kozmetik ve kadın ürünleri markalarını büyüten dijital reklam ajansıdır. Performans reklamları, içerik & kreatif üretim ve SEO & GEO ile satışlarınızı artırıyoruz.",
    },
    services: {
      title: "Hizmetler | Soleach Dijital Reklam Ajansı",
      description:
        "Güzellik ve kozmetik markaları için sosyal medya & performans reklamları, içerik & kreatif üretim ve SEO & GEO hizmetleri.",
    },
    about: {
      title: "Hakkımızda | Soleach",
      description:
        "Soleach, güzellik ve kadın ürünleri kategorisine odaklanmış bir dijital reklam ajansıdır. Markaların hikâyesini satışa dönüştürüyoruz.",
    },
    contact: {
      title: "İletişim | Soleach",
      description:
        "Markanızı büyütmeye hazır mısınız? Ücretsiz strateji görüşmesi için formu doldurun, 24 saat içinde dönüş yapalım.",
    },
  },
  home: {
    hero: {
      eyebrow: "Güzellik · Kozmetik · Kadın ürünleri",
      title: "Güzellik markanızı",
      titleAccent: "büyüten dijital ajans",
      subtitle:
        "Makyaj, cilt bakımı ve kadın ürünleri markaları için performans reklamları, dikkat çeken kreatif üretim ve arama & yapay zekâ motorlarında görünürlük. Estetiği satışa dönüştürüyoruz.",
      ctaPrimary: "Ücretsiz strateji görüşmesi",
      ctaSecondary: "Hizmetleri keşfet",
      note: "24 saat içinde dönüş · Taahhüt yok",
    },
    stats: [
      { value: "%100", label: "Güzellik kategorisine odak" },
      { value: "3x", label: "Ortalama reklam getirisi hedefi" },
      { value: "7/24", label: "Kampanya & performans takibi" },
    ],
    servicesIntro: {
      eyebrow: "Ne yapıyoruz",
      title: "Markanızı büyüten üç sütun",
      subtitle:
        "Reklamdan içeriğe, arama görünürlüğünden yapay zekâ motorlarına kadar; güzellik markanızın büyümesi için ihtiyaç duyduğu her şey tek çatı altında.",
    },
    process: {
      eyebrow: "Nasıl çalışıyoruz",
      title: "Net, ölçülebilir bir süreç",
      subtitle:
        "Tahmine değil, veriye dayalı ilerliyoruz. Her adımda ne yaptığımızı ve neden yaptığımızı görüyorsunuz.",
      steps: [
        {
          title: "Keşif",
          desc: "Markanızı, ürün gamınızı ve hedef kitlenizi tanıyoruz. Rakip ve pazar analiziyle fırsatları çıkarıyoruz.",
        },
        {
          title: "Strateji",
          desc: "Bütçe, kanal ve mesaj planını kuruyoruz. Ölçülebilir hedefler ve net bir yol haritası belirliyoruz.",
        },
        {
          title: "Üretim & Yayın",
          desc: "Reklam kreatiflerini üretip kampanyaları kuruyoruz. Doğru kitleye, doğru mesajla ulaşıyoruz.",
        },
        {
          title: "Optimizasyon",
          desc: "Verileri sürekli izleyip test ediyoruz. Bütçeyi en yüksek getiriye yönlendirip büyümeyi ölçekliyoruz.",
        },
      ],
    },
    whyUs: {
      eyebrow: "Neden Soleach",
      title: "Sadece güzellik markalarına odaklanıyoruz",
      subtitle:
        "Her sektöre koşan bir ajans değiliz. Güzellik, kozmetik ve kadın ürünleri kategorisinin dilini, estetiğini ve alıcısını biliyoruz.",
      points: [
        {
          title: "Kategoriye özel uzmanlık",
          desc: "Cilt bakımından makyaja kadar kategorinin nasıl satın alındığını biliyor, kreatiflerimizi buna göre kuruyoruz.",
        },
        {
          title: "Estetik + performans",
          desc: "Sadece güzel görünen değil, dönüşen içerikler üretiyoruz. Marka imajınızla satışı aynı anda büyütüyoruz.",
        },
        {
          title: "Şeffaf raporlama",
          desc: "Harcanan her bütçenin nereye gittiğini ve ne getirdiğini net raporlarla paylaşıyoruz.",
        },
        {
          title: "Yapay zekâ çağına hazır",
          desc: "Markanızı yalnızca Google'da değil, ChatGPT ve Perplexity gibi AI motorlarında da görünür kılıyoruz.",
        },
      ],
    },
    faq: {
      eyebrow: "Sık sorulan sorular",
      title: "Merak edilenler",
      items: [
        {
          q: "Soleach tam olarak ne yapar?",
          a: "Soleach, güzellik ve kadın ürünleri markalarına odaklanmış bir dijital reklam ajansıdır. Sosyal medya ve performans reklamları yönetiyor, içerik & kreatif üretiyor ve markaları arama motorları ile yapay zekâ motorlarında (SEO & GEO) görünür kılıyoruz.",
        },
        {
          q: "Ürün satıyor musunuz?",
          a: "Hayır. Biz ürün satmıyoruz; ürün satan güzellik markalarının dijital büyümesini yönetiyoruz. Reklam, içerik ve görünürlük tarafında markanızın büyüme ortağıyız.",
        },
        {
          q: "Hangi tür markalarla çalışıyorsunuz?",
          a: "Makyaj, cilt bakımı, kozmetik ve kadın ürünleri kategorisindeki markalarla çalışıyoruz. Yeni kurulan markalardan büyümek isteyen yerleşik markalara kadar geniş bir yelpazeye hizmet veriyoruz.",
        },
        {
          q: "GEO nedir ve neden önemli?",
          a: "GEO (Generative Engine Optimization), markanızın ChatGPT, Perplexity ve Google AI Overviews gibi üretken yapay zekâ motorlarında doğru şekilde görünmesini sağlar. Tüketiciler artık ürün araştırmasını bu araçlarla yapıyor; GEO ile markanızın bu yanıtlarda yer almasını sağlıyoruz.",
        },
        {
          q: "Sonuçları nasıl ölçüyorsunuz?",
          a: "Reklam getirisi (ROAS), edinme başına maliyet, dönüşüm oranı ve marka görünürlüğü gibi net metriklerle ilerliyoruz. Düzenli ve şeffaf raporlarla her kampanyanın performansını paylaşıyoruz.",
        },
        {
          q: "Nasıl başlıyoruz?",
          a: "İletişim formunu doldurmanız yeterli. Ücretsiz bir strateji görüşmesi planlıyor, markanızı dinliyor ve size özel bir büyüme yol haritası sunuyoruz.",
        },
      ],
    },
    ctaBand: {
      title: "Markanızı büyütmeye hazır mısınız?",
      subtitle:
        "Ücretsiz strateji görüşmesi için formu doldurun. Markanızı dinleyip size özel bir büyüme planı çıkaralım.",
      button: "Hadi başlayalım",
    },
  },
  services: [
    {
      key: "ads",
      icon: "ads",
      title: "Sosyal Medya & Performans Reklamları",
      tagline: "Doğru kitleye, doğru anda ulaşın",
      summary:
        "Meta (Instagram & Facebook) ve TikTok üzerinde satış odaklı reklam kampanyaları kuruyor, yönetiyor ve sürekli optimize ediyoruz. Bütçenizi en yüksek getiriye yönlendiriyoruz.",
      features: [
        "Instagram, Facebook ve TikTok reklam yönetimi",
        "Satış ve dönüşüm odaklı kampanya kurulumu",
        "Kitle hedefleme, yeniden pazarlama ve huni kurgusu",
        "A/B testleri ve sürekli optimizasyon",
        "Şeffaf performans raporlaması (ROAS, CPA)",
      ],
      outcome:
        "Reklam bütçenizden ölçülebilir, kârlı bir büyüme.",
    },
    {
      key: "creative",
      icon: "creative",
      title: "İçerik & Kreatif Üretim",
      tagline: "Durdurup satan görseller",
      summary:
        "Ürününüzü en iyi şekilde anlatan reklam kreatifleri, Reels ve kısa videolar üretiyoruz. Güzellik kategorisinin estetiğini performansla buluşturuyoruz.",
      features: [
        "Ürün fotoğrafı ve reklam görseli konsepti",
        "Reels, TikTok ve kısa video üretimi",
        "UGC tarzı, güven veren içerikler",
        "Marka kimliğine uygun görsel dil",
        "Platforma özel formatlar ve varyasyonlar",
      ],
      outcome:
        "İzleyeni durduran, tıklatan ve satın aldıran içerikler.",
    },
    {
      key: "seo-geo",
      icon: "search",
      title: "SEO & GEO (Yapay Zekâ Görünürlüğü)",
      tagline: "Google'da ve AI motorlarında bulunun",
      summary:
        "Markanızı hem geleneksel arama motorlarında (SEO) hem de ChatGPT, Perplexity gibi üretken yapay zekâ motorlarında (GEO) görünür kılıyoruz. Geleceğin aramasına bugünden hazırlanın.",
      features: [
        "Teknik ve içerik odaklı SEO",
        "GEO: AI motorlarında marka görünürlüğü",
        "Yapılandırılmış veri ve zengin sonuç kurgusu",
        "Anahtar kelime ve içerik stratejisi",
        "Ürün ve kategori sayfası optimizasyonu",
      ],
      outcome:
        "Müşteriler markanızı ararken ve AI'a sorarken sizi bulur.",
    },
  ],
  servicesPage: {
    hero: {
      eyebrow: "Hizmetler",
      title: "Güzellik markanızı büyüten hizmetler",
      subtitle:
        "Reklamdan içeriğe, aramadan yapay zekâ görünürlüğüne kadar; markanızın büyümesi için gereken her şey.",
    },
    featuresLabel: "Neler dahil",
    outcomeLabel: "Sonuç",
  },
  aboutPage: {
    hero: {
      eyebrow: "Hakkımızda",
      title: "Güzellik markalarının büyüme ortağı",
      subtitle:
        "Soleach, güzellik ve kadın ürünleri kategorisine odaklanmış bir dijital reklam ajansıdır. Estetiği ve performansı aynı masada buluşturuyoruz.",
    },
    story: {
      title: "Hikâyemiz",
      paragraphs: [
        "Soleach, güzellik markalarının dijitalde hak ettiği yeri almasını sağlamak için kuruldu. Bu kategorinin başka hiçbir şeye benzemediğini biliyoruz: burada estetik kadar güven, görsel kadar sonuç önemli.",
        "Her sektöre koşan genel bir ajans değiliz. Yalnızca makyaj, cilt bakımı, kozmetik ve kadın ürünleri markalarıyla çalışıyoruz. Bu odak, kategorinin dilini, alıcısını ve satın alma yolculuğunu derinlemesine tanımamızı sağlıyor.",
        "Reklamı sanata, sanatı da satışa dönüştürüyoruz. Amacımız markanızı yalnızca güzel göstermek değil; sürdürülebilir, ölçülebilir bir büyüme yaratmak.",
      ],
    },
    mission: {
      title: "Misyonumuz",
      body: "Güzellik markalarını, doğru kitleyle buluşturan ve satışa dönüşen dijital kampanyalarla büyütmek.",
    },
    vision: {
      title: "Vizyonumuz",
      body: "Güzellik kategorisinde akla ilk gelen dijital büyüme ortağı olmak; hem klasik aramada hem de yapay zekâ çağında markaları görünür kılmak.",
    },
    values: {
      title: "Değerlerimiz",
      items: [
        {
          title: "Odak",
          desc: "Tek bir kategoriye odaklanıyoruz ve o kategoride en iyisi olmak için çalışıyoruz.",
        },
        {
          title: "Şeffaflık",
          desc: "Her bütçenin nereye gittiğini ve ne getirdiğini açıkça paylaşıyoruz.",
        },
        {
          title: "Estetik + veri",
          desc: "Güzel görüneni değil, güzel görünüp aynı zamanda satanı üretiyoruz.",
        },
        {
          title: "Geleceğe hazır",
          desc: "Aramanın ve tüketici davranışının nasıl değiştiğini takip edip markanızı öne taşıyoruz.",
        },
      ],
    },
  },
  contactPage: {
    hero: {
      eyebrow: "İletişim",
      title: "Markanızı birlikte büyütelim",
      subtitle:
        "Aşağıdaki formu doldurun, markanızı dinleyelim ve size özel bir büyüme yol haritası çıkaralım. 24 saat içinde dönüş yapıyoruz.",
    },
    formTitle: "Ücretsiz strateji görüşmesi",
    formSubtitle:
      "Markanız hakkında birkaç soruya yanıt verin; ihtiyacınıza en uygun planla size dönelim.",
    formButton: "Formu yeni sekmede aç",
    emailTitle: "E-posta",
    emailDesc: "Formu tercih etmiyorsanız doğrudan e-posta da gönderebilirsiniz.",
    orLabel: "veya",
  },
  footer: {
    tagline: "Güzellik ve kadın ürünleri markaları için dijital reklam ajansı.",
    servicesHeading: "Hizmetler",
    companyHeading: "Kurumsal",
    followHeading: "Takip edin",
    rights: "Tüm hakları saklıdır.",
  },
};

const en: Dictionary = {
  brandTagline: "Digital ad agency for beauty brands",
  nav: {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Contact",
    cta: "Free consultation",
  },
  routes: { services: "services", about: "about", contact: "contact" },
  meta: {
    home: {
      title: "Soleach | Digital Advertising Agency for Beauty Brands",
      description:
        "Soleach is a digital advertising agency that grows makeup, cosmetics and women's product brands with performance ads, content & creative production, and SEO & GEO.",
    },
    services: {
      title: "Services | Soleach Digital Advertising Agency",
      description:
        "Social & performance advertising, content & creative production, and SEO & GEO for beauty and cosmetics brands.",
    },
    about: {
      title: "About | Soleach",
      description:
        "Soleach is a digital advertising agency focused on the beauty and women's products category. We turn brand stories into sales.",
    },
    contact: {
      title: "Contact | Soleach",
      description:
        "Ready to grow your brand? Fill out the form for a free strategy call and we'll get back to you within 24 hours.",
    },
  },
  home: {
    hero: {
      eyebrow: "Beauty · Cosmetics · Women's products",
      title: "The digital agency that",
      titleAccent: "grows your beauty brand",
      subtitle:
        "Performance advertising, scroll-stopping creative, and visibility across search and AI engines for makeup, skincare and women's product brands. We turn aesthetics into sales.",
      ctaPrimary: "Free strategy call",
      ctaSecondary: "Explore services",
      note: "Reply within 24 hours · No commitment",
    },
    stats: [
      { value: "100%", label: "Focused on beauty" },
      { value: "3x", label: "Target return on ad spend" },
      { value: "24/7", label: "Campaign & performance tracking" },
    ],
    servicesIntro: {
      eyebrow: "What we do",
      title: "Three pillars that grow your brand",
      subtitle:
        "From advertising to content, from search visibility to AI engines — everything your beauty brand needs to grow, under one roof.",
    },
    process: {
      eyebrow: "How we work",
      title: "A clear, measurable process",
      subtitle:
        "We move on data, not guesswork. At every step you see exactly what we do and why.",
      steps: [
        {
          title: "Discovery",
          desc: "We get to know your brand, your product range and your audience, then map opportunities through competitor and market analysis.",
        },
        {
          title: "Strategy",
          desc: "We build your budget, channel and messaging plan with measurable goals and a clear roadmap.",
        },
        {
          title: "Production & Launch",
          desc: "We produce the creative and launch the campaigns, reaching the right audience with the right message.",
        },
        {
          title: "Optimization",
          desc: "We continuously track and test, steering budget toward the highest return and scaling what works.",
        },
      ],
    },
    whyUs: {
      eyebrow: "Why Soleach",
      title: "We focus only on beauty brands",
      subtitle:
        "We're not an agency that chases every industry. We know the language, the aesthetics and the buyer of the beauty, cosmetics and women's products category.",
      points: [
        {
          title: "Category expertise",
          desc: "From skincare to makeup, we understand how the category is bought and build our creative around it.",
        },
        {
          title: "Aesthetics + performance",
          desc: "We produce content that doesn't just look good but converts, growing your brand image and sales at once.",
        },
        {
          title: "Transparent reporting",
          desc: "We share exactly where every budget goes and what it returns, with clear reports.",
        },
        {
          title: "Ready for the AI era",
          desc: "We make your brand visible not only on Google but also on AI engines like ChatGPT and Perplexity.",
        },
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Good to know",
      items: [
        {
          q: "What exactly does Soleach do?",
          a: "Soleach is a digital advertising agency focused on beauty and women's product brands. We manage social and performance advertising, produce content & creative, and make brands visible on search and AI engines (SEO & GEO).",
        },
        {
          q: "Do you sell products?",
          a: "No. We don't sell products; we manage the digital growth of beauty brands that do. We're your growth partner across advertising, content and visibility.",
        },
        {
          q: "What kind of brands do you work with?",
          a: "We work with brands in the makeup, skincare, cosmetics and women's products category — from newly launched brands to established ones looking to scale.",
        },
        {
          q: "What is GEO and why does it matter?",
          a: "GEO (Generative Engine Optimization) ensures your brand appears correctly in generative AI engines such as ChatGPT, Perplexity and Google AI Overviews. Consumers now research products with these tools; GEO makes sure your brand shows up in those answers.",
        },
        {
          q: "How do you measure results?",
          a: "We move on clear metrics: return on ad spend (ROAS), cost per acquisition, conversion rate and brand visibility. We share the performance of every campaign with regular, transparent reports.",
        },
        {
          q: "How do we get started?",
          a: "Just fill out the contact form. We'll schedule a free strategy call, listen to your brand, and present a growth roadmap tailored to you.",
        },
      ],
    },
    ctaBand: {
      title: "Ready to grow your brand?",
      subtitle:
        "Fill out the form for a free strategy call. Let's listen to your brand and build a growth plan made for you.",
      button: "Let's get started",
    },
  },
  services: [
    {
      key: "ads",
      icon: "ads",
      title: "Social & Performance Advertising",
      tagline: "Reach the right audience at the right moment",
      summary:
        "We build, manage and continuously optimize sales-focused ad campaigns on Meta (Instagram & Facebook) and TikTok, steering your budget toward the highest return.",
      features: [
        "Instagram, Facebook and TikTok ad management",
        "Sales- and conversion-focused campaign setup",
        "Audience targeting, retargeting and funnel design",
        "A/B testing and continuous optimization",
        "Transparent performance reporting (ROAS, CPA)",
      ],
      outcome: "Measurable, profitable growth from your ad budget.",
    },
    {
      key: "creative",
      icon: "creative",
      title: "Content & Creative Production",
      tagline: "Visuals that stop the scroll and sell",
      summary:
        "We produce ad creative, Reels and short-form videos that show your product at its best — pairing the aesthetics of the beauty category with performance.",
      features: [
        "Product photography and ad creative concepts",
        "Reels, TikTok and short-form video production",
        "UGC-style, trust-building content",
        "A visual language true to your brand identity",
        "Platform-specific formats and variations",
      ],
      outcome: "Content that stops, clicks and converts.",
    },
    {
      key: "seo-geo",
      icon: "search",
      title: "SEO & GEO (AI Visibility)",
      tagline: "Be found on Google and AI engines",
      summary:
        "We make your brand visible both on traditional search engines (SEO) and on generative AI engines like ChatGPT and Perplexity (GEO). Prepare today for the search of tomorrow.",
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
      title: "Services that grow your beauty brand",
      subtitle:
        "From advertising to content, from search to AI visibility — everything your brand needs to grow.",
    },
    featuresLabel: "What's included",
    outcomeLabel: "Outcome",
  },
  aboutPage: {
    hero: {
      eyebrow: "About",
      title: "The growth partner for beauty brands",
      subtitle:
        "Soleach is a digital advertising agency focused on the beauty and women's products category. We bring aesthetics and performance to the same table.",
    },
    story: {
      title: "Our story",
      paragraphs: [
        "Soleach was founded to help beauty brands claim the place they deserve in the digital world. We know this category is like no other: here, trust matters as much as aesthetics, and results matter as much as visuals.",
        "We're not a generic agency chasing every industry. We work only with makeup, skincare, cosmetics and women's product brands. That focus lets us deeply understand the category's language, its buyer and its purchase journey.",
        "We turn advertising into art, and art into sales. Our goal isn't just to make your brand look beautiful — it's to create sustainable, measurable growth.",
      ],
    },
    mission: {
      title: "Our mission",
      body: "To grow beauty brands with digital campaigns that connect them to the right audience and convert into sales.",
    },
    vision: {
      title: "Our vision",
      body: "To be the first-choice digital growth partner in the beauty category — making brands visible in both classic search and the AI era.",
    },
    values: {
      title: "Our values",
      items: [
        {
          title: "Focus",
          desc: "We focus on a single category and work to be the best at it.",
        },
        {
          title: "Transparency",
          desc: "We openly share where every budget goes and what it returns.",
        },
        {
          title: "Aesthetics + data",
          desc: "We don't produce what merely looks good, but what looks good and sells.",
        },
        {
          title: "Future-ready",
          desc: "We track how search and consumer behavior change, and push your brand ahead.",
        },
      ],
    },
  },
  contactPage: {
    hero: {
      eyebrow: "Contact",
      title: "Let's grow your brand together",
      subtitle:
        "Fill out the form below, let us listen to your brand, and we'll build a growth roadmap made for you. We reply within 24 hours.",
    },
    formTitle: "Free strategy call",
    formSubtitle:
      "Answer a few questions about your brand and we'll come back with the plan that fits you best.",
    formButton: "Open form in a new tab",
    emailTitle: "Email",
    emailDesc: "If you'd rather not use the form, you can email us directly.",
    orLabel: "or",
  },
  footer: {
    tagline: "A digital advertising agency for beauty and women's product brands.",
    servicesHeading: "Services",
    companyHeading: "Company",
    followHeading: "Follow us",
    rights: "All rights reserved.",
  },
};

const dictionaries: Record<Locale, Dictionary> = { tr, en };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
