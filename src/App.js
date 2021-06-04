import React,{useState} from "react";

function App() {

  const[panjang, setPanjang] = useState("")
  const[lebar, setLebar] = useState("")
  const[tinggi, setTinggi] = useState("")
  const[hasil, setHasil] = useState("")

  console.log('panjang : ${panjang}')
  console.log('lebar : $lebar : ${lebar}')
  console.log('tinggi : $tinggi : ${tinggi}')

  function volume(){
    setHasil(2*(panjang *lebar + panjang *tinggi + lebar *tinggi))
  }

  return(
    <div class = "App">
      <p><font color="Red">
      <p align ="center">==================================</p>
      <p align ="center">      APLIKASI BANGUN RUANG       </p>
      <p align ="center">  MENGHITUNG LUAS PERMUKAAN BALOK </p>
      <p align ="center">==================================</p>
      </font> </p>

      <p align ="center">*********************************</p>
      <p align ="center">Masukkan Nilai Panjang :</p>
      <p align ="center"><input type = "text" value = {panjang} onChange = {e=> setPanjang(+e.target.value)}></input></p>

      <p align ="center">Masukkan Nilai Lebar :</p>
      <p align ="center"><input type = "text" value = {lebar} onChange = {e=> setLebar(+e.target.value)}></input></p>

      <p align ="center">Masukkan Nilai Tinggi :</p>
      <p align ="center"><input type = "text" value = {tinggi} onChange = {e=> setTinggi(+e.target.value)}></input></p>
      <p align ="center">*********************************</p>
      
      <p align ="center"><button onClick = {volume}><font color="Red">Luas Permukaan Balok Adalah :</font></button></p>
    

      <p align ="center">{hasil}</p>
      <p align ="center">jadi, Luas Permukaan Balok Adalah : {hasil}</p>
     
      <p><font color="Red">
      <p align ="center">====================</p>
      <p align ="center">Haidar Azra Manurung</p>
      <p align ="center">     0701182144     </p>
      <p align ="center">Pemrograman Web IK-6</p>
      <p align ="center">====================</p>
      </font></p>
    </div>
  );
}
export default App