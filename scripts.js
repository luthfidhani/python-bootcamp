const faqData = [
  {
    question: "Kalo udah daftar, kapan bisa mulai belajar?",
    answer: "Begitu daftar, lo langsung dapet akses ke grup dan bisa mulai nyiapin diri. Mulai belajar bareng Gue di tanggal yang udah ditentukan! 📅",
  },
  {
    question: "Butuh skill coding apa sebelum ikut bootcamp?",
    answer: "Gak perlu skill coding khusus. Bootcamp ini buat semua level, dari pemula sampai yang udah ada basic! 🚀",
  },
  {
    question: "Ada batasan umur atau latar belakang pendidikan?",
    answer: "Gak ada batasan umur atau latar belakang pendidikan. Yang penting, semangat belajar dan niat buat jadi jagoan! 💥",
  },
  {
    question: "Gimana kalau gue gak punya laptop yang canggih?",
    answer: "Laptop standar juga bisa! Selama lo punya koneksi internet yang oke, lo siap buat belajar. 💻",
  },
  {
    question: "Apakah ada tugas atau proyek selama bootcamp?",
    answer: "Pastinya ada! Ada tugas dan proyek yang bakal bikin lo lebih paham dan siap praktek langsung. 💡",
  },
  {
    question: "Bisa pilih topik yang mau dipelajari di bootcamp?",
    answer: "Topik utama udah ditentukan, tapi Gue selalu terbuka untuk masukan dan saran. Ayo, share ide lo! 🗣️",
  },
  {
    question: "Selesai bootcamp, bisa akses materi lagi nggak?",
    answer: "Tenang aja, materinya pasti Gue kasih setelah tiap kelas beres! 📚",
  },
  {
    question: "Kalo ada pertanyaan, harus nanya ke siapa ya?",
    answer: "Bisa tanya-tanya di grup chat yang udah Gue siapin buat peserta. Bebas deh mau tanya apa aja! 🤔",
  },
  {
    question: "Ga nemu jawaban disini?",
    answer: "PC aja broww. <a href='https://wa.me/6285791867132' target='_blank'>Klik aja link ini</a> 🔗",
  },
];

const profiles = [
  {
    name: "Luthfi Afrizal Ardhani",
    title: "Data Engineer | Insight Timer",
    image: "https://luthfidhani.my.id/python-bootcamp/assets/images/luthfi.jpg",
    socials: {
      github: "https://github.com/luthfidhani",
      linkedin: "https://www.linkedin.com/in/luthfi-afrizal-ardhani/",
      instagram: "https://www.instagram.com/luthfidhani17/",
    },
  },
  {
    name: "Alaikal Fajri Nur Alfian",
    title: "Admin Trainer | Refactory",
    image: "https://luthfidhani.my.id/python-bootcamp/assets/images/alex.png",
    socials: {
      github: "https://github.com/alaikal02/",
      linkedin: "https://www.linkedin.com/in/alaikal-fajri-96ba2022a/",
      instagram: "https://www.instagram.com/seribucahaya_diatasfajar/",
    },
  },
];

