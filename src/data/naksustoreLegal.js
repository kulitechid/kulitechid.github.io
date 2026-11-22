export const NAKSUSTORE_META = {
  appName: "Naksustore",
  shortName: "Naksustore",
  navTitle: "NAKSUSTORE • LEGAL",
  packageName: "id.uniplayclient.fathulyusri77",
  developer: "KuliTech (UniPlay)",
  publisher: "KuliTech",
  effectiveDate: "22 November 2026",
  lastUpdated: "22 November 2026",
  version: "1.0",
  compliance:
    "Sesuai Kebijakan Data Pengguna Google Play (Data Safety & Account Deletion) serta peraturan perlindungan data pribadi yang berlaku di Indonesia.",
  category: "Top-Up Game, Voucher Digital & PPOB",
  jurisdiction: "Republik Indonesia",
  emails: ["kulitech.id@gmail.com"],
  whatsapp: "+62 831-2945-6119",
  address: "Kotaraja, Lombok Timur, Nusa Tenggara Barat",
  website: "https://naksustore.com/",
  privacyPolicyUrl: "/naksustore/privacy-policy",
};

export const NAKSUSTORE_PRIVACY_POLICY_DATA = {
  id: "privacy-policy",
  badge: "PRIVACY POLICY • NAKSUSTORE",
  title: "Kebijakan Privasi Aplikasi Android Naksustore",
  subtitle:
    "Dokumen resmi transparansi pengelolaan data pengguna untuk Aplikasi Android Naksustore (id.uniplayclient.fathulyusri77) dan layanan terkait pada naksustore.com.",
  intro: [
    [
      "Kebijakan Privasi ini menjelaskan bagaimana ",
      { bold: "Naksustore" },
      " (\"kami\") mengakses, mengumpulkan, menggunakan, menyimpan, membagikan, dan menghapus informasi pribadi pengguna (\"Anda\") saat menggunakan aplikasi Android ",
      { bold: "Naksustore" },
      " (",
      { code: "id.uniplayclient.fathulyusri77" },
      ") yang tersedia di Google Play Store serta layanan terkait pada situs ",
      {
        link: {
          label: "https://naksustore.com/",
          href: "https://naksustore.com/",
        },
      },
      ".",
    ],
    [
      "Dokumen ini disusun untuk memenuhi standar transparansi data pengguna pada ",
      {
        link: {
          label: "Kebijakan Data Pengguna Google Play",
          href: "https://support.google.com/googleplay/android-developer/answer/10144311?hl=en",
        },
      },
      " dan peraturan perlindungan data pribadi yang berlaku di Indonesia. Dengan mengunduh atau menggunakan aplikasi ini, Anda menyetujui praktik pengelolaan data yang dijelaskan di bawah ini.",
    ],
  ],
  sections: [
    {
      id: "ruang-lingkup-layanan",
      number: "1",
      title: "Ruang Lingkup Layanan",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Aplikasi Android Naksustore menyediakan layanan transaksi produk digital dan fitur pendukung yang meliputi:",
          ],
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              content: [
                { bold: "Top-Up Game:" },
                " Pembelian item atau mata uang dalam game (seperti ",
                { italic: "Mobile Legends: Bang Bang" },
                ", ",
                { italic: "Free Fire" },
                ", ",
                { italic: "Roblox" },
                ", ",
                { italic: "Call of Duty Mobile" },
                ", dan judul game lainnya).",
              ],
            },
            {
              content: [
                { bold: "Voucher Digital:" },
                " Pembelian kode voucher dan ",
                { italic: "gift card" },
                " (seperti ",
                { italic: "Steam Wallet" },
                ", ",
                { italic: "Voucher Google Play" },
                ", ",
                { italic: "Garena Shell" },
                ", dan lainnya).",
              ],
            },
            {
              content: [
                { bold: "PPOB (Payment Point Online Bank):" },
                " Pengisian saldo ",
                { italic: "e-wallet" },
                " (DANA, GoPay, OVO), Token PLN, serta pulsa/paket data operator seluler (Tri, XL, dan lainnya).",
              ],
            },
            {
              content: [
                { bold: "Fitur Pendukung:" },
                " Cek Region akun game, Cek Transaksi, serta Kalkulator Game (",
                { italic: "Winrate" },
                ", ",
                { italic: "Magic Wheel" },
                ", ",
                { italic: "Zodiac Skins" },
                ").",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "data-yang-dikumpulkan",
      number: "2",
      title: "Data yang Dikumpulkan dan Dibagikan (Data Safety Google Play)",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Kami hanya mengumpulkan dan memproses data yang diperlukan untuk menjalankan fungsi utama aplikasi, memproses pembayaran, menjaga keamanan sistem, serta mencegah penipuan. Kami ",
            { bold: "tidak menjual" },
            " data pribadi maupun data sensitif pengguna kepada pihak ketiga mana pun.",
          ],
        },
        {
          type: "table",
          ariaLabel: "Tabel Data yang Dikumpulkan dan Dibagikan Naksustore",
          caption:
            "Rincian kategori data, sifat pengumpulan, tujuan penggunaan, dan pembagian ke pihak ketiga sesuai formulir Data Safety Google Play.",
          minWidthClass: "min-w-[760px]",
          headers: [
            "Kategori Data (Google Play)",
            "Jenis Data Spesifik",
            "Sifat Pengumpulan",
            "Tujuan Penggunaan",
            "Dibagikan ke Pihak Ketiga?",
          ],
          rows: [
            [
              ["Informasi Pribadi"],
              [
                "Nomor WhatsApp / nomor telepon, serta alamat email atau nama/username apabila dikumpulkan melalui fitur akun",
              ],
              ["Wajib untuk transaksi & kontak"],
              [
                "Mengirimkan status pesanan, bukti transaksi, dan layanan pelanggan",
              ],
              [
                "Ya (hanya seperlunya ke mitra pembayaran/notifikasi)",
              ],
            ],
            [
              ["Info Keuangan"],
              [
                "Riwayat pembelian, nominal transaksi, metode pembayaran yang dipilih (Virtual Account BCA, BRI, Mandiri, BNI, Permata, Sinarmas, Danamon; QRIS; Indomaret/Alfamart)",
              ],
              ["Wajib untuk checkout"],
              [
                "Memproses dan memverifikasi pembayaran melalui gerbang pembayaran (",
                { italic: "payment gateway" },
                ")",
              ],
              [
                "Ya (ke bank, penyedia QRIS, gerai ritel, dan ",
                { italic: "payment gateway" },
                ")",
              ],
            ],
            [
              ["ID Game & Produk Digital"],
              [
                "User ID, Zone ID / Server ID game, nomor HP tujuan PPOB, nomor meter / ID pelanggan PLN",
              ],
              ["Wajib untuk pengiriman produk"],
              [
                "Memproses pengisian top-up, voucher, atau tagihan PPOB ke akun tujuan",
              ],
              ["Ya (ke mitra penyedia/aggregator produk digital)"],
            ],
            [
              ["Info & Performa Aplikasi"],
              [
                "Log ",
                { italic: "crash" },
                ", data diagnostik teknis, waktu respons aplikasi",
              ],
              ["Otomatis (SDK/Sistem)"],
              ["Memantau stabilitas aplikasi dan memperbaiki bug"],
              [
                "Hanya apabila layanan pelaporan crash pihak ketiga (seperti Firebase Crashlytics) aktif digunakan",
              ],
            ],
            [
              ["ID Perangkat atau ID Lainnya"],
              [
                "Pengenal aplikasi yang dapat direset seperti ",
                { italic: "App Set ID" },
                " atau token notifikasi (",
                { italic: "FCM Token" },
                ")",
              ],
              ["Otomatis (jika digunakan)"],
              [
                "Analitik internal, pencegahan penipuan (",
                { italic: "anti-fraud" },
                "), dan pengiriman notifikasi status transaksi",
              ],
              [
                "Hanya apabila menggunakan layanan push notification pihak ketiga",
              ],
            ],
          ],
        },
        {
          type: "callout",
          title: "Kepatuhan Pengenal Perangkat Google Play",
          paragraphs: [
            [
              "Aplikasi Naksustore ",
              { bold: "tidak" },
              " mengakses, mengumpulkan, atau menautkan pengenal perangkat permanen (",
              { italic: "persistent device identifiers" },
              " seperti IMEI, IMSI, nomor seri SIM, atau alamat MAC) dengan data pribadi pengguna maupun pengenal yang dapat direset. Jika aplikasi menggunakan ",
              { italic: "App Set ID" },
              ", penggunaannya dibatasi hanya untuk analitik esensial dan pencegahan penipuan, bukan untuk iklan yang dipersonalisasi.",
            ],
          ],
        },
      ],
    },
    {
      id: "izin-perangkat-android",
      number: "3",
      title: "Izin Perangkat Android (App Permissions)",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Aplikasi hanya meminta izin sistem Android yang relevan dengan fitur yang Anda gunakan:",
          ],
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              content: [
                { code: "INTERNET" },
                " & ",
                { code: "ACCESS_NETWORK_STATE" },
                ": Izin dasar untuk memuat katalog produk, memproses transaksi, dan memeriksa status pesanan secara ",
                { italic: "real-time" },
                ".",
              ],
            },
            {
              content: [
                { code: "POST_NOTIFICATIONS" },
                " (Android 13+): Digunakan untuk mengirimkan notifikasi status pembayaran dan pengiriman produk apabila diaktifkan. Anda dapat menonaktifkannya kapan saja di pengaturan perangkat.",
              ],
            },
            {
              content: [
                { code: "CAMERA" },
                " / ",
                { code: "READ_MEDIA_IMAGES" },
                ": Hanya diminta apabila aplikasi menyediakan fitur pemindaian kode QR atau penyimpanan/pengunggahan bukti pembayaran. Jika fitur ini memerlukan izin sensitif di luar ekspektasi langsung pengguna, aplikasi akan menampilkan pemberitahuan di dalam aplikasi (",
                { italic: "in-app disclosure" },
                ") sebelum meminta izin.",
              ],
            },
          ],
        },
        {
          type: "paragraph",
          content: [
            "Anda dapat mencabut izin aplikasi kapan saja melalui ",
            { bold: "Pengaturan (Settings) > Aplikasi > Naksustore > Izin (Permissions)" },
            " di perangkat Android Anda.",
          ],
        },
      ],
    },
    {
      id: "cara-penggunaan-informasi",
      number: "4",
      title: "Cara Kami Menggunakan Informasi",
      blocks: [
        {
          type: "paragraph",
          content: ["Data yang dikumpulkan digunakan secara terbatas untuk:"],
        },
        {
          type: "list",
          ordered: true,
          items: [
            {
              content: [
                { bold: "Pemrosesan Transaksi:" },
                " Mengirimkan produk top-up game, kode voucher, atau saldo PPOB secara otomatis ke ID tujuan.",
              ],
            },
            {
              content: [
                { bold: "Verifikasi & Layanan Pelanggan:" },
                " Memvalidasi pembayaran dan menindaklanjuti kendala pesanan melalui fitur ",
                { italic: "Cek Transaksi" },
                " maupun layanan pelanggan WhatsApp resmi.",
              ],
            },
            {
              content: [
                { bold: "Keamanan & Pencegahan Penipuan:" },
                " Mendeteksi aktivitas mencurigakan, transaksi ilegal, atau penyalahgunaan aplikasi.",
              ],
            },
            {
              content: [
                { bold: "Pemeliharaan Teknis:" },
                " Menganalisis laporan ",
                { italic: "crash" },
                " untuk meningkatkan performa aplikasi Android.",
              ],
            },
            {
              content: [
                { bold: "Tampilan Aktivitas Terkini:" },
                " Platform dapat menampilkan ringkasan transaksi terbaru secara anonim/tersamarkan (contoh: ",
                { code: "62*******0704" },
                ") tanpa mengungkap data pribadi atau informasi keuangan sensitif pengguna.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "pihak-ketiga-sdk",
      number: "5",
      title: "Pihak Ketiga & SDK yang Terintegrasi",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Untuk menjalankan layanan, aplikasi dapat berinteraksi dengan pihak ketiga berikut:",
          ],
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              content: [
                { bold: "Mitra Pembayaran:" },
                " Bank penyedia Virtual Account, penyelenggara QRIS, gerai ritel (Indomaret/Alfamart), serta penyedia ",
                { italic: "payment gateway" },
                " untuk memproses pembayaran secara aman.",
              ],
            },
            {
              content: [
                { bold: "Mitra Penyedia Produk Digital:" },
                " Aggregator dan penerbit voucher/top-up untuk mengeksekusi pengisian produk sesuai ID tujuan.",
              ],
            },
            {
              content: [
                { bold: "Penegakan Hukum:" },
                " Kami dapat mengungkapkan data apabila diwajibkan secara sah oleh hukum atau perintah otoritas berwenang di Indonesia.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "keamanan-enkripsi-data",
      number: "6",
      title: "Keamanan & Enkripsi Data",
      blocks: [
        {
          type: "list",
          ordered: false,
          items: [
            {
              content: [
                { bold: "Enkripsi dalam Transmisi:" },
                " Seluruh komunikasi data antara aplikasi Android Naksustore dan server kami maupun mitra pembayaran dilindungi menggunakan protokol enkripsi modern (",
                { bold: "HTTPS / TLS" },
                ").",
              ],
            },
            {
              content: [
                { bold: "Pembatasan Akses:" },
                " Data transaksi dan kontak pelanggan disimpan pada infrastruktur dengan kontrol akses terbatas untuk mencegah akses tidak sah, pengubahan, atau kebocoran data.",
              ],
            },
            {
              content: [
                { bold: "Kerahasiaan Pembayaran:" },
                " Kami tidak menyimpan kredensial perbankan sensitif (seperti PIN ATM, kata sandi ",
                { italic: "mobile banking" },
                ", atau CVV kartu) di dalam perangkat maupun server aplikasi.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "retensi-penghapusan-data",
      number: "7",
      title: "Retensi Data & Penghapusan Akun/Data (Account & Data Deletion)",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Sesuai dengan ",
            {
              link: {
                label: "Persyaratan Penghapusan Akun Google Play",
                href: "https://support.google.com/googleplay/android-developer/answer/13327111?hl=en",
              },
            },
            ":",
          ],
        },
        {
          type: "list",
          ordered: false,
          items: [
            {
              content: [
                { bold: "Masa Penyimpanan (Retensi):" },
                " Kami menyimpan data transaksi selama diperlukan untuk menyelesaikan pesanan, menangani komplain/sengketa, mencegah penipuan, serta memenuhi kewajiban pencatatan akuntansi dan hukum yang berlaku (hingga 5 tahun untuk catatan transaksi keuangan). Data diagnostik teknis disimpan sementara hingga 90 hari.",
              ],
            },
            {
              content: [
                { bold: "Penghapusan Akun/Data:" },
                " Anda dapat mengajukan permintaan penghapusan akun dan data pribadi tanpa harus menginstal ulang aplikasi melalui email ",
                { mailto: "kulitech.id@gmail.com" },
                ".",
              ],
            },
            {
              content: [
                { bold: "Cakupan Penghapusan:" },
                " Setelah permintaan diverifikasi, kami akan menghapus data profil akun dan data pribadi yang tidak lagi diperlukan secara permanen (bukan sekadar membekukan akun). Data catatan transaksi tertentu mungkin tetap disimpan secara terbatas apabila diwajibkan oleh hukum, kepatuhan pajak, atau pencegahan penipuan.",
              ],
            },
          ],
        },
      ],
    },
    {
      id: "privasi-anak",
      number: "8",
      title: "Privasi Anak (Google Play Families Policy)",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Aplikasi Naksustore tidak ditujukan bagi anak-anak di bawah usia 13 tahun (atau batas usia minimum yang berlaku menurut hukum setempat) dan tidak termasuk dalam program ",
            { italic: "Google Play Families" },
            ". Kami tidak secara sengaja mengumpulkan data pribadi dari anak-anak dan tidak menggunakan SDK yang tidak disetujui untuk layanan anak. Jika Anda adalah orang tua/wali dan mengetahui anak Anda memberikan data pribadi kepada kami, silakan hubungi kami untuk segera menghapus data tersebut.",
          ],
        },
      ],
    },
    {
      id: "perubahan-kebijakan-privasi",
      number: "9",
      title: "Perubahan Kebijakan Privasi",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Kami dapat memperbarui Kebijakan Privasi ini sewaktu-waktu seiring perubahan fitur aplikasi, pembaruan SDK, atau kebijakan Google Play Store. Perubahan akan dipublikasikan melalui halaman ini dengan memperbarui tanggal ",
            { bold: "Pembaruan Terakhir" },
            " dan dapat disertai pemberitahuan di dalam aplikasi.",
          ],
        },
      ],
    },
    {
      id: "kontak-pengembang",
      number: "10",
      title: "Informasi Kontak Pengembang",
      blocks: [
        {
          type: "paragraph",
          content: [
            "Untuk pertanyaan terkait Kebijakan Privasi, hak akses data, atau permintaan penghapusan akun/data, silakan hubungi kami melalui kontak resmi yang juga tercantum di halaman listing Google Play Store:",
          ],
        },
        {
          type: "contactCard",
        },
      ],
    },
  ],
  closing:
    "Dokumen Kebijakan Privasi Naksustore ini berlaku efektif sejak 22 November 2026 (Pembaruan Terakhir: 22 November 2026) dan menjadi rujukan resmi pada Google Play Store serta situs kulitech.my.id.",
};
