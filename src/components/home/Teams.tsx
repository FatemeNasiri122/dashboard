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
import ProjectsContext from "../../context/ProjectsContext";
import { Team } from "../../types/types";
import Menu from "../ui/icons/Menu";


const Teams: React.FC = () => {
  const projectsItem = useContext(ProjectsContext);
  const data = { nodes: projectsItem?.teams };

  const theme = useTheme([
    getTheme(),
    {
    Table: `
        --data-table-library_grid-template-columns:  40% 35% 15% 10%;
      `,
        HeaderRow: `
          background-color: #F1F5F9;
          border-width: 1px 0px 1px 0px;
          border-style: solid;
          border-color: #E2E8F0;
          margin: 16px;
          text-align: right;
        `,
        Cell: `
          padding: 16px;
          font-size: 14px;
          color: #475569;
        `,
        HeaderCell: `
          padding: 16px;
          font-size: 12px;
          color: #334155;
        `,
        Row: `

      
        
      `,

      },
    ]);
    

    return (<div className="table-container">
        <h4 className="active-title">Teams</h4>
        <Table data={data} theme={theme} layout={{ custom: true, horizontalScroll: true }}>
          {(tableList : Team[]) => (
          <>
          <Header>
            <HeaderRow>
              <HeaderCell>Name</HeaderCell>
              <HeaderCell>Role</HeaderCell>
              <HeaderCell>Last Activity</HeaderCell>
              <HeaderCell></HeaderCell>
            </HeaderRow>
          </Header>
          <Body>
            {tableList.map((item) => (
              <Row key={item.id} item={item}>
                <Cell>
                  <div className="project-name">
                    <img src={item.memberName.img} alt={item.memberName.name} />
                    <div className="member-info-container">
                      <div className="member-name">{item.memberName.name}</div>
                      <div>{item.memberName.email}</div>
                    </div>
                  </div>
                </Cell>
                <Cell>
                  <span>{item.role}</span>
                </Cell>
                <Cell>
                  <span>{item.lastActivity}</span>
                </Cell>
                <Cell>
                  <Menu />
                </Cell>
              </Row>
            ))}
          </Body>
        </>
      )}
    </Table>
    </div>)
}

export default Teams;