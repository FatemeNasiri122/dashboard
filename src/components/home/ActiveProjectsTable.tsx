import { useContext } from "react";
import { useTheme } from "@table-library/react-table-library/theme";
import { getTheme } from "@table-library/react-table-library/baseline";
import {
  Table,
  Header,
  HeaderRow,
  Body,
  Row,
  HeaderCell,
  Cell,
} from "@table-library/react-table-library/table";
import { Link } from "react-router-dom";
import ProjectsContext from "../../context/ProjectsContext";
import { Project } from "../../types/types";

type addColorType = (item : number) => string

const ActiveProjectsTable: React.FC = () => {
  const projectsItem = useContext(ProjectsContext);
  const data = { nodes: projectsItem?.projects };

  const addColor: addColorType = (item) => {
    if (item < 25) {
      return "#DC3545";
    } else if (item >= 25 && item < 50) {
      return "#F59E0B";  
    } else if (item >= 50 && item < 75) {
      return "#624BFF";
    } else if (item >= 75 && item <= 100) {
      return "#28A745";
    } else {
      return "";
    }
  }

  const theme = useTheme([
    getTheme(),
    {
        Table: `
        --data-table-library_grid-template-columns:  30% 10% 20% 20% 20%;
      `,
        HeaderRow: `
          background-color: #F1F5F9;
          border-width: 1px 0px 1px 0px;
          border-style: solid;
          border-color: #E2E8F0;
          margin: 16px;
        `,
        Cell: `
          padding: 16px;
          font-size: 14px;
          color: #475569;
        `,
        HeaderCell: `
          padding: 16px;
          font-size: 14px;
          color: #334155;
        `,
      },
    ]);

    return (<div className="table-container">
        <h4 className="active-title">Active Projects</h4>
        <Table data={data} theme={theme} layout={{ custom: true, horizontalScroll: true }}>
          {(tableList : Project[]) => (
          <>
          <Header>
            <HeaderRow>
              <HeaderCell>Project name</HeaderCell>
              <HeaderCell>Hours</HeaderCell>
              <HeaderCell>Priority</HeaderCell>
              <HeaderCell>Members</HeaderCell>
              <HeaderCell>Progress</HeaderCell>
            </HeaderRow>
          </Header>
          <Body>
            {tableList.map((item) => (
              <Row key={item.id} item={item}>
                <Cell>
                  <span className="project-name">
                    <span className="project-image-container">
                      <img src={item.projectName.img} alt={item.projectName.name} />
                    </span>
                    {item.projectName.name}
                  </span>
                </Cell>
                <Cell>
                  <span className="hours">{item.hours}</span>
                </Cell>
                <Cell>
                  <span className="priority"
                    style={{ backgroundColor: item.priority === "medium" ? "#F59E0B" : item.priority === "high" ? "#DC3545" : "#28A745", color: item.priority === "medium" ? "#0F172A" : "#fff" }}>
                    {item.priority}
                  </span>
                </Cell>
                <Cell>
                  <span className="member-container">
                    {item.members.map((member, i) => {
                    if (i <= 2) {
                      return <span key={member}>
                        <img className="member" src={member} alt="member" />
                      </span>
                    }
                  })}
                  {item.members.length > 3 && <span><span className="member-more">+ {item.members.length - 3}</span></span>}
                  </span>
                  
                </Cell>
                <Cell>
                  <div className="progress-cell">
                    {item.progress} %
                    <div className="progress-container">
                      <div className="progress" style={{width: `${item.progress}%`, backgroundColor: addColor(item.progress)}}></div>
                    </div>
                  </div>

                </Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
            <Link className="view" to="/" >View All Projects</Link>        
    </div>)
}

export default ActiveProjectsTable;