[
  {
    "id": 1,
    "type": "multi-step-activity-selection",
    "alias": "aktivitas_awal",
    "question": "Dari daftar berikut, pilih semua aktivitas yang kamu suka, inginkan, butuhkan, atau sering lakukan secara alami (boleh lebih dari 3):",
    "options": [
      "Menulis (artikel, cerita, puisi)",
      "Mengajar atau berbagi pengetahuan",
      "Membantu orang lain menyelesaikan masalah",
      "Mendesain atau membuat karya visual",
      "Meneliti dan menganalisis informasi",
      "Bermusik (menyanyi, memainkan alat musik)",
      "Memasak atau bereksperimen dengan makanan",
      "Berolahraga atau aktivitas fisik",
      "Berkebun atau merawat tanaman",
      "Membangun atau memperbaiki sesuatu",
      "Mengorganisir atau mengelola orang/acara",
      "Berdiskusi tentang ide-ide atau konsep",
      "Berakting atau tampil di depan umum",
      "Mengembangkan teknologi atau aplikasi",
      "Merawat atau mengasuh makhluk hidup"
    ],
    "minSelect": 3
  },
  {
    "id": 2,
    "type": "sub-selection",
    "alias": "aktivitas_top3",
    "question": "Dari aktivitas yang kamu pilih, sekarang pilih 3 aktivitas teratas yang paling kamu cintai atau prioritaskan.",
    "maxSelect": 3,
    "source": "step_1_selected"
  },
  {
    "id": 3,
    "type": "forced-choice",
    "alias": "aktivitas_utama",
    "question": "Sekarang, bayangkan kamu hanya bisa memilih satu aktivitas untuk kamu jalani dan perjuangkan. Pilih aktivitas yang paling kamu pilih sebagai fokusmu:",
    "maxSelect": 1,
    "source": "step_2_selected"
  },
  {
    "id": 4,
    "type": "radio",
    "alias": "alasan_pilihan",
    "question": "Apa alasan terkuat kamu memilih aktivitas ini sebagai yang paling utama?",
    "options": [
      "Aku merasa ini paling sesuai dengan jiwaku",
      "Aku ingin memberi dampak lewat aktivitas ini",
      "Ini membuatku merasa hidup dan penuh makna",
      "Aku merasa Tuhan membekaliku untuk ini",
      "Aku ingin menjadi ahli dan terus tumbuh di sini"
    ]
  },
  {
    "id": 5,
    "type": "info",
    "alias": "intro_refleksi",
    "content": "Oke, sekarang bayangkan dan ingat terus aktivitas yang kamu pilih ini, ya! Karena ini akan menjadi acuan dalam menjawab soal-soal berikutnya."
  },
  {
    "id": 6,
    "type": "likert",
    "question": "Ketika aku mengerjakan aktivitas ini, aku merasa hidupku berarti.",
    "scale": ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"],
    "score": [1, 2, 3, 4, 5],
    "theme": ["meaning"]
  },
  {
    "id": 7,
    "type": "likert",
    "question": "Aku rela mengorbankan waktu dan energi untuk aktivitas ini.",
    "scale": ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"],
    "score": [1, 2, 3, 4, 5],
    "theme": ["commitment"]
  },
  {
    "id": 8,
    "type": "likert",
    "question": "Aku rela begadang atau lupa waktu ketika mengerjakan aktivitas ini.",
    "scale": ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"],
    "score": [1, 2, 3, 4, 5],
    "theme": ["flow"]
  },
  {
    "id": 9,
    "type": "likert",
    "question": "Aku sering memikirkan atau merencanakan aktivitas ini bahkan ketika sedang melakukan hal lain.",
    "scale": ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"],
    "score": [1, 2, 3, 4, 5],
    "theme": ["engagement"]
  },
  {
    "id": 10,
    "type": "likert",
    "question": "Aku merasa energik dan bersemangat ketika melakukan aktivitas ini.",
    "scale": ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"],
    "score": [1, 2, 3, 4, 5],
    "theme": ["energy"]
  },
  {
    "id": 11,
    "type": "likert",
    "question": "Aku merasa bahwa aktivitas ini adalah bagian dari identitas dan jati diriku.",
    "scale": ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"],
    "score": [1, 2, 3, 4, 5],
    "theme": ["identity"]
  },
  {
    "id": 12,
    "type": "likert",
    "question": "Aku ingin terus mengembangkan keterampilan dalam aktivitas ini.",
    "scale": ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"],
    "score": [1, 2, 3, 4, 5],
    "theme": ["growth"]
  },
  {
    "id": 13,
    "type": "likert",
    "question": "Aku merasa terhubung dengan orang lain melalui aktivitas ini.",
    "scale": ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"],
    "score": [1, 2, 3, 4, 5],
    "theme": ["connection"]
  },
  {
    "id": 14,
    "type": "likert",
    "question": "Aku merasa bahwa aktivitas ini memiliki dampak positif bagi orang lain.",
    "scale": ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"],
    "score": [1, 2, 3, 4, 5],
    "theme": ["impact"]
  },
  {
    "id": 15,
    "type": "likert",
    "question": "Aku tetap menikmati aktivitas ini meskipun menghadapi tantangan atau kesulitan.",
    "scale": ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"],
    "score": [1, 2, 3, 4, 5],
    "theme": ["resilience"]
  },
  {
    "id": 16,
    "type": "checkbox",
    "question": "Pilih 5 aktivitas yang paling kamu sukai atau sering kamu pikirkan tanpa disuruh:",
    "options": [
      "Menulis (artikel, cerita, puisi)",
      "Mengajar atau berbagi pengetahuan",
      "Membantu orang lain menyelesaikan masalah",
      "Mendesain atau membuat karya visual",
      "Meneliti dan menganalisis informasi",
      "Bermusik (menyanyi, memainkan alat musik)",
      "Memasak atau bereksperimen dengan makanan",
      "Berolahraga atau aktivitas fisik",
      "Berkebun atau merawat tanaman",
      "Membangun atau memperbaiki sesuatu",
      "Mengorganisir atau mengelola orang/acara",
      "Berdiskusi tentang ide-ide atau konsep",
      "Berakting atau tampil di depan umum",
      "Mengembangkan teknologi atau aplikasi",
      "Merawat atau mengasuh makhluk hidup"
    ],
    "maxSelect": 5,
    "theme": ["activities"]
  },
  {
    "id": 17,
    "type": "checkbox",
    "question": "Pilih 5 tema yang paling menarik minatmu:",
    "options": [
      "Seni dan kreativitas",
      "Pendidikan dan pembelajaran",
      "Kesehatan dan kesejahteraan",
      "Teknologi dan inovasi",
      "Lingkungan dan keberlanjutan",
      "Keadilan sosial dan kemanusiaan",
      "Bisnis dan kewirausahaan",
      "Spiritualitas dan pengembangan diri",
      "Sains dan penemuan",
      "Budaya dan sejarah",
      "Komunikasi dan media",
      "Olahraga dan petualangan",
      "Politik dan kebijakan publik",
      "Kuliner dan gastronomi",
      "Arsitektur dan desain ruang"
    ],
    "maxSelect": 5,
    "theme": ["interests"]
  },
  {
    "id": 18,
    "type": "ranking",
    "question": "Urutkan 5 hal berikut berdasarkan apa yang paling bermakna bagimu saat ini (1 = paling bermakna):",
    "options": [
      "Membantu orang lain",
      "Berkarya dan mencipta",
      "Mempelajari ilmu baru",
      "Menyampaikan ide",
      "Mendekat pada Tuhan"
    ],
    "theme": ["values"]
  },
  {
    "id": 19,
    "type": "likert",
    "question": "Aku merasa bahwa aktivitas ini selaras dengan nilai-nilai dan prinsip hidupku.",
    "scale": ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"],
    "score": [1, 2, 3, 4, 5],
    "theme": ["alignment"]
  },
  {
    "id": 20,
    "type": "likert",
    "question": "Aku merasa bahwa aktivitas ini memungkinkan aku untuk mengekspresikan diri dengan autentik.",
    "scale": ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"],
    "score": [1, 2, 3, 4, 5],
    "theme": ["authenticity"]
  },
  {
    "id": 21,
    "type": "likert",
    "question": "Aku merasa bahwa aktivitas ini memberikan kontribusi positif pada dunia.",
    "scale": ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"],
    "score": [1, 2, 3, 4, 5],
    "theme": ["contribution"]
  },
  {
    "id": 22,
    "type": "likert",
    "question": "Aku merasa bahwa aktivitas ini membuatku tumbuh sebagai pribadi.",
    "scale": ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"],
    "score": [1, 2, 3, 4, 5],
    "theme": ["growth"]
  },
  {
    "id": 23,
    "type": "checkbox",
    "question": "Pilih 5 kata sifat yang paling menggambarkan dirimu saat melakukan aktivitas yang kamu sukai:",
    "options": [
      "Kreatif",
      "Analitis",
      "Peduli",
      "Tekun",
      "Berani",
      "Komunikatif",
      "Terorganisir",
      "Reflektif",
      "Inovatif",
      "Kolaboratif",
      "Teliti",
      "Adaptif",
      "Visioner",
      "Praktis",
      "Inspiratif"
    ],
    "maxSelect": 5,
    "theme": ["traits"]
  },
  {
    "id": 24,
    "type": "likert",
    "question": "Aku merasa bahwa aktivitas ini adalah sesuatu yang akan terus aku lakukan dalam jangka panjang.",
    "scale": ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"],
    "score": [1, 2, 3, 4, 5],
    "theme": ["longevity"]
  },
  {
    "id": 25,
    "type": "likert",
    "question": "Aku merasa bahwa aktivitas ini membuatku merasa hidup dan bersemangat.",
    "scale": ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"],
    "score": [1, 2, 3, 4, 5],
    "theme": ["vitality"]
  },
  {
    "id": 26,
    "type": "checkbox",
    "question": "Pilih 5 situasi di mana kamu merasa paling bahagia dan terpenuhi:",
    "options": [
      "Ketika membantu orang lain berkembang",
      "Ketika menciptakan sesuatu dari awal",
      "Ketika memecahkan masalah kompleks",
      "Ketika berbagi pengetahuan dengan orang lain",
      "Ketika bekerja dengan tangan (membuat/memperbaiki)",
      "Ketika mengekspresikan diri melalui seni",
      "Ketika berada di alam terbuka",
      "Ketika berinteraksi dengan banyak orang",
      "Ketika bekerja sendiri dengan fokus",
      "Ketika mengorganisir dan mengelola",
      "Ketika berpetualang dan mencoba hal baru",
      "Ketika mempelajari topik mendalam",
      "Ketika memimpin tim atau kelompok",
      "Ketika merawat orang atau makhluk hidup",
      "Ketika menganalisis data dan informasi"
    ],
    "maxSelect": 5,
    "theme": ["contexts"]
  },
  {
    "id": 27,
    "type": "likert",
    "question": "Aku merasa bahwa aktivitas ini membuatku kehilangan track waktu (flow state).",
    "scale": ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"],
    "score": [1, 2, 3, 4, 5],
    "theme": ["flow"]
  },
  {
    "id": 28,
    "type": "likert",
    "question": "Aku merasa bahwa aktivitas ini adalah sesuatu yang aku lakukan karena keinginan sendiri, bukan karena tekanan eksternal.",
    "scale": ["Sangat Tidak Setuju", "Tidak Setuju", "Netral", "Setuju", "Sangat Setuju"],
    "score": [1, 2, 3, 4, 5],
    "theme": ["autonomy"]
  },
  {
    "id": 29,
    "type": "open",
    "question": "Apa satu hal yang jika kamu lakukan setiap hari, kamu merasa hidupmu berharga?",
    "theme": ["core"]
  },
  {
    "id": 30,
    "type": "open",
    "question": "Jika kamu memiliki waktu dan sumber daya tak terbatas, apa yang akan kamu lakukan dengan hidupmu?",
    "theme": ["vision"]
  }
]
