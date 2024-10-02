import { useContext } from "react";
import { AppContext, gap } from "./Main";
import FlexLabel from "./FlexLabel";
import Flex from "./Flex";

export default  ({column}) => {
    const { form, handleChange } = useContext(AppContext);

    return <>
        {form[column]?.gradientStops.length > 1 && <select onChange={e => handleChange({ ...form,  [column] : {...form[column], gradientType : e.target.value } })}>
            <option value={"linear"}>Linéaire</option>
            <option value={"radial"}>Radial</option>
        </select>}
        {form[column]?.gradientStops.length > 1 && <input type={"number"} min={0} max={99} maxLength={2} step={.1} onChange={e => handleChange({ ...form, [column] : {...form[column], gradientAngle : e.target.value } })} defaultValue={form.data} placeholder={"Rotation Dégradé (en %)"} />}
        <Flex $direction={"column"} $gap={gap}>
            {form[column]?.gradientStops?.map((grad, i) => {
                return <Flex key={i} $gap={gap} $align={"center"}>
                    <span>Couleur {form[column]?.gradientStops.length > 1 && i+1}</span>
                    {form[column]?.gradientStops.length > 1 && <input
                        type={"number"}
                        defaultValue={form[column].gradientStops[i].offset}
                        step={10}
                        min={0}
                        max={100}
                        maxLength={3}
                        onChange={e => handleChange({
                            ...form,
                            [column]: {    
                                ...form[column],
                                gradientStops : Object.values({
                                    ...form[column].gradientStops,
                                    [i] : {...form[column].gradientStops[i], offset: e.target.value}
                                })
                            }
                        })}
                        placeholder={"Position couleur (en %)"}
                    />}
                    <FlexLabel $width={"100%"} $radius={"999rem"} $padding={"0.75rem"} $align={"center"} style={{ background: form[column].gradientStops[i].color }}>
                        <input
                            type={"color"}
                            defaultValue={form[column].gradientStops[i].color}
                            onChange={e => handleChange({
                                ...form,
                                [column] : {
                                    ...form[column],
                                    gradientStops : Object.values({
                                        ...form[column].gradientStops,
                                        [i] : {...form[column].gradientStops[i], color: e.target.value}
                                    })
                                }
                            })}
                            placeholder={"Couleur"}
                            style={{display: "none"}}
                        />
                        {form[column].gradientStops[i].color}
                    </FlexLabel>
                    {i>0 && <button
                        onClick={() => {
                        handleChange({
                            ...form,
                            [column] : {
                                ...form[column],
                                gradientStops : form[column].gradientStops.filter((v, k) => k !== i)
                            }
                        })}
                        }>Supprimer</button>}
                </Flex>
            })}
        </Flex>
        <button onClick={() => {
            handleChange({
                ...form,
                [column] : {...form[column], gradientStops : [...form[column].gradientStops, {offset: 0.0, color: "#000000"}]}
            })}
        }>Ajouter couleur degradé</button>
    </>
}