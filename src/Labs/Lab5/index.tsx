import EnvironmentVariables from "./EnvironmentVariables";
import QueryParameters from "./QueryParameters";
import PathParameters from "./PathParameters";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";
import WorkingWithObjectsAsynchronously from "./WorkingWithObjectsAsynchronously";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";
import HttpClient from "./HttpClient";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function Lab5() {
  return (
    <div id="wd-lab5">
      <h2>Lab 5</h2>
      <div className="list-group">
        <a href={`${REMOTE_SERVER}/lab5/welcome`} className="list-group-item">
          Welcome
        </a>
      </div>
      <hr />
      <EnvironmentVariables />
      <PathParameters />
      <QueryParameters />
      <WorkingWithObjects />
      <WorkingWithArrays />
      <HttpClient />
      <WorkingWithObjectsAsynchronously />
      <WorkingWithArraysAsynchronously />
    </div>
  );
}
