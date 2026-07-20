# Soleach İçerik Üretim Rehberi

Sosyal medya içeriğini (Reels/TikTok/YouTube) gerçek SEO + GEO değeri olan blog
yazısına dönüştürmek için tekrar kullanılabilir iş akışı, yazı şablonu ve konu
havuzu. Bu dosya repo'da yaşar; her yeni yazıda buradaki adımları izle.

---

## 1. Neden kopyala-yapıştır çalışmaz?

Ham sosyal medya metnini bloga taşımak üç nedenle işe yaramaz:

1. **İnce içerik (thin content):** 80-150 kelimelik bir caption, bir arama
   sorgusunu doyurucu şekilde cevaplamaz. Google da yapay zekâ motorları da
   "soruyu tam cevaplayan" sayfayı seçer.
2. **Arama niyeti eşleşmez:** Video "izleyen birini durdurmak" için kurgulanır;
   blog "bir soruyu yazarak arayan birine" cevap verir. Aynı konu, farklı kurgu
   ister.
3. **Yapı yok:** Transkript dökümü başlıksız, hiyerarşisiz bir metin üretir.
   Crawler'lar H2/H3 hiyerarşisi, listeler ve soru-cevap blokları ister.

Doğru zihinsel model: **video = hammadde, blog = işlenmiş ürün.** Konu ve
kanıtlar videodan gelir; yapı, derinlik ve arama niyeti bloga özgüdür.

---

## 2. İş akışı: videodan blog yazısına (9 adım)

### Adım 1 — Sinyali topla
En çok kaydedilen/yorum alan içerikleri seç. DM'lerde ve yorumlarda tekrar eden
soruları not et — bunlar hem konu hem FAQ hammaddesi.

### Adım 2 — Arama niyetine eşle
Videonun konusunu, insanların **yazarak aradığı gerçek bir sorguya** çevir:
- Google'a konuyu yaz, otomatik tamamlamaları ve "Diğer sorular"ı (People Also
  Ask) not et.
- Search Console'da (kurulunca) benzer sorguları kontrol et.
- ChatGPT/Perplexity'ye "bu konuda insanlar ne sorar?" diye sor, listeyi eleştirel süz.

Çıktı: 1 ana sorgu + 3-6 alt soru. Ana sorgu H1/başlığı, alt sorular H2'leri belirler.

### Adım 3 — Genişlet
60 saniyelik video ~150 kelimedir; yazı hedefi 800-1500 kelime. Ekle:
bağlam (neden önemli), adımlar, örnekler, sık yapılan hatalar, sınırlamalar
("şu durumda işe yaramaz" demek güven üretir), kategoriye özel notlar
(ör. kozmetik reklam politikaları).

### Adım 4 — Yeniden yapılandır
- Tek H1 (başlık). 4-6 H2 — her biri bir alt soru, mümkünse soru formunda.
- H3'ler adımlar/alt başlıklar için. Kısa paragraflar (2-4 cümle), bol liste.
- **Cevap önce, detay sonra:** her H2'nin ilk paragrafı soruyu doğrudan
  cevaplasın. AI motorları tam bu bloğu alıntılar.

