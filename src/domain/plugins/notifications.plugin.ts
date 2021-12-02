import { Notify } from "quasar";

const showSuccessNotify = ( message: string ) => {
  Notify.create( {
    position: "bottom",
    timeout : 3500,
    progress: true,
    classes : "q-px-lg",
    message : `The action ${ message } was executed successfully`,
    html    : true,
    color   : "green"
  } );
};

const showErrorNotify = () => {
  Notify.create( {
    position: "bottom",
    timeout : 5000,
    progress: true,
    classes : "q-px-lg",
    message : "We are sorry the action did not execute correctly.",
    color   : "red",
    html    : true
  } );
};

const showCustomErrorNotify = ( message: string ) => {
  Notify.create( {
    position: "bottom",
    timeout : 5000,
    progress: true,
    classes : "q-px-lg",
    message : message,
    color   : "red",
    html    : true
  } );
};

export {
  showSuccessNotify,
  showErrorNotify,
  showCustomErrorNotify
};
