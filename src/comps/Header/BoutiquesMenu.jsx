import { colors } from "../../config/colors";
import { animation } from "../../config/headerAnimation";
import { infos } from "../../config/infos";
import BoutiqueCard from "./BoutiqueCard";
import { BoutiqueMenuLayout as Layout } from "./BoutiqueMenuLayout";

export default function BoutiquesMenu() {
    return <Layout {...animation}>
        <div>
            <BoutiqueCard to={"/sevres"} color={colors.sevres} img={"/icons/shop_pink.PNG"} {...infos.sevres} />
            <BoutiqueCard to={"/boulogne"} color={colors.boulogne} img={"/icons/shop_orange.PNG"} {...infos.boulogne} />
        </div>
        <div>
            <BoutiqueCard to={"/"} color={colors.default} img={"/icons/cat_outline_blue.PNG"} {...infos.office} vertical={false}  style={{ width: 'fit-content', maxWidth: '75%' }} title={"Pour d'autres services..."}/>
        </div>
    </Layout>
}