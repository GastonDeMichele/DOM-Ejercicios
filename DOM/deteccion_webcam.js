const d = document,
n = navigator
export default function webCam(id){
const $videos = d.getElementById(id);
//console.log(n.mediaDevices.getUserMedia)

if (n.mediaDevices.getUserMedia) {
  n.mediaDevices.getUserMedia({video:true,audio:false})
  .then((stream)=>{
    console.log(stream)
    $videos.scrObject = stream
    $videos.play()
  })
  .catch((err)=>{
    $videos.insertAdjacentHTML("afterend", `<p><mark>${err}<mark/><p/>`)
    console.log(`sucedio el siguiente error: ${err}`)
  })  
}
}