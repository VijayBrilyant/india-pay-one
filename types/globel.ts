import { StaticImageData } from "next/image"
import { ReactNode } from "react"

export interface BannerProp {
id:number,
header:string,
subcontent:string | ReactNode,
bannerImg: {image:string | StaticImageData, alt:string}
action:() => void
}

export interface ServiceIntg{
id:number,
name:string,
define:string,
key_features:any[],
image:StaticImageData | string;
}