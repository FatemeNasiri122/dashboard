import { memo, useContext, useState } from "react";
import Modal from "../ui/modal/Modal";
import ProjectsContext from "../../context/ProjectsContext";

interface Props {
    openModal: boolean
    setOpenModal: (value: boolean) => void;
}

const CreateProjectForm: React.FC<Props> = ({ setOpenModal, openModal }) => {
  const projectsItem = useContext(ProjectsContext);

  const [name, setName] = useState<string>("");
  const [errorName, setErrorName] = useState<boolean>(false);
  const [hours, sethours] = useState<number>(0);
  const [errorhours, setErrorhours] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [errorProgress, setErrorProgress] = useState<string>("");
  const [priority, setpriority] = useState<string>("");
  const [errorpriority, setErrorpriority] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (name === "") {
      setErrorName(true);
    } else {
      setErrorName(false);
    }
    if (hours === 0) {
      setErrorhours(true)
    } else {
      setErrorhours(false);
    }
    if (progress < 0 || progress > 100) {
      setErrorProgress("Progress should be between zero and hundred");
    } else { 
      setErrorProgress("");
    } if (priority === "") {
      setErrorpriority(true)
    } else {
     setErrorpriority(false);
    }
    if (name !== "" && hours !== 0 && (progress >= 0 && progress <= 100) && priority !== "") {
     const project = {
        projectName: {
        name,
        img: "/src/assets/images/dropbox.svg",
      },
        hours,
        priority,
        members: ["/src/assets/images/Ellipse 500.svg"],
        progress,
        id: Math.random()
      }
      projectsItem?.addProject(project);
      setOpenModal(false);
      setName("");
      sethours(0);
      setProgress(0);
      setpriority("")
    }     
      
    
  }
    
    return (<Modal openModal={openModal} setOpenModal={setOpenModal}>
      <form className="form" onSubmit={(event) => handleSubmit(event)}>
        <div>
          <label htmlFor="name">name</label>
          <input className="input" type="text" id="name" onChange={(e) => setName(e.target.value)} />
          {errorName && <p className="error">please fill this feild</p>}
        </div>
        <div>
          <label htmlFor="hourss">hours</label>
          <input className="input" type="number" id="hourss" onChange={(e) => sethours(+e.target.value)} />
          {errorhours && <p className="error">please fill this feild</p>}
        </div>
        <div>
          <label htmlFor="progress">progress %</label>
          <input className="input" type="number" id="progress" placeholder="0" onChange={(e) => setProgress(+e.target.value)} />
          <p className="error">{errorProgress}</p>
        </div>
        <div>
          <label htmlFor="priority">priority</label>
          <div className="choose-priority">
          <div>
            <input name="priority" type="radio" id="high" value="high" onChange={(e) => setpriority(e.target.value)} />
            <label htmlFor="high">high</label>
          </div>
          <div>
            <input name="priority" type="radio" id="medium" value="medium" onChange={(e) => setpriority(e.target.value)} /> 
            <label htmlFor="medium">medium</label>
          </div>
          <div>
            <input name="priority" type="radio" id="low" value="low" onChange={(e) => setpriority(e.target.value)} />
            <label htmlFor="low">low</label>
          </div>
          </div>
          {errorpriority && <p className="error">please fill this feild</p>}
        </div>
        <button type="submit" className="btn">submit</button>
      </form>
    </Modal>)
}

export default memo(CreateProjectForm);