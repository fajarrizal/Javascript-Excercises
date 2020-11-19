const data = document.getElementById('data');

class Siswa {
    constructor(username, password, nama_kelas) {
        this.username = username;
        this.password = password;
        this.nama_kelas = nama_kelas;
    }

    gabung() {
        console.log(this.username + ' telah bergabung ' + this.nama_kelas);
    }
}

// let tambahsiswa = new Siswa('Rizal Fajar', '188xa8s', 'Kelas Programming')
// tambahsiswa.gabung();

// memakai inheritance 
// penjelasannya : kita bisa memakai semua fitur pada element parent yaitu *class Siswa

class Berlangganan extends Siswa {
    constructor(username, paket) {
        super(username);
        this.paket = paket;
    }

    gabungPaket() {
        console.log('Helo ' + this.username + ' telah berlangganan ' + this.paket);
    }
}

let langganan = new Berlangganan('Rizal Fajar', 'Premium');
langganan.gabungPaket();