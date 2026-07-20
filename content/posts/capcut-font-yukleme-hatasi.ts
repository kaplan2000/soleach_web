import type { BlogPost } from "@/lib/blog";

export const capcutFontYuklemeHatasi: BlogPost = {
  id: "capcut-font-yukleme-hatasi",
  publishedAt: "2026-07-20",
  category: "creative",
  locales: {
    tr: {
      slug: "capcut-font-yuklenmiyor-ttf-otf-cozumu",
      title: "CapCut'ta Brand Kit font yükleme hatası, tahmini sebebi ve çözümü",
      metaTitle: "CapCut Font Yükleme Hatası ve Çözümü | Soleach",
      metaDescription:
        "CapCut'ta 'Couldn't upload, try again' hatasını TTF'yi OTF'ye çevirerek çözdük. Font mühendisliği kaynaklarına dayanan teknik açıklama ve adım adım çözüm.",
      excerpt:
        "Google Fonts'tan indirdiğimiz bir el yazısı fontu CapCut'a yükleyemedik; aynı dosyayı OTF'ye çevirince sorunsuz yüklendi. Neden olduğunu font dosyasının içine girip araştırdık.",
      intro: [
        "Marka kiti için Google Fonts'tan indirdiğimiz dokuz fonttan sekizi CapCut'ın Brand Kit yükleyicisinde 'Couldn't upload, try again' hatasıyla reddedildi — hem masaüstünde hem web'de. Aynı klasördeki basit bir sans-serif font (Anton) ise ilk denemede sorunsuz yüklendi. Dosyaları tek tek kontrol ettik: hiçbiri bozuk değildi, lisans kısıtlaması yoktu. Tek fark, TTF yerine OTF formatına çevirdiğimizde sorunun kaybolmasıydı.",
        "Bu yazıda 'dosyayı çevir, sorun çözülür' tavsiyesinin arkasındaki gerçek teknik mekanizmayı anlatıyoruz: TTF ve OTF'nin bir font dosyasının içinde gerçekte ne kadar farklı şeyler tuttuğunu, bu farkın neden bazı uygulamaların yükleyicisini şaşırtabileceğini ve kendi başına aynı sorunla karşılaşırsan izleyebileceğin adımları.",
      ],
      sections: [
        {
          h2: "CapCut'ta 'Couldn't upload, try again' hatası aslında ne söylüyor?",
          blocks: [
            {
              type: "p",
              text: "Kısa cevap: pek bir şey söylemiyor. Hata mesajı jenerik ve CapCut, Brand Kit'in font dosyalarını hangi kritere göre kabul ya da reddettiğini herhangi bir resmi teknik dokümantasyonda açıklamıyor — kendi taramamızda böyle bir belgeye rastlamadık. Yani bu bir 'bilinen, dokümante edilmiş kural ihlali' hatası değil, uygulamanın iç yükleme/parse mantığının bir yerde takıldığı bir durum.",
            },
            {
              type: "p",
              text: "İlk şüphemiz dosyanın bozuk ya da lisans açısından kısıtlı olmasıydı. Reddedilen Allura-Regular.ttf dosyasını `fontTools` kütüphanesiyle açıp kontrol ettik: geçerli bir TrueType dosyası, 15 tablo içeriyor, `OS/2` tablosundaki `fsType` alanı 0 — yani gömme/kurulum kısıtlaması yok, dosya sağlam ve yüklenebilir olmalı. Sorun dosyanın 'geçerliliğinde' değil, CapCut'ın onu nasıl işlediğindeydi.",
            },
          ],
        },
        {
          h2: "TTF ve OTF arasındaki fark tam olarak ne?",
          blocks: [
            {
              type: "p",
              text: "İkisi de aynı OpenType konteyner formatının (sfnt) farklı 'lehçeleri'. [Microsoft'un OpenType spesifikasyonuna göre](https://learn.microsoft.com/en-us/typography/opentype/spec/otff), TrueType anahat verisi içeren fontlar dosya başında 0x00010000 sürüm imzası taşır; CFF (Compact Font Format / PostScript) anahat verisi içerenler ise 'OTTO' imzasını kullanır. Bir font dosyası bu ikisinden yalnızca birini taşıyabilir — glyph şekilleri ya `glyf` tablosunda (TrueType) ya `CFF` tablosunda (PostScript) tutulur, ikisi aynı anda bulunmaz.",
            },
            {
              type: "p",
              text: "Asıl fark harflerin nasıl çizildiğinde. TrueType (`glyf`) harfleri kuadratik Bézier eğrileriyle tanımlar; CFF ise kübik Bézier eğrileri kullanır. [Adobe'nin Typekit blogu](https://blog.typekit.com/2010/12/02/the-benefits-of-opentypecff-over-truetype/) bu farkı somutlaştırıyor: kübik eğriler daha az kontrol noktasıyla aynı kavisi tarif edebildiği ve CFF, tekrar eden path segmentlerini ortak bir rutine indirgeyen 'subroutinization' adında bir sıkıştırma sürecinden geçtiği için, OpenType/CFF fontlar karşılaştırılabilir TrueType fontlardan ortalama %20-50 daha küçük dosya boyutuna sahip.",
            },
            {
              type: "ul",
              items: [
                "TTF (`glyf`): kuadratik eğriler, genelde daha çok nokta, ekran hinting'i için tarihsel olarak daha güçlü destek.",
                "OTF (`CFF`): kübik eğriler, daha az nokta, subroutinization sayesinde daha küçük dosya.",
                "İkisi de aynı OpenType katmanlarını (GSUB, GPOS, GDEF — ligatür ve konumlandırma kuralları) taşıyabilir; fark yalnızca anahat matematiğinde ve buna bağlı tablo setinde.",
              ],
            },
          ],
        },
        {
          h2: "Font dönüştürmek CapCut'taki hatayı neden çözüyor?",
          blocks: [
            {
              type: "p",
              text: "Bir dosyayı FontForge ya da bir online dönüştürücüyle TTF'den OTF'ye çevirmek, sadece uzantıyı değiştirmiyor — dosyayı sıfırdan yeniden inşa ediyor: yeni bir tablo dizini, yeni checksum değerleri ve CFF anahatlarına dönüştürülmüş glyph verisi. Bunun önemli bir yan etkisi var: [OpenType spesifikasyonuna göre](https://learn.microsoft.com/en-us/typography/opentype/spec/otff) `fpgm`, `prep`, `cvt` ve `gasp` tabloları yalnızca TrueType anahatlı fontlarda tanımlıdır — CFF anahatlı bir OTF dosyasının yapısında bu tablolara zaten yer yok. Bu tablolar, fontun küçük punto boyutlarında ekranda nasıl 'hint'leneceğini (piksel ızgarasına nasıl oturtulacağını) tarif eden bytecode talimatları taşır.",
            },
            {
              type: "p",
              text: "Yani OTF'ye çevirdiğinde elde ettiğin dosya, 'aynı fontun farklı uzantılı hâli' değil; TrueType'a özgü hinting bytecode'unun barınamayacağı, sıfırdan derlenmiş, yapısal olarak daha sade bir dosya. Bunu netleştirmek gerekiyor: CapCut hangi tabloyu ya da alanı reddettiğini yayınlamıyor, dolayısıyla 'tam olarak şu tablo CapCut'ın parser'ını kırıyor' demek mümkün değil — bu doğrulanamayan bir iddia olur. Doğrulayabildiğimiz şey, yeniden oluşturulan dosyanın orijinalinden yapısal olarak gerçekten farklı olduğu ve bu farkın, uygulamanın yükleyicisi için 'daha az sürpriz içeren' bir girdi anlamına gelebileceği.",
            },
          ],
        },
        {
          h2: "Anton neden ilk denemede yüklendi de Allura yüklenmedi?",
          blocks: [
            {
              type: "p",
              text: "İki fontun karakteri çok farklı. Anton kalın, bağlantısız harflerden oluşan bir başlık fontu; Allura ise harfleri birbirine bağlayan bir el yazısı (script) fontu. Bizim incelediğimiz Allura dosyası 1048 glyph ve harfleri bağlamak için gereken `GSUB`/`GPOS`/`GDEF` (bitişik alternatif/ligatür) tablolarını içeriyordu — bir script fontun akıcı görünmesi için gereken, ama basit bir sans-serif fontta genelde bulunmayan katman.",
            },
            {
              type: "quote",
              text: "ttfautohint often struggles to hint display or handwritten typefaces.",
              cite: "Google Fonts Guide, Static fonts specifics",
              citeUrl: "https://googlefonts.github.io/gf-guide/statics.html",
            },
            {
              type: "p",
              text: "Bunun bir nedeni de kaynağında olabilir: [Google Fonts'un resmi derleme rehberine göre](https://googlefonts.github.io/gf-guide/statics.html), statik TTF dosyaları otomatik olarak `ttfautohint` aracıyla hinting'lenir — ama bu araç, tam da display ve el yazısı fontlarda hinting üretirken zorlanıyor. Yani Allura gibi bir script fontun TTF'si, Anton gibi sade bir sans fonta kıyasla daha karmaşık ya da alışılmadık hinting/layout verisiyle paketlenmiş olabilir. Bunu kesin bir nedensellik olarak sunmuyoruz — CapCut'ın kendi doğrulama mantığını bilmiyoruz — ama gözlemlediğimiz örüntüyle (basit font geçti, karmaşık script font geçmedi) tutarlı bir açıklama.",
            },
          ],
        },
        {
          h2: "Font CapCut'a yüklenmiyorsa adım adım ne yapmalısın?",
          blocks: [
            {
              type: "ul",
              items: [
                "Önce dosyanın sağlam olduğunu doğrula: macOS'ta Font Book'ta, Windows'ta çift tıklayarak önizlemesi açılıyorsa dosya bozuk değildir.",
                "Klasik yeniden başlatma adımlarını atlama: CapCut masaüstü uygulamasını tamamen kapat (Cmd+Q / Alt+F4) ve yeniden aç — birçok yükleme hatası, uygulama yeni bir oturumla başladığında kendiliğinden düzeliyor.",
                "Platformu değiştir: masaüstünde başarısız olan bir yükleme web.capcut.com üzerinden bazen sorunsuz geçiyor; tam tersi de doğru. İkisi ayrı yükleme uçları kullanıyor, biri takılırsa diğerini dene.",
                "CapCut'ı güncelle (masaüstünde Ayarlar → Güncellemeleri Kontrol Et) ya da uygulamayı kaldırıp yeniden kur; bilinen yükleme bug'ları sürüm güncellemeleriyle giderilebiliyor.",
                "Farklı bir tarayıcı ya da tarayıcı önbelleğini temizlemiş bir oturum dene — web yükleyicisinde bazen eski önbellek/uzantı çakışması hataya neden oluyor.",
                "Bunların hiçbiri işe yaramazsa TTF'yi ücretsiz FontForge ile aç, File → Generate Fonts'tan 'OpenType (CFF)' formatını seçip .otf olarak dışa aktar. Masaüstü uygulama kurmak istemiyorsan CloudConvert gibi bir online dönüştürücü de aynı işi görür.",
                "OTF dosyasını CapCut'a yeniden yükle.",
                "Hâlâ olmuyorsa Brand Kit yükleyicisini tamamen atla: fontu doğrudan işletim sistemine kur (Font Book / Windows Yazı Tipleri), CapCut'ı kapatıp yeniden aç — font 'System Fonts' listesinde otomatik görünür.",
                "Not: OTF'ye çevirince fontun ince hinting ayarları gidebilir; bu genelde yalnızca çok küçük punto boyutlarında, piksel düzeyinde fark eder — Reels/TikTok başlıklarında kullandığın büyük puntolarda pratikte görünmez.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "TTF'yi OTF'ye çevirince fontun görünümü değişir mi?",
          a: "Büyük harf boyutlarında (video başlıkları, alt yazılar) gözle fark edilmez; iki format da aynı glyph şekillerini farklı matematiksel eğrilerle (kuadratik/kübik) tarif eder. Fark ancak çok küçük punto boyutlarında, ekran hinting'i devreye girdiğinde teorik olarak hissedilebilir.",
        },
        {
          q: "Fontu dönüştürmek telif hakkı sorunu yaratır mı?",
          a: "Format dönüştürme, fontun tasarımını veya lisansını değiştirmez; sadece dosyanın iç kodlamasını değiştirir. Google Fonts'taki fontların çoğu SIL Open Font License ile geliyor ve bu lisans değişiklik/türetmeye izin veriyor — yine de kullandığın fontun kendi lisans dosyasını kontrol etmek her zaman doğru olur.",
        },
        {
          q: "CapCut hangi font formatlarını destekliyor?",
          a: "CapCut arayüzü hem .ttf hem .otf yükleyebildiğini belirtiyor; ancak bu yazıda anlattığımız gibi, format geçerli olsa bile yükleyici tarafında beklenmedik reddedilmeler yaşanabiliyor. Sorun yaşarsan önce OTF'ye çevirmeyi, olmazsa sistem fontu olarak kurmayı dene.",
        },
        {
          q: "Fontu işletim sistemine kurmak yerine neden Brand Kit'e yüklemek isteyeyim?",
          a: "Brand Kit'e yüklenen fontlar CapCut hesabına bağlı olarak farklı cihazlarda ve (ekip kullanıyorsan) farklı kullanıcılarda senkronize olur. Sistem fontu ise yalnızca kurulu olduğu bilgisayarda çalışır — projeyi başka birine gönderdiğinde o kişide font görünmeyebilir.",
        },
      ],
      sources: [
        {
          label:
            "Microsoft. (2024). OpenType font file (OpenType 1.9.1). Microsoft Learn — Typography.",
          url: "https://learn.microsoft.com/en-us/typography/opentype/spec/otff",
          publisher: "Microsoft",
        },
        {
          label:
            "Adobe / Typekit Blog. (2010). The Benefits of OpenType/CFF over TrueType.",
          url: "https://blog.typekit.com/2010/12/02/the-benefits-of-opentypecff-over-truetype/",
          publisher: "Adobe (Typekit)",
        },
        {
          label: "Google Fonts. Static fonts specifics. Google Fonts Guide.",
          url: "https://googlefonts.github.io/gf-guide/statics.html",
          publisher: "Google Fonts",
        },
      ],
      tags: ["CapCut", "Font mühendisliği", "İçerik üretimi", "Video düzenleme"],
    },
    en: {
      slug: "capcut-font-upload-error-ttf-otf-fix",
      title: "CapCut won't upload your font? Why converting TTF to OTF fixes it",
      metaTitle: "CapCut Font Upload Error, Explained | Soleach",
      metaDescription:
        "We hit CapCut's 'Couldn't upload, try again' error and fixed it by converting TTF to OTF. Here's the actual font-engineering explanation, with sources.",
      excerpt:
        "A handwriting font from Google Fonts wouldn't upload to CapCut — until we converted it to OTF. We opened the font file itself to find out why.",
      intro: [
        "While building a brand kit, eight of nine fonts we downloaded from Google Fonts got rejected by CapCut's Brand Kit uploader with 'Couldn't upload, try again' — on both desktop and web. A simple sans-serif (Anton) in the same folder uploaded fine on the first try. We checked the files one by one: none were corrupted, none had licensing restrictions. The only thing that made the error disappear was converting from TTF to OTF.",
        "This piece explains the actual technical mechanism behind that fix: what TTF and OTF really store differently inside a font file, why that difference can trip up an app's uploader, and what to do if you run into the same wall.",
      ],
      sections: [
        {
          h2: "What does CapCut's 'Couldn't upload, try again' error actually tell you?",
          blocks: [
            {
              type: "p",
              text: "Short answer: not much. The message is generic, and CapCut doesn't publish any technical documentation explaining exactly what criteria the Brand Kit uploader uses to accept or reject a font file — we couldn't find one in our own search. This isn't a documented rule violation; it's the app's internal upload/parsing logic getting stuck somewhere.",
            },
            {
              type: "p",
              text: "Our first suspicion was a corrupted or license-restricted file. We opened the rejected Allura-Regular.ttf with the `fontTools` library: it's a valid TrueType file with 15 tables, and the `fsType` field in its `OS/2` table is 0 — meaning no embedding restriction, the file should be perfectly installable and uploadable. The problem wasn't the file's validity; it was how CapCut processed it.",
            },
          ],
        },
        {
          h2: "What exactly is the difference between TTF and OTF?",
          blocks: [
            {
              type: "p",
              text: "Both are dialects of the same OpenType container format (sfnt). Per [Microsoft's OpenType specification](https://learn.microsoft.com/en-us/typography/opentype/spec/otff), fonts containing TrueType outline data carry the version signature 0x00010000 at the start of the file; fonts containing CFF (Compact Font Format / PostScript) outline data use the 'OTTO' signature instead. A single font file can only carry one of the two — glyph shapes live either in the `glyf` table (TrueType) or the `CFF` table (PostScript), never both.",
            },
            {
              type: "p",
              text: "The real difference is in how letters are drawn. TrueType (`glyf`) defines glyphs using quadratic Bézier curves; CFF uses cubic Bézier curves instead. [Adobe's Typekit blog](https://blog.typekit.com/2010/12/02/the-benefits-of-opentypecff-over-truetype/) makes this concrete: because cubic curves can describe the same shape with fewer control points, and because CFF goes through a compression step called 'subroutinization' that reduces repeated path segments to a shared routine, OpenType/CFF fonts average 20% to 50% smaller than comparable TrueType fonts.",
            },
            {
              type: "ul",
              items: [
                "TTF (`glyf`): quadratic curves, generally more points, historically stronger on-screen hinting support.",
                "OTF (`CFF`): cubic curves, fewer points, smaller files thanks to subroutinization.",
                "Both can carry the same OpenType layout layers (GSUB, GPOS, GDEF — ligature and positioning rules); the difference is purely in outline math and the resulting table set.",
              ],
            },
          ],
        },
        {
          h2: "Why does converting the font fix the CapCut error?",
          blocks: [
            {
              type: "p",
              text: "Converting a file from TTF to OTF with FontForge or an online converter doesn't just change the extension — it rebuilds the file from scratch: a new table directory, new checksums, and glyph data translated into CFF outlines. That has an important side effect: [per the OpenType spec](https://learn.microsoft.com/en-us/typography/opentype/spec/otff), the `fpgm`, `prep`, `cvt` and `gasp` tables are defined only for TrueType-outline fonts — a CFF-outline OTF file structurally has no room for them. These tables carry the bytecode instructions that describe how a font should be 'hinted', or fitted to the pixel grid, at small sizes.",
            },
            {
              type: "p",
              text: "So the OTF you re-upload isn't 'the same font with a different extension' — it's a freshly compiled, structurally leaner file that simply cannot contain TrueType-specific hinting bytecode. To be precise about what we can and can't claim: CapCut doesn't publish which table or field its uploader rejects, so we can't say 'this exact table breaks CapCut's parser' — that would be an unverifiable claim. What we can verify is that the rebuilt file is genuinely, structurally different from the original, and that difference plausibly means less unusual data for the uploader to choke on.",
            },
          ],
        },
        {
          h2: "Why did Anton upload fine on the first try, but Allura didn't?",
          blocks: [
            {
              type: "p",
              text: "The two fonts are very different in character. Anton is a bold, disconnected display font; Allura is a script (handwriting-style) font whose letters connect to each other. The Allura file we inspected has 1,048 glyphs and includes the `GSUB`/`GPOS`/`GDEF` tables needed for contextual/ligature substitution — the layer a script font needs to look fluid, which a simple sans-serif typically doesn't carry.",
            },
            {
              type: "quote",
              text: "ttfautohint often struggles to hint display or handwritten typefaces.",
              cite: "Google Fonts Guide, Static fonts specifics",
              citeUrl: "https://googlefonts.github.io/gf-guide/statics.html",
            },
            {
              type: "p",
              text: "Part of the reason may sit upstream, at the source. [Google Fonts' own build guide](https://googlefonts.github.io/gf-guide/statics.html) states that static TTF files are auto-hinted with `ttfautohint` — and that this tool specifically struggles to hint display and handwritten typefaces. That means a script font's TTF like Allura's may ship with more complex or unusual hinting/layout data than a plain sans like Anton's. We're not presenting this as a confirmed cause — we don't have visibility into CapCut's own validation logic — but it's consistent with the pattern we actually observed: the simple font passed, the complex script font didn't.",
            },
          ],
        },
        {
          h2: "What should you do, step by step, if a font won't upload to CapCut?",
          blocks: [
            {
              type: "ul",
              items: [
                "Confirm the file isn't corrupted first: if it opens a preview in Font Book (macOS) or by double-clicking (Windows), the file itself is fine.",
                "Don't skip the classic restart: fully quit CapCut desktop (Cmd+Q / Alt+F4) and reopen it — a surprising number of upload failures clear up once the app starts a fresh session.",
                "Switch platforms: an upload that fails on desktop sometimes goes through fine on web.capcut.com, and vice versa. They're separate upload paths, so if one is stuck, try the other.",
                "Update CapCut (desktop: Settings → Check for Updates) or uninstall and reinstall it — known upload bugs do get patched in version updates.",
                "Try a different browser, or a session with a cleared cache, for the web uploader — stale cache or extension conflicts occasionally cause the same generic error.",
                "If none of that works, open the TTF in the free FontForge app, go to File → Generate Fonts, choose 'OpenType (CFF)', and export as .otf. An online converter like CloudConvert does the same job if you'd rather not install anything.",
                "Re-upload the OTF file to CapCut.",
                "If it still fails, skip the Brand Kit uploader entirely: install the font at the OS level (Font Book / Windows Fonts), fully quit and reopen CapCut — the font shows up automatically under 'System Fonts'.",
                "One caveat: converting to OTF can drop fine hinting detail; in practice this only shows at very small pixel sizes and won't be visible at the large sizes typical of Reels/TikTok titles.",
              ],
            },
          ],
        },
      ],
      faq: [
        {
          q: "Does converting TTF to OTF change how the font looks?",
          a: "At large sizes — video titles, captions — not visibly. Both formats describe the same glyph shapes, just with different curve math (quadratic vs. cubic). Any difference is theoretically only perceptible at very small point sizes, where on-screen hinting kicks in.",
        },
        {
          q: "Does converting a font's format create a copyright issue?",
          a: "Format conversion doesn't change a font's design or license — only its internal encoding. Most Google Fonts ship under the SIL Open Font License, which permits modification and redistribution of derivative works — but it's always worth checking the specific license file bundled with the font you're using.",
        },
        {
          q: "Which font formats does CapCut support?",
          a: "CapCut's interface states it accepts both .ttf and .otf. But as this piece shows, a technically valid file can still be rejected by the uploader unpredictably. If you hit that wall, try converting to OTF first, then fall back to installing the font at the system level.",
        },
        {
          q: "Why upload to Brand Kit instead of just installing the font on my system?",
          a: "Fonts uploaded to Brand Kit sync across devices tied to your CapCut account, and across teammates if you work with a team. A system-installed font only works on that one computer — if you share the project file, the font may not show up for whoever opens it.",
        },
      ],
      sources: [
        {
          label:
            "Microsoft. (2024). OpenType font file (OpenType 1.9.1). Microsoft Learn — Typography.",
          url: "https://learn.microsoft.com/en-us/typography/opentype/spec/otff",
          publisher: "Microsoft",
        },
        {
          label:
            "Adobe / Typekit Blog. (2010). The Benefits of OpenType/CFF over TrueType.",
          url: "https://blog.typekit.com/2010/12/02/the-benefits-of-opentypecff-over-truetype/",
          publisher: "Adobe (Typekit)",
        },
        {
          label: "Google Fonts. Static fonts specifics. Google Fonts Guide.",
          url: "https://googlefonts.github.io/gf-guide/statics.html",
          publisher: "Google Fonts",
        },
      ],
      tags: ["CapCut", "Font engineering", "Content production", "Video editing"],
    },
  },
};
