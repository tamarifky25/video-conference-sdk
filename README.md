# My Video Conference SDK

SDK ini memungkinkan Anda untuk mengelola konferensi video melalui API.

## Instalasi

Tambahkan dependensi berikut ke `pubspec.yaml` Anda:

```yaml
dependencies:
  my_video_conference_sdk:
    git:
      url: https://github.com/tamarifky25/video-conference-sdk.git

Penggunaan
Di Dart/Flutter, Anda bisa menggunakan SDK seperti ini:
import 'package:my_video_conference_sdk/video_api.dart';

void main() {
  final api = VideoAPI(baseURL: 'http://localhost:3031');
  
  api.startConference();
}

Menambahkan Unit Test
2.1. Buat File Test
Buat file test/video_api_test.dart untuk menguji SDK:
import 'package:test/test.dart';
import 'package:my_video_conference_sdk/video_api.dart';

void main() {
  test('startConference should complete successfully', () async {
    final api = VideoAPI(baseURL: 'http://localhost:3031');

    await api.startConference();

    // Tambahkan assertions untuk memverifikasi perilaku yang benar
  });

  test('endConference should complete successfully', () async {
    final api = VideoAPI(baseURL: 'http://localhost:3031');

    await api.endConference();

    // Tambahkan assertions untuk memverifikasi perilaku yang benar
  });
}

import 'package:test/test.dart';
import 'package:my_video_conference_sdk/video_api.dart';

void main() {
  test('startConference should complete successfully', () async {
    final api = VideoAPI(baseURL: 'http://localhost:3031');

    await api.startConference();

    // Tambahkan assertions untuk memverifikasi perilaku yang benar
  });

  test('endConference should complete successfully', () async {
    final api = VideoAPI(baseURL: 'http://localhost:3031');

    await api.endConference();

    // Tambahkan assertions untuk memverifikasi perilaku yang benar
  });
}

2.2. Jalankan Unit Test
Jalankan test untuk memastikan semuanya berjalan dengan benar:
dart test

Mempublikasikan SDK (Opsional)
Jika Anda ingin mempublikasikan SDK ke pub.dev, ikuti langkah-langkah ini:

3.1. Verifikasi
Verifikasi paket sebelum mempublikasikannya:
dart pub publish --dry-run

3.2. Publikasikan
Jika verifikasi berhasil, publikasikan SDK:
dart pub publish

Menggunakan SDK di Proyek Flutter
4.1. Menambahkan SDK sebagai Dependensi
Di proyek Flutter yang ingin menggunakan SDK, tambahkan SDK sebagai dependensi di pubspec.yaml:
dependencies:
  flutter:
    sdk: flutter
  my_video_conference_sdk:
    git:
      url: https://github.com/tamarifky25/video-conference-sdk.git

4.2. Menjalankan flutter pub get
Ambil dependensi baru dengan menjalankan:
flutter pub get

4.3. Menggunakan SDK dalam Kode Flutter
Gunakan SDK dalam kode aplikasi Flutter Anda:
import 'package:flutter/material.dart';
import 'package:my_video_conference_sdk/video_api.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Video Conference App'),
        ),
        body: Center(
          child: ElevatedButton(
            onPressed: () {
              final api = VideoAPI(baseURL: 'http://localhost:3031');
              api.startConference();
            },
            child: Text('Start Conference'),
          ),
        ),
      ),
    );
  }
}
