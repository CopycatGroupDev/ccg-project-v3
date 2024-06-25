import { HeaderTextZoneRows as Rows } from "./HeaderTextZoneRows"
import { HeaderTextZoneRow as Row } from "./HeaderTextZoneRow"

export default function HeaderTextZone ({ rows = [], color, ...props }) {
    return <Rows {...props} $color={color}>{rows?.map((row, i) => <Row key={i}>{row}</Row>)}</Rows>
}