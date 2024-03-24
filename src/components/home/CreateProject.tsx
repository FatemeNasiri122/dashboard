import { useCallback, useEffect, useState } from "react";
import CreateProjectForm from "./CreateProjectForm";

const CreateProject: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const openingModal = useCallback(() => {
        setOpenModal(true);
    }, [openModal]);

     useEffect(() => {
        if (openModal) {
            document.body.classList.add("hidden-overflow");
        } else {
            document.body.classList.remove("hidden-overflow");
        }
    }, [openModal]);

    return (<div className="projects-container">
        <h2 className="projects">Projects</h2>
        <button className="btn-white" onClick={() => openingModal()}>Create New Project</button>
        {openModal && <CreateProjectForm setOpenModal={setOpenModal} openModal={openModal} />}
    </div>)
}

export default CreateProject;