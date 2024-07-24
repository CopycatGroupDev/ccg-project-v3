const SVG = ({ size, pathData, children, ...props }) => <svg size={size} viewBox="0 0 16 16" {...props}>
  {pathData.map(path => <path key={path} d={path} />)}
</svg>
const pathDataMap = {
  address : ["M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"],
  phone : ["M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z", "M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"],
  email : ["M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"]
}

export const renseignements = {
    Sèvres: [
      { Icon: ({ ...props }) => <SVG {...props} pathData={pathDataMap.address} />, text: "2 rue de Ville d'Avray, 92310 Sèvres" },
      { Icon: ({ ...props }) => <SVG {...props} pathData={pathDataMap.phone} />, text: '01 45 07 98 00' },
      { Icon: ({ ...props }) => <SVG {...props} pathData={pathDataMap.email} />, text: 'sevres@copycatgroup.fr' }
    ],
    Boulogne: [
      { Icon: ({ ...props }) => <SVG {...props} pathData={pathDataMap.address} />, text: '45 Route de la Reine, 92100 Boulogne - Billancourt' },
      { Icon: ({ ...props }) => <SVG {...props} pathData={pathDataMap.phone} />, text: '01 46 05 82 03' },
      { Icon: ({ ...props }) => <SVG {...props} pathData={pathDataMap.email} />, text: 'boulogne@copycatgroup.fr' }
    ]
  }