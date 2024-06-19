function kirimData() {
    var name = document.getElementById("nama").value;
    var nim = document.getElementById("nim").value;
    var angkatan = document.getElementById("angkatan").value;
    var tanggal = document.getElementById("tanggal").value;
    var peminatan = document.querySelector("input[name=peminatan]:checked").value;
    var alamat = document.getElementById("alamat").value;

    Swal.fire({
        title: "Informasi Pre-Regist",
        html: 
            "<p><strong>Nama:</strong> " + name + "</p>" +
            "<p><strong>Tanggal Lahir:</strong> " + tanggal + "</p>" +
            "<p><strong>Negara:</strong> " + angkatan + "</p>" +
            "<p><strong>Pemilihan Episode:</strong> " + peminatan + "</p>" +
            "<p><strong>Kritik & Saran:</strong> " + nim + "</p>" +
            "<p><strong>Alamat:</strong> " + alamat + "</p>",
        width: 600,
        padding: "3em",
        color: "black",
        background: "#fff",
        backdrop: `
            rgba(0,0,123,0.4)
            url('/assets/otw.gif')
            left top
            no-repeat
        `
    });

    // Prevent form submission
    return false;
}