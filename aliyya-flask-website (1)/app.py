import os
from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html')

@app.route('/profile')
def profile():
    profile_data = {
        'nama': 'Aliyya Zhafirah',
        'kelas': '2 TRSE B',
        'nim': '2420307002',
        'prodi': 'Teknologi Rekayasa Sistem Elektronika',
        'kampus': 'Politeknik Caltex Riau',
        'angkatan': '2024',
        'email': 'aliyya24trse@mahasiswa.pcr.ac.id',
        'domisili': 'Simpang Pawuo',
        'tentang': (
            'Saya merupakan mahasiswa Teknologi Rekayasa Sistem Elektronika '
            'yang memiliki minat dalam bidang elektronika, embedded system, '
            'mikrokontroler, dan otomasi industri. Saya senang mempelajari '
            'teknologi baru, mengembangkan proyek elektronika, serta terus '
            'meningkatkan kemampuan di bidang teknik dan pemrograman.'
        ),
        'hobi': [
            'Membaca novel aksi dan fantasi',
            'Mengoprek perangkat elektronik',
            'Mempelajari hal baru',
            'Mengikuti perkembangan teknologi',
        ],
        'cita_cita': (
            'Menjadi seorang Embedded System Engineer atau Automation Engineer '
            'yang dapat berkontribusi dalam pengembangan teknologi industri modern.'
        ),
    }
    return render_template('profile.html', data=profile_data)

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0', port=int(os.environ.get('PORT', 5000)))
