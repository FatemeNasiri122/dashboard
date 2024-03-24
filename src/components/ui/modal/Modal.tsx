import Close from "../icons/Close";

interface Props {
    children: JSX.Element
    openModal: boolean
    setOpenModal: (value: boolean) => void

}

const Modal: React.FC<Props> = ({ children, openModal, setOpenModal }) => {
    
    return (<div className="modal-container" onClick={() => setOpenModal(false)}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="close">
                <button onClick={() => setOpenModal(false)}>
                    <Close />
                </button>
            </div>
            {children}
        </div>
    </div>)
}

export default Modal;