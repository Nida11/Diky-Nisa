export const data = {
    bride: {
        L: {
            id: 1,
            name: 'Diky',
            child: 'Putra ke tiga',
            father: 'Riswan',
            mother: 'Alm. Sunaedah',
            image: './src/assets/images/cowo.png'
        },
        P: {
            id: 2,
            name: 'Nisa',
            child: 'Putri ke dua',
            father: 'H. Ruswin',
            mother: 'Cicih',
            image: './src/assets/images/cewe.png'
        },

        couple: './src/assets/images/couple.png'
    },


    time: {
        marriage: {
            year: '2025',
            month: 'Oktober',
            date: '22',
            day: 'Rabu',
            hours: {
                start: '10.00',
                finish: 'Selesai'
            }
        },
        reception: {
            year: '2025',
            month: 'Oktober',
            date: '22',
            day: 'Rabu',
            hours: {
                start: '10.00',
                finish: 'Selesai'
            }
        },
        address: 'Dsn. Sarimukti RT 03 RW 02, Desa Rancasari, Kec. Pamanukan'
    },

     link: {
        calendar: 'https://calendar.app.google/tNUdKunLHVe4PE2j9',
        map: 'https://maps.app.goo.gl/KNzdCUkorHSVkhfo9',
    },

    galeri: [
        {
            id: 1,
            image: './src/assets/images/1.png'
        },
        {
            id: 2,
            image: './src/assets/images/2.png'
        },
        {
            id: 3,
            image: './src/assets/images/3.png'
        },
        {
            id: 4,
            image: './src/assets/images/4.png'
        },
        {
            id: 5,
            image: './src/assets/images/5.png'
        }
    ],

    bank: [
        {
            id: 1,
            name: 'Diky',
            icon: './src/assets/images/bri.png',
            rekening: '035501047637504'
        },
        {
            id: 2,
            name: 'Nisa',
            icon: './src/assets/images/bri.png',
            rekening: '035501054842506'
        },
    ],

    audio: './src/assets/audio/wedding.mp3',

    api: 'https://script.google.com/macros/s/AKfycbxwGGuCLJX5EhiOYwyXCC1XcftPwPjGUOHHDcMc-Bv4oalNA63u_2SfPPtMCATWC-mL/exec',
   
    navbar: [
        {
            id: 1,
            teks: 'Home',
            icon: 'bx bxs-home-heart',
            path: '#home',
        },
        {
            id: 2,
            teks: 'Mempelai',
            icon: 'bx bxs-group',
            path: '#bride',
        },
        {
            id: 3,
            teks: 'Tanggal',
            icon: 'bx bxs-calendar-check',
            path: '#time',
        },
        {
            id: 4,
            teks: 'Galeri',
            icon: 'bx bxs-photo-album',
            path: '#galeri',
        },
        {
            id: 5,
            teks: 'Ucapan',
            icon: 'bx bxs-message-rounded-dots',
            path: '#wishas',
        },
    ],
}
