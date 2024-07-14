import React from 'react';
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from './GreenCheckmark';

export default function AssignmentControlButtons() {
  return (
    <div className="float-end d-flex align-items-center">
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-5 ms-2" />
    </div>
  );
}
