let endpoint = 'https://crudcrud.com/api/1e0327ae9f854e48bf26cee7d3e91c1f/produk/';

// tabel
fetch(endpoint)
  .then((response) => response.json())
  .then((res) => {
    let datas = res;

    datas.forEach((data_product) => {
      document.getElementById('data_produk').innerHTML += `
            <tr>
                <td> ${data_product.nama_produk} </td>
                <td> ${data_product.jumlah} </td>
                <td> ${data_product.harga} </td>
                <td>
                    <a href="#" class="tbledit" onclick="edit_data('${data_product._id}')"> Edit </a><br>
                    <a href="#" class="tbldelete" onclick="delete_data('${data_product._id}')"> Hapus </a>
                </td>
            </tr>
            `;
    });
  })
  .catch((error) => {
    document.querySelector('.error').innerText = error.message;
    document.querySelector('.error').style.display = 'block';
  });

//card
fetch(endpoint)
  .then((response) => response.json())
  .then((res) => {
    let datas = res;

    datas.forEach((product_item) => {
      document.getElementById('produk').innerHTML += `
        <div class="card">
            <h3> ${product_item.nama_produk} </h3>
            <p> Rp. ${product_item.harga} </p>
            <h6> Jumlah : ${product_item.jumlah} </h6>
        </div>
        `;
    });
  });

//tambah
function tambah_data(event) {
  event.preventDefault();

  const input_nama_produk = document.getElementById('nama_produk').value;
  const input_jumlah = document.getElementById('jumlah').value;
  const input_harga = document.getElementById('harga').value;

  fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nama_produk: input_nama_produk,
      jumlah: input_jumlah,
      harga: input_harga,
    }),
  }).then((response) => {
    window.location.reload();
  });
}

//edit
function edit_data(id_product) {
  document.querySelector('.tambah-data').style.display = 'none';
  document.querySelector('.edit-data').style.display = 'block';

  fetch(endpoint)
    .then((response) => response.json())
    .then((res) => {
      let datas = res;

      const product = datas.find((data) => data._id === id_product);
      document.getElementById('id_produk').value = product._id;
      document.getElementById('edit_nama_produk').value = product.nama_produk;
      document.getElementById('edit_jumlah').value = product.jumlah;
      document.getElementById('edit_harga').value = product.harga;
    })
    .catch((error) => {
      console.log('Terjadi kesalahan:', error.message);
    });
}

//update
function update_data(event) {
  event.preventDefault();

  const input_nama_produk = document.getElementById('edit_nama_produk').value;
  const input_jumlah = document.getElementById('edit_jumlah').value;
  const input_harga = document.getElementById('edit_harga').value;
  const input_id_produk = document.getElementById('id_produk').value;

  fetch(`${endpoint}${input_id_produk}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      nama_produk: input_nama_produk,
      jumlah: input_jumlah,
      harga: input_harga,
    }),
  }).then((response) => {
    window.location.reload();
  });
}

//hapus
function delete_data(id_product) {
  fetch(`${endpoint}${id_product}`, {
    method: 'DELETE',
  }).then((response) => {
    window.location.reload();
  });
}
