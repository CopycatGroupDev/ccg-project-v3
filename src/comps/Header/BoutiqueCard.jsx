import { BoutiqueCardLayout as Layout } from "./BoutiqueCardLayout"

export default function BoutiqueCard ({ vertical = true, color, img, name, to, adress, numéro, email, title = null, ...props }) {
    return <Layout $vertical={vertical} to={to} $color={color} {...props}>
        <div className="title">
            <img src={img} alt="" />
            <span>{name}</span>
        </div>
        <hr />
        <div className="infos">
            {title && <span className="title">{title}</span>}
            <div>
                <span>Adresse : </span>{adress}<br />
                <span>Numero : </span>{numéro}<br />
                <span>Email : </span>{email}
            </div>
        </div>
    </Layout>
}