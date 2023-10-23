document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const nama = document.getElementById('nama').value;
    const nim = document.getElementById('nim').value;
    const prodi = document.getElementById('prodi').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const jenis_kelamin = document.getElementById('jenis_kelamin').value;
    const tgl_lahir = document.getElementById('tgl_lahir').value;
    const alamat = document.getElementById('alamat').value;
    const table = document.getElementById('myTable');

    const newRow = table.insertRow(table.rows.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);
    const cell8 = newRow.insertCell(7);
    cell1.innerHTML = nama;
    cell2.innerHTML = nim;
    cell3.innerHTML = prodi;
    cell4.innerHTML = email;
    cell5.innerHTML = password;
    cell6.innerHTML = jenis_kelamin;
    cell7.innerHTML = tgl_lahir;
    cell8.innerHTML = alamat;

    document.getElementById('nama').value = '';
    document.getElementById('nim').value = '';
    document.getElementById('prodi').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
    document.getElementById('jenis_kelamin').value = 'Laki-laki';
    document.getElementById('tgl_lahir').value = '';
    document.getElementById('alamat').value = '';
});
