import useIconSelect from "../../hooks/useIconSelect"

export const Icons = ({ reference }) =>
(
    <div>
        <img src={useIconSelect(reference)} alt={`img-${reference}`} />
    </div>
)
