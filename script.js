```javascript
function cekJawaban(){

const jawaban =
document.querySelector(
'input[name="jawab"]:checked'
);

const hasil =
document.getElementById("hasil");

if(!jawaban){

hasil.innerHTML =
"⚠ Pilih salah satu jawaban.";

return;
}

if(jawaban.value === "B"){

hasil.innerHTML =
"✅ Benar! cos A = 4/5";

hasil.style.color = "green";
}

else{

hasil.innerHTML =
"❌ Jawaban belum tepat.";

hasil.style.color = "red";
}

}
```