topicsData = [
  {
    category: "Pengantar dan Dasar-Dasar Python",
    items: [
      { name: "Kenalan Sama Python", description: "Yuk, mulai kenalan sama Python, bahasa pemrograman yang keren abis. Siap-siap deh jatuh cinta!" },
      { name: "Setup Python", description: "Gimana caranya setup Python di komputer lo, biar siap langsung coding tanpa ribet." },
      { name: "Syntaks Python", description: "Pelajari syntaks dasar Python yang bikin kode lo gampang dibaca dan dimengerti." },
      { name: "Komentar di Kode", description: "Cara nulis komentar biar kode lo jelas, gak bikin bingung yang baca." },
      { name: "Variabel Python", description: "Belajar cara nyimpen data dengan variabel, biar lo bisa main-main dengan data dengan bebas." },
      { name: "Tipe Data Python", description: "Kenalan sama tipe data Python, dari angka, string, sampai Boolean. Biar lo ngerti cara kerjanya." },
      { name: "Mainin Angka", description: "Ngulik cara mainin angka dengan Python, dari operasi dasar sampai yang lebih ngebut." },
      { name: "Casting Data", description: "Konversi tipe data biar lo bisa nyesuain data sesuai dengan kebutuhan lo." },
      { name: "String Manipulation", description: "Bermain dengan string, dari nulis sampai manipulasi teks biar lebih fleksibel." },
      { name: "Pahami Boolean", description: "Paham tentang nilai Boolean yang bikin logika program lo jalan dengan baik." }
    ]
  },
  {
    category: "Struktur Data dan Kontrol Alur",
    items: [
      { name: "Operator-Operator Keren", description: "Operator yang bikin operasi matematika dan logika lo jadi lebih mudah dan cepat." },
      { name: "Daftar Data dengan List", description: "Bikin daftar data dengan list, dan belajar cara ngelola data di dalamnya dengan efisien." },
      { name: "Kenalan dengan Tuple", description: "Tuple, data yang gak bisa diubah tapi tetap bisa diakses dengan gampang. Coba deh!" },
      { name: "Manajemen Data dengan Set", description: "Gunain set buat nyimpan data unik dan operasi set yang bikin data lo lebih bersih." },
      { name: "Kamus Python", description: "Tempat nyimpen data dengan key-value pairs. Cocok banget buat aplikasi yang dinamis." },
      { name: "Array di Python", description: "Opsional, tapi array bisa bikin lo nyimpen data secara terstruktur dengan lebih rapi." },
      { name: "Kontrol Alur dengan If...Else", description: "Struktur kontrol yang bikin lo bisa ngatur alur eksekusi program sesuai kondisi yang ada." },
      { name: "Looping dengan While", description: "Pengulangan dengan kondisi, bisa iterasi data sampai kondisi yang diinginkan terpenuhi." },
      { name: "Looping dengan For", description: "Iterasi yang lebih terstruktur, cocok buat ngelola data dalam list atau struktur lain yang lebih kompleks." }
    ]
  },
  {
    category: "Fungsi dan Penanganan Kesalahan",
    items: [
      { name: "Bikin Fungsi Sendiri", description: "Bikin fungsi sendiri biar kode lo lebih terstruktur dan bisa dipake ulang kapan aja." },
      { name: "Lambda: Fungsi Instan", description: "Fungsi anonymous yang praktis buat situasi yang butuh fungsi cepat dan sementara." },
      { name: "Handle Error dengan Try...Except", description: "Cara handle error dengan try-except, biar program lo gak crash mendadak." },
      { name: "Input dari User", description: "Nanya input dari user, biar aplikasi lo lebih interaktif dan responsif terhadap kebutuhan pengguna." },
      { name: "Fungsi Matematika Python", description: "Fungsi matematika dari dasar sampai yang lebih advanced untuk semua keperluan kalkulasi lo." },
      { name: "Format String Kekinian", description: "Format string biar tampilan output lo lebih kece dan sesuai dengan yang lo mau." }
    ]
  },
  {
    category: "Modul, Pustaka, dan Data",
    items: [
      { name: "Modul-modul Python", description: "Modul-modul Python yang bikin coding lo lebih efisien dengan tambahan fitur keren." },
      { name: "Install Pustaka dengan PIP", description: "Manajemen paket dengan PIP, biar lo bisa install berbagai pustaka tambahan dengan gampang." },
      { name: "Mainkan Data JSON", description: "Kerja dengan data JSON, format yang sering dipake di web dan API untuk pertukaran data." },
      { name: "Pakai RegEx", description: "Regular expressions buat pencocokan pola dalam string, biar pencarian lebih tepat." },
      { name: "Tanggal dan Waktu", description: "Manajemen tanggal dan waktu dengan Python, biar aplikasi lo bisa ngatur waktu dengan ciamik." }
    ]
  },
  {
    category: "Pemrograman Berorientasi Objek (OOP)",
    items: [
      { name: "Kelas dan Objek", description: "Pahami konsep kelas dan objek dalam OOP, cara bikin struktur program yang modular dan rapi." },
      { name: "Scope Variabel", description: "Pengelolaan variabel dan ruang lingkupnya, biar kode lo lebih teratur dan mudah dipahami." },
      { name: "Pewarisan Kelas", description: "Pewarisan kelas, bikin hierarki kelas yang lebih kompleks dan bisa dipake ulang." },
      { name: "Polimorfisme", description: "Polimorfisme dalam OOP, bikin kelas lo lebih fleksibel dan mudah dikembangkan." },
      { name: "Bikin Iterator", description: "Bikin dan gunain iterator buat ngelola koleksi data secara efisien dan terstruktur." }
    ]
  },
  {
    category: "Proyek Praktis",
    items: [
      { name: "Praktek dengan Proyek Nyata", description: "Terapkan semua ilmu yang udah lo pelajari dalam proyek nyata. Saatnya praktek dan bikin sesuatu yang berguna!" },
      { name: "Review & Tanya Jawab", description: "Sesi tanya jawab buat nge-review materi dan jawab pertanyaan-pertanyaan lo selama bootcamp." },
      { name: "Penutup & Evaluasi", description: "Evaluasi akhir dan diskusi tentang langkah selanjutnya biar lo bisa terus belajar dan berkembang." }
    ]
  }
];