### Adım 5 — FAQ çıkar
Yorum ve DM'lerden 3-5 **gerçek** soru seç; 40-80 kelimelik net cevaplar yaz.
(Şablondaki `faq` alanı bunları otomatik FAQPage schema'sına çevirir.)

### Adım 6 — Şablona dök
Aşağıdaki §3 şablonunu doldur ve `content/posts/` altına ekle.

### Adım 7 — İç bağlantı
- `category` alanı yazıyı doğru hizmet sayfasına bağlar (otomatik "İlgili
  hizmetimiz" kartı).
- Metin içinde ilgili diğer blog yazılarına 1-2 bağlantı ver (yazı sayısı artınca).

### Adım 8 — Geri dönüştür
Yayınlanan yazıyı tekrar sosyal içeriğe böl: her H2 bir carousel/Reels konusu
olabilir. Video açıklamalarına blog linkini ekle. Döngü: video → blog → yeni
videolar → blog trafiği.

### Adım 9 — Ölç ve güncelle
Search Console'da hangi sorgularla görünüyorsun, hangilerinde 5-15. sıradasın
(bunlar güncellemeyle kazanılır)? 3-6 ayda bir içeriği tazele ve `updatedAt`
alanını doldur.

---

## 3. Standart yazı şablonu

Teknik olarak: `content/posts/geo-rehberi.ts` dosyasını kopyala, doldur,
`content/posts/index.ts`'e ekle, build + deploy. Her yazı TR + EN birlikte
yazılır (hreflang eşleri otomatik kurulur). Schema (BlogPosting + FAQPage +
BreadcrumbList), sitemap ve meta etiketler **otomatik** üretilir.

| Alan | Kural |
|---|---|
| `slug` | ASCII, tire ile, 3-7 kelime, ana anahtar kelime içersin. TR ve EN ayrı. |
| `title` (H1) | Soru ya da net fayda vaadi; ~50-65 karakter. |
| `metaTitle` | `Anahtar İfade | Soleach` biçiminde, ≤60 karakter. |
| `metaDescription` | 140-160 karakter; sorguya cevap + tıklama nedeni. |
| `excerpt` | 1-2 cümle; blog kartında görünür, yazının ledesi. |
| `intro` | 2 paragraf: (1) sorun/bağlam, (2) yazının vaadi. |
| `sections` | 4-6 H2; her H2 bir alt soru; ilk paragraf doğrudan cevap; `h3`/`ul` blokları serbest. |
| `faq` | 3-5 gerçek soru; 40-80 kelimelik cevaplar. |
| `tags` | 3-5 etiket (schema `keywords` alanına gider). |
| `category` | `ads` / `creative` / `seo-geo` — ilgili hizmet kartını belirler. |
| `publishedAt` / `updatedAt` | ISO tarih; güncellemede `updatedAt` doldur. |

### Zengin bloklar: görsel, embed, alıntı, kaynakça

Şablondaki `sections` blokları düz metinle sınırlı değil:

| Blok | Kullanım | Not |
|---|---|---|
| `img` | `{ type: "img", src: "/blog/dosya.webp", alt: "…", caption?: "…" }` | Dosyayı `public/blog/` altına koy. **`alt` zorunlu** (tip sistemi boş bırakmana izin vermez) — görseldeki bilgiyi tarif et, anahtar kelime istifleme. |
| `embed` | `{ type: "embed", provider: "youtube" \| "instagram" \| "tiktok", id: "…", title: "…" }` | Sadece ID gir: YouTube video ID'si, Instagram gönderi/reel kısa kodu (URL'deki `/p/XXX/` kısmı), TikTok sayısal video ID'si. Üçüncü taraf script yok, salt iframe; CSP izinleri açık. `title` erişilebilirlik için zorunlu. |
| `quote` | `{ type: "quote", text: "…", cite?: "Kurum, 2026", citeUrl?: "https://…" }` | Araştırmadan bulgu alıntılamak için. |
| Satır içi link | Her `p`, `ul`, `quote`, `caption`, `intro` ve FAQ cevabında `[görünen metin](https://kaynak.com)` yazabilirsin | **İstatistik/araştırma atıfları böyle yapılır** — iddianın hemen yanında. |
| `sources` | Yazı sonunda `sources: [{ label, url, publisher? }]` | "Kaynaklar" listesi olarak render edilir **ve** schema'ya `citation` olarak eklenir (GEO sinyali). |

**Atıf kuralları:** Her sayısal iddia ya satır içi link ya da `sources` girdisiyle
desteklenmeli. Birincil kaynağa (araştırmanın kendisine) bağlan, haberleştiren
siteye değil. Erişim tarihi eski olan istatistikleri güncelle ya da çıkar.
Kaynağı olmayan rakam yazıya girmez.

**Embed notu:** Kendi videolarını gömmek yazıyı zenginleştirir ama embed metni
crawler'a içerik sağlamaz — videonun anlattığını yazıda metin olarak da anlat
(zaten §2'deki iş akışı bunu üretiyor).

### Dürüstlük kuralları (pazarlık yok)

- İstatistik yoksa istatistik yazma; "sektör ortalaması X" gibi kaynaksız
  rakam kullanma.
- Vaka çalışması, müşteri yorumu, başarı hikâyesi **uydurulmaz** — gerçek veri
  gelene kadar bu formatlara hiç girme.
- "Garanti", "kesin sonuç" dili yasak; "değişir, çünkü..." demekten korkma.
  (Bu, GEO'da da avantaj: temkinli-doğru içerik, abartılı içerikten daha
  alıntılanabilir.)
- Sağlık/etken madde iddialarında tedavi vaadi verme (kozmetik ≠ ilaç).

---

## 4. Konu havuzu: ilk 20 yazı

Hizmetler (Instagram Ads, Reels, TikTok, UGC, SEO, GEO) × alt kategoriler
(makyaj, cilt bakımı, parfüm, saç bakımı, kozmetik, ten bakımı, doğal güzellik,
vegan kozmetik, güneş bakımı) kesişiminden. ✅ = yayında.

| # | Konu | Hizmet | Kategori |
|---|---|---|---|
| 1 | ✅ GEO nedir? Güzellik markaları için yapay zekâ görünürlüğü rehberi | GEO | Genel |
| 2 | ✅ Güzellik markaları için Instagram reklamlarına başlangıç rehberi | Instagram Ads | Genel |
| 3 | Cilt bakımı markası için TikTok'ta ilk 90 gün: organik + reklam planı | TikTok | Cilt bakımı |
| 4 | Makyaj markaları için Reels senaryoları: ilk 3 saniye nasıl kurulur? | Reels | Makyaj |
| 5 | UGC nedir? Güzellik markası için UGC brief'i hazırlama rehberi (şablonlu) | UGC | Genel |
| 6 | Kozmetik e-ticaretinde Meta Piksel + Conversions API kurulumu | Instagram Ads | Kozmetik |
| 7 | Güzellik markası için SEO'ya nereden başlanır? Kategori & ürün sayfası | SEO | Genel |
| 8 | Parfüm online nasıl satılır? Koklanamayan ürünü anlatan içerik | Reels/UGC | Parfüm |
| 9 | "Vegan", "cruelty-free", "doğal" iddiaları: doğru ve yasal kullanım | SEO/İçerik | Vegan kozmetik |
| 10 | SPF ürünleri için sezonluk reklam takvimi: yıllık plan | Instagram Ads | Güneş bakımı |
| 11 | Saç bakımında önce-sonra içeriği: politikaya takılmadan nasıl yapılır? | Reels/Ads | Saç bakımı |
| 12 | Kozmetik reklamları neden reddedilir? Meta politika rehberi | Instagram Ads | Kozmetik |
| 13 | ChatGPT markanı tanıyor mu? 15 dakikalık GEO self-testi | GEO | Genel |
| 14 | Cilt bakımında bileşen (ingredient) içerikleri neden çalışır? | SEO/İçerik | Cilt bakımı |
| 15 | Mikro-influencer mı, UGC creator mı? Küçük markalar için karşılaştırma | UGC | Genel |
| 16 | Instagram bio'dan satışa: güzellik markası profil optimizasyonu | Instagram Ads | Genel |
| 17 | Makyaj tutorial içeriği SEO'su: aranan video + yazı kurgusu | SEO/Reels | Makyaj |
| 18 | Kozmetik ürün açıklaması yazma rehberi (ürün sayfası SEO + schema) | SEO | Ten bakımı/Kozmetik |
| 19 | Clean beauty iletişimi: greenwashing'e düşmeden "doğal" anlatmak | İçerik/SEO | Doğal güzellik |
| 20 | ROAS nasıl hesaplanır? Güzellik markaları için gerçekçi hedefler | Instagram Ads | Genel |

**Sıralama önerisi:** Önce 5, 12, 13 (DM'lerde en çok sorulan türden, hizmet
sayfalarını doğrudan besler), sonra kategori yazıları (3, 4, 8, 10, 11) —
bunlar alt kategori sorgularında niş görünürlük kazandırır.

**Tempo:** Haftada 1 kaliteli yazı, ayda 4. 20 konu ≈ 5 aylık takvim. Nicelik
değil süreklilik önemli; 3 ayda 12 iyi yazı, 1 haftada 12 vasat yazıdan iyidir.
