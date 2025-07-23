# Trae Test App

React Next.js uygulaması - Figma tasarımından geliştirilen modern UI bileşenleri

## Özellikler

- 🎨 Figma tasarımından pixel-perfect UI bileşenleri
- ⚡ Next.js 15 ile modern React geliştirme
- 🎯 TypeScript desteği
- 📱 Responsive tasarım
- 🎭 Modern CSS stilleri
- 🔧 ESLint ve Tailwind CSS entegrasyonu

## Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/CihanErden96/trae-test-app.git
cd trae-test-app
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Kullanılan Teknolojiler

- **Next.js 15** - React framework
- **React 19** - UI kütüphanesi
- **TypeScript** - Tip güvenliği
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Kod kalitesi

## Proje Yapısı

```
src/
├── app/
│   ├── globals.css    # Global CSS stilleri
│   ├── layout.tsx     # Ana layout bileşeni
│   └── page.tsx       # Ana sayfa bileşeni
public/
├── images/            # Statik resimler
│   ├── departments.svg
│   ├── peoples.svg
│   ├── profile.png
│   └── questions.svg
└── ...
```

## Geliştirme

Proje Figma tasarımından hareketle geliştirilmiştir ve aşağıdaki bileşenleri içerir:

- **Header**: Ayarlar ikonu, başlık ve profil resmi
- **Card**: Denetimler kartı (progress bar, butonlar, etiketler)
- **Footer**: Navigation ikonları (offset ile yükseltilmiş)

## Lisans

MIT