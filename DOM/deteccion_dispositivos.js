const d = document,
n = navigator,
ua = n.userAgent

export default function userDeviceInfo(id){
const $id = d.getElementById(id),
isMobile = {
    android:()=>ua.match(/android/i),
    ios: ()=>ua.match(/iphone/)
},
isDesktop = {},
isBrowser = {};

}
