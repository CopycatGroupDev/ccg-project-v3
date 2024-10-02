import QRCodeStyling from 'qr-code-styling';
import { useState, useRef, useEffect, createContext, useContext } from 'react';
import Font from './Font';
import Flex from './Flex';
import FlexLabel from './FlexLabel';
import Box from './Box';
import GradientStops from './GradientStops';

export const AppContext = createContext(null);
export let spacing = "2rem";
export const gap = "0.5rem";

export const defaultData = "http://fr.wikipedia.org/wiki/QR_Code";
export const qrCode = new QRCodeStyling({ width: 3000, height: 3000, data: defaultData });

export default function App() {
    const ref = useRef(null);
    const [form, setForm] = useState({
        data: "",
        margin: 200,
        errorCorrectionLevel: 'H',
        bg: { gradientAngle: 0, gradientStops: [ {color: "#000000", offset: 0.0} ] },
        dotsStyle: "square",
        dots: { gradientAngle: 0, gradientStops: [ {color: "#ffffff", offset: 0.0} ] },
        cornerSquareStyle: "square",
        cornerSquare: { gradientActive: false, gradientAngle: 0, gradientStops: [ {color: "#ffffff", offset: 0.0} ] },
        cornerDotStyle: "square",
        cornerDots: { gradientActive: false, gradientAngle: 0, gradientStops: [ {color: "#ffffff", offset: 0.0} ] },
    })

    useEffect(() => {
        handleChange(form)
    }, []);

    const handleChange = (form) => {
        qrCode.update({
            data: form.data === "" ? defaultData : form.data,
            margin: form.margin,
            backgroundOptions: {
                gradient: {
                    type: form.bg.gradientType,
                    rotation: (form.bg.gradientAngle / 100) * (2 * Math.PI),
                    colorStops: form.bg.gradientStops.map(stop => ({ color: stop.color, offset: stop.offset/100 }))
                }
            },
            qrOptions: {
                errorCorrectionLevel: form.errorCorrectionLevel,
            },
            dotsOptions: {
                type: form.dotsStyle,
                gradient: {
                    type: form.dots.gradientType,
                    rotation: (form.dots.gradientAngle / 100) * (2 * Math.PI),
                    colorStops: form.dots.gradientStops.map(stop => ({ color: stop.color, offset: stop.offset/100 }))
                }
            },
            cornersSquareOptions: {
                type: form.cornerSquareStyle,
                [form.cornerSquare.gradientActive && "gradient"]: {
                    colorStops: form.cornerSquare.gradientStops.map(stop => ({ color: stop.color, offset: stop.offset/100 }))
                }
            },
            cornersDotOptions: {
                type: form.cornerDotStyle,
                [form.cornerDots.gradientActive && "gradient"]: {
                    colorStops: form.cornerDots.gradientStops.map(stop => ({ color: stop.color, offset: stop.offset/100 }))
                }
            }
        });
        setForm(form);
    }

    const download = () => {
        qrCode.download({
            name: `QR-${form.data}-${(new Date()).toUTCString()}`,
            extension: form.extension
        });
    }

    useEffect(() => {
        qrCode.append(ref.current);
    }, []);

    const contextValue = {
        form,
        handleChange,
        mobile : useState(false)
    }
    const [ isMobile, setMobile ] = contextValue.mobile;
    useEffect(() => {
        if (window.innerWidth < 768) setMobile(true);
        else setMobile(false);

        window.addEventListener("resize", () => {
            if (window.innerWidth < 768) setMobile(true);
            else setMobile(false);
        })
    }, []);

    spacing = isMobile ? "1.5rem" : spacing;

    return <AppContext.Provider value={contextValue}>
        <Font>
            <Flex $direction={"column"} $maxWidth={!isMobile && "750px"} $width={"100%"} $align={"center"} $padding={spacing} $gap={spacing} $height={isMobile ? "fit-content" : "100%"}>
                <h1 style={{margin: 0}}>QR Code</h1>
                <Box $direction={isMobile ? "column" : "row"} $gap={spacing} $width={"100%"} $height={!isMobile && "100%"} $overflow={!isMobile && "hidden"} $padding={spacing} style={{background: "#fff1"}} $radius={"1rem"}>
                    <Flex $justify={isMobile ? "center" : "flex-start"} $direction={"column"} $gap={"0.5rem"}>
                        <Flex ref={ref} style={!isMobile ? { width: "fit-content", height: 300, aspectRatio: "1" } : { width: "100%", height: "fit-content", aspectRatio: "1" }} $overflow={"hidden"} />
                        <Flex $justify="center">
                            <button onClick={download} style={{width: "50%"}}>Télécharger</button>
                        </Flex>
                    </Flex>
                    <Flex $direction={"column"} $width={"100%"} $gap={gap} $overflow={!isMobile && "auto"}>
                        <FlexLabel $width={"100%"} $gap={gap} $align={"center"}>
                            <span>URL</span>
                            <input type={"text"} onChange={e => handleChange({ ...form, data : e.target.value })} defaultValue={form.data} placeholder={"URL"} />
                        </FlexLabel>
                        
                        <FlexLabel $width={"100%"} $gap={gap} $align={"center"}>
                            <span>Marge interieure</span>
                            <input type={"number"} onChange={e => handleChange({ ...form, margin : e.target.value })} defaultValue={form.margin} placeholder={"Marge"} step={50} />
                        </FlexLabel>

                        <FlexLabel $width={"100%"} $gap={gap} $align={"center"}>
                            <span>Niv. de correction d'erreur</span>
                            <select defaultValue={form.errorCorrectionLevel} onChange={e => handleChange({ ...form, errorCorrectionLevel : e.target.value })}>
                                <option value={"H"}>H</option>
                                <option value={"L"}>L</option>
                                <option value={"M"}>M</option>
                                <option value={"Q"}>Q</option>
                            </select>
                        </FlexLabel>

                        <FlexLabel $width={"100%"} $gap={gap} $align={"center"}>
                            <span>Format</span>
                            <select defaultValue={form.extension} onChange={e => handleChange({ ...form, extension : e.target.value })}>
                                <option value="png">PNG</option>
                                <option value="jpg">JPEG</option>
                                <option value="webp">WEBP</option>
                                <option value="svg">SVG</option>
                                <option value="gif">GIF</option>
                            </select>
                        </FlexLabel>

                        <h2>Fond</h2>
                        <GradientStops column={"bg"} />

                        <h2>Points</h2>
                        <FlexLabel $width={"100%"} $gap={gap} $align={"center"}>
                            <span>Forme</span>
                            <select defaultValue={form.dotsStyle} onChange={e => handleChange({ ...form, dotsStyle : e.target.value })}>
                                <option value={"dots"}>Points</option>
                                <option value={"rounded"}>Arrondi</option>
                                <option value={"extra-rounded"}>Extra arrondi</option>
                                <option value={"classy"}>Classe</option>
                                <option value={"classy-rounded"}>Classe et Arrondi</option>
                                <option value={"square"}>Carré</option>
                            </select>
                        </FlexLabel>
                        <GradientStops column={"dots"} />

                        <h2>Coins</h2>

                        <h3>Carré</h3>
                        <FlexLabel $width={"100%"} $gap={gap} $align={"center"}>
                            <span>Forme</span>
                            <select defaultValue={form.cornerSquareStyle} onChange={e => handleChange({ ...form, cornerSquareStyle : e.target.value })}>
                                <option value={"dot"}>Points</option>
                                <option value={"square"}>Carre</option>
                                <option value={"extra-rounded"}>Extra arrondi</option>
                            </select>
                        </FlexLabel>
                        <label>
                            <input type="checkbox" defaultChecked={form.cornerSquare.gradientActive} onChange={e => handleChange({ ...form, cornerSquare : {...form.cornerSquare, gradientActive : e.target.checked } })} />
                            Dissocier couleur
                        </label>
                        {form.cornerSquare.gradientActive && <GradientStops column={"cornerSquare"} />}

                        <h3>Point</h3>
                        <FlexLabel $width={"100%"} $gap={gap} $align={"center"}>
                            <span>Forme</span>
                            <select defaultValue={form.cornerDotStyle} onChange={e => handleChange({ ...form, cornerDotStyle : e.target.value })}>
                                <option value={"square"}>Carre</option>
                                <option value={"dot"}>Arrondi</option>
                            </select>
                        </FlexLabel>
                        <label>
                            <input type="checkbox" defaultChecked={form.cornerDots.gradientActive} onChange={e => handleChange({ ...form, cornerDots : {...form.cornerDots, gradientActive : e.target.checked } })} />
                            Dissocier couleur
                        </label>
                        {form.cornerDots.gradientActive && <GradientStops column={"cornerDots"} />}
                    </Flex>
                </Box>
            </Flex>
        </Font>
    </AppContext.Provider>
}