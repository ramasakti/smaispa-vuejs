const dashboard = {
    template: `
            <div>
                <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match uk-margin-top-small" uk-grid>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body">
                            <?xml version="1.0" encoding="UTF-8"?>
                            <svg class="uk-align-center" xmlns="http://www.w3.org/2000/svg" version="1.1" width="40%" height="40%" viewBox="0 0 200 200"><rect x="0" y="0" width="200" height="200" fill="#ffffff"/><g transform="scale(9.524)"><g transform="translate(0,0)"><path fill-rule="evenodd" d="M8 0L8 1L9 1L9 0ZM10 0L10 2L8 2L8 5L9 5L9 6L8 6L8 7L9 7L9 6L10 6L10 7L11 7L11 8L8 8L8 9L7 9L7 8L6 8L6 9L7 9L7 10L5 10L5 9L4 9L4 8L0 8L0 9L3 9L3 10L1 10L1 11L0 11L0 12L1 12L1 11L3 11L3 12L2 12L2 13L4 13L4 12L5 12L5 13L8 13L8 14L11 14L11 15L13 15L13 14L12 14L12 13L13 13L13 12L12 12L12 10L14 10L14 11L15 11L15 12L14 12L14 13L16 13L16 14L15 14L15 15L17 15L17 17L19 17L19 18L17 18L17 19L15 19L15 18L14 18L14 16L12 16L12 17L13 17L13 18L12 18L12 20L11 20L11 21L12 21L12 20L13 20L13 18L14 18L14 21L15 21L15 20L16 20L16 21L19 21L19 20L17 20L17 19L19 19L19 18L20 18L20 17L19 17L19 16L21 16L21 15L18 15L18 14L20 14L20 13L18 13L18 14L17 14L17 12L18 12L18 11L17 11L17 12L16 12L16 10L17 10L17 9L18 9L18 10L19 10L19 12L21 12L21 8L20 8L20 10L19 10L19 8L16 8L16 10L14 10L14 8L13 8L13 5L12 5L12 4L13 4L13 3L12 3L12 1L13 1L13 0ZM10 2L10 4L9 4L9 5L11 5L11 4L12 4L12 3L11 3L11 2ZM11 6L11 7L12 7L12 6ZM8 9L8 10L7 10L7 11L6 11L6 12L8 12L8 11L10 11L10 13L12 13L12 12L11 12L11 10L9 10L9 9ZM9 15L9 17L8 17L8 21L10 21L10 20L9 20L9 19L11 19L11 16L10 16L10 15ZM9 17L9 18L10 18L10 17ZM20 19L20 20L21 20L21 19ZM0 0L0 7L7 7L7 0ZM1 1L1 6L6 6L6 1ZM2 2L2 5L5 5L5 2ZM14 0L14 7L21 7L21 0ZM15 1L15 6L20 6L20 1ZM16 2L16 5L19 5L19 2ZM0 14L0 21L7 21L7 14ZM1 15L1 20L6 20L6 15ZM2 16L2 19L5 19L5 16Z" fill="#000000"/></g></g></svg>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body" id="card">
                            <p class="uk-margin-remove uk-position-top-right"><a href="/profile" class="uk-margin-small-right" uk-icon="user"></a></p>
                            <div class="uk-panel">
                                <img class="uk-border-circle uk-align-left uk-margin-small-right uk-margin-small-bottom" width="35%" height="35%" src="img/default-user.jpg">
                                <h5 class="uk-card-title uk-margin-remove ">Rama Sakti Hafidz FA</h5>
                                <p class="uk-margin-remove"><span class="uk-margin-small-right" uk-icon="calendar"></span>Surabaya, 2002-09-27</p>
                                <p class="uk-margin-remove"><span class="uk-margin-small-right" uk-icon="location"></span>Kp. Baru Tb. Sumur Waru Sidoarjo</p>
                                <p class="uk-margin-remove"><span class="uk-margin-small-right" uk-icon="whatsapp"></span>6285157177034</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="uk-child-width-1-3@m uk-grid-small uk-grid-match" uk-grid>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body">
                            <h3 class="uk-card-title">Siswa</h3>
                            <p>Jumlah siswa saat ini 113 siswa</p>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body">
                            <h3 class="uk-card-title">Guru</h3>
                            <p>Jumlah guru dan staf saat ini 9 orang</p>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body">
                            <h3 class="uk-card-title">Kelas</h3>
                            <p>Jumlah kelas saat ini 6 kelas</p>
                        </div>
                    </div>
                </div>
                <div class="uk-child-width-1-2@m uk-grid-small uk-grid-match" uk-grid>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body uk-padding-small">
                            <h3 class="uk-card-title">Diagram Presensi Siswa Hari Ini</h3>
                            <canvas class="uk-height-max-medium" id="absenChart"></canvas>
                        </div>
                    </div>
                    <div>
                        <div class="uk-card uk-card-default uk-card-body uk-padding-small">
                            <h3 class="uk-card-title">Grafik Keterlambatan Siswa Minggu Ini</h3>
                            <canvas class="uk-height-max-medium" id="terlambatChart"></canvas>
                        </div>
                    </div>
                </div>
            </div>
    `
}

const web = {
    template: `
    <div>
                <table class="table table-borderless">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Judul</th>
                            <th scope="col">Deskripsi</th>
                            <th scope="col">Author</th>
                            <th scope="col">Handler</th>
                        </tr>
                    </thead>
                    <tbody>   
                        <tr>
                            <td>1</td>
                            <td>Judul</td>
                            <td>Uploader</td>
                            <td>Uploaded</td>
                            <td>
                                <a href="#modal-center" uk-toggle="target: #edit-absen-$blog->id_siswa">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                </a> &nbsp;
                                @include('absen.edit-absen')
                            </td>
                        </tr>
                    </tbody>
                </table>
    </div>
`
}

const item = {
    template: `<h1>Item</h1>`
}