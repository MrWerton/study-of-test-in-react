import Link from "next/link"
import { useRouter } from "next/router"
interface IProps{
    href: string,
    title: string
}
export const LinkComponent = ({href, title}: IProps) =>{
    const {asPath} = useRouter()
    const style = asPath === href? 'active' : 'link'
    return(
        <Link href={href} >
        <a className={style} href={href}>{title}</a>
        </Link>
    )
}