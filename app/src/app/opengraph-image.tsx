import { ImageResponse } from "next/og";
export const alt="AdaptSphere. Governed AI Engineering.";
export const size={width:1200,height:630};
export const contentType="image/png";
export default function Image(){return new ImageResponse(<div style={{display:"flex",flexDirection:"column",justifyContent:"space-between",width:"100%",height:"100%",background:"#1D2925",color:"#F6F4EE",padding:72}}><div style={{display:"flex",fontSize:30}}>AdaptSphere<span style={{color:"#C7F36B",marginLeft:24}}> / Governed AI Engineering</span></div><div style={{fontSize:78,lineHeight:1.06,display:"flex",flexDirection:"column"}}><span>Build AI you can</span><span style={{color:"#C7F36B"}}>actually control.</span></div><div style={{display:"flex",justifyContent:"space-between",fontSize:25}}><span>Architecture. Engineering. Governance.</span><span>adaptsphere.ai</span></div></div>,size);}
