export default function zIndex(element) {
    return [
        'background',
        'headerText',
        'boutiqueMenu',
        'navli',
        'navdropdown',
        'footer',
        'modal'
    ].findIndex(el => el === element)
};