import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router";
import ModulesControls from './ModulesControls';
import { BsGripVertical } from 'react-icons/bs';
import ModuleControlButtons from './ModuleControlButtons';
import LessonControlButtons from './LessonControlButtons';
import { addModule, editModule, updateModule, deleteModule } from './reducer';

interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}

interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons?: Lesson[];
  editing?: boolean;
}

export default function Modules() {
  const { cid } = useParams<{ cid?: string }>(); // cid might be undefined
  const [moduleName, setModuleName] = useState("");
  const [editingModuleId, setEditingModuleId] = useState<string | null>(null); // Track which module is being edited

  const dispatch = useDispatch();
  const modules = useSelector((state: any) => state.modulesReducer.modules);

  const handleAddModule = () => {
    if (cid) {
      dispatch(addModule({ name: moduleName, course: cid }));
      setModuleName("");
    } else {
      console.error("Course ID (cid) is undefined");
    }
  };

  const handleDeleteModule = (moduleId: string) => {
    dispatch(deleteModule(moduleId));
  };

  const handleEditModule = (moduleId: string) => {
    setEditingModuleId(moduleId);
  };

  const handleUpdateModule = (moduleId: string, newName: string) => {
    const moduleToUpdate = modules.find((module: Module) => module._id === moduleId);
    if (moduleToUpdate) {
      dispatch(updateModule({ ...moduleToUpdate, name: newName }));
    }
    setEditingModuleId(null); // Exit editing mode after updating
  };

  const isEditing = (moduleId: string) => editingModuleId === moduleId;

  return (
    <div id="wd-modules">
      <ModulesControls
        setModuleName={setModuleName}
        moduleName={moduleName}
        addModule={handleAddModule}
      />
      <ul className="list-group rounded-0">
        {modules
          .filter((module: Module) => module.course === cid)
          .map((module: Module) => (
            <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {isEditing(module._id) ? (
                  <input
                    className="form-control w-50 d-inline-block"
                    onChange={(e) => handleUpdateModule(module._id, (e.target as HTMLInputElement).value)}
                    onKeyDown={(e) => {
                      const target = e.target as HTMLInputElement; // Cast target to HTMLInputElement
                      if (e.key === "Enter") {
                        handleUpdateModule(module._id, target.value);
                      }
                    }}
                    defaultValue={module.name} // Initialize with module's current name
                  />
                ) : (
                  module.name
                )}
                <ModuleControlButtons
                  moduleId={module._id}
                  deleteModule={() => handleDeleteModule(module._id)}
                  editModule={() => handleEditModule(module._id)}
                />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: Lesson) => (
                    <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
