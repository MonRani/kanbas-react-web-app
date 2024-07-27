import React from 'react';
import { FaCheckCircle, FaCircle, FaPlus } from 'react-icons/fa';
import { BsSlashCircle } from 'react-icons/bs'; // Import BsSlashCircle for the new icon
import GreenCheckmark from './GreenCheckmark'; // Import GreenCheckmark component
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls(
{ moduleName, setModuleName, addModule }:
{ moduleName: string; setModuleName: (title: string) => void; addModule: () => void; }) {
  const iconStyle = { color: '#6c757d' }; // Define grey color for icons

  return (
    <div className="wd-controls d-flex align-items-center mb-3">
      <button className="btn btn-secondary me-2">Collapse All</button>
      <button className="btn btn-secondary me-2">View Progress</button>
      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle me-2" type="button" id="publishDropdown" data-bs-toggle="dropdown" aria-expanded="false">
          <GreenCheckmark /> Publish all
        </button>
        <ul className="dropdown-menu" aria-labelledby="publishDropdown">
          <li>
            <a className="dropdown-item" href="#">
              <GreenCheckmark /> Publish all modules and items
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <GreenCheckmark /> Publish modules only
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <BsSlashCircle className="me-2" style={iconStyle} /> Unpublish all modules and items
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              <BsSlashCircle className="me-2" style={iconStyle} /> Unpublish modules only
            </a>
          </li>
        </ul>
      </div>
      <button className="btn btn-lg btn-danger me-1 float-end"
              data-bs-toggle="modal" data-bs-target="#wd-add-module-dialog" >
              <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
              Module
      </button>
      <ModuleEditor dialogTitle="Add Module" moduleName={moduleName}
                          setModuleName={setModuleName} addModule={addModule} />
    </div>
  );
}
