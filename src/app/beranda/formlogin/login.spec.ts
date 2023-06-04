import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lokal',
  templateUrl: './lokal.component.html',
  styleUrls: ['./lokal.component.css']
})
export class LokalComponent {
  username: string;
  password: string;

  constructor(private http: HttpClient) {}

  onSubmit(): void {
    // Memanggil API untuk memverifikasi kredensial
    const loginData = {
      username: this.username,
      password: this.password
    };

    this.http.post('URL_API_LOGIN', loginData).subscribe(
      (response) => {
        // Login berhasil
        console.log('Login successful');
        console.log('Response:', response);
        // Lakukan tindakan setelah login sukses, seperti navigasi ke halaman beranda
      },
      (error) => {
        // Login gagal
        console.log('Login failed');
        console.log('Error:', error);
        // Lakukan tindakan sesuai dengan kasus gagal login, seperti menampilkan pesan kesalahan
      }
    );
  }
}
