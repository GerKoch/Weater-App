import useIconSelect from "../../hooks/useIconSelect"
import "./Icons.css";

export const Icons = ({ reference }) =>
(
    <div className="icon">
        <img src={useIconSelect(reference)} alt={`img-${reference}`} />
    </div>
)
