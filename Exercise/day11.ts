/*Write a typescript  function called phoneNumber that takes a single argument input. 
    The function is intended to format a phone number. It checks the input to ensure 
    it meets certain criteria and then proceeds with formatting. The formatting 
    includes replacing the leading "0" with "62" and creating a template in the 
    format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The 
    function returns the formatted phone number.

    - Check if the input is of type "string." If it's not, return "Invalid phone number."
    - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
    - Make sure the input all are numeric 0-9
    ex : 
    input = "085211155555"
    output = "(6285)-2111-55555" */

function phoneNumber(input: string): string {
  if (typeof input !== "string") {
    return "Invalid phone number."; // Memeriksa input bertipe "string"
  } else if (input.length !== 12) {
    return "Invalid phone number."; // Memeriksa panjang input 12 karakter
  } else if (input[0] === "0") {
    input = "62" + input.slice(1);  // Memformat phone number menjadi (xnxx)-xnxx-xnxxx
  }

  const formattedNumber = `(${input.slice(0, 4)})-${input.slice(4,8)}-${input.slice(8)}`; // merubah format nomor 
  return formattedNumber;
}

console.log(phoneNumber("085211155555"));


/*buat parent class Product
constructor = nama, berat, price,stok

buat child class dari produk yaitu Buku dan Pakaian 
constructor = super, data unik dari buku dan pakaian 

buat class OnlineShop
constructor = products dan cart (private)
method : 
    - tambahProduk(produk): memasukkan produk ke arr products, kalau sudah ada dalam arr products
        return produk sudah ada dalam toko

    - tambahKeKeranjang(produk, jumlah) : memasukkan produk yang di pilih user ke arr cart. Harus validasi
        sudah ada apa belum dalam cart dan juga validasi ada tidak produknya di catalog, kalau yang di masukkan 
        melebihi stok return stok tidak mencukupi dan tampilkan juga stoknya

    - transaksi(uangUser, jarak) : menampilkan total pembayaran, beserta ongkir. example: 1km * 2000.
        tampilkan juga kembaliannya dan kosongkan cart jika berhasil melakukan transaksi. Harus ada validasi
        untuk uangUser tidak boleh kurang dari total pembayaran.

    - showCatalog : menampilkan isi catalog dari toko

    - showCart : menampilkan isi cart user
*/

class Product {
    constructor(
        public nama: string,
        public berat: number,
        public price: number,
        public stok: number
    ) {}
}

class Buku extends Product {
    constructor(
        nama: string,
        berat: number,
        price: number,
        stok: number,
        public penulis: string,
        public penerbit: string
    ) {
        super(nama, berat, price, stok);
    }
}
class Pakaian extends Product {
    constructor(
        nama: string,
        berat: number,
        price: number,
        stok: number,
        public ukuran: string,
        public bahan: string
    ) {
        super(nama, berat, price, stok);
    }
}

class OnlineShop {

        private products: Product[] = []
        private cart: {Product, jumlah: number }[] = [];

        constructor() {
            this.products = [];
            this.cart = [];
        }

    tambahProduk(product:Product): string {
        const exitingProduct = this.products.find(p => p.nama === product.nama);
            if (exitingProduct)
                return "produk sudah ada dalam kataalog"
            
            this.products.push(product)
            return " tambah product sukses!";
        }
    
    tambahKeranjang(jumlah: number, product: Product) {
        const availableProduct = this.products.find((p) => p.nama === product.nama);
        if(!availableProduct) {
            return " produk tidak ada di katalog"
        }

        let cartItem = this.cart.find((item) => cartItem.Product.nama === product.nama);
        
        if (cartItem) {
            availableProduct.stok >= jumlah 
        }
    }
}





