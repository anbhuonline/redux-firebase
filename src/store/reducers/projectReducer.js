const initState = {
  projects: [
    {
      id: 1,
      title: "redux with firebase",
      content: "project explains react redux and firebase",
    },
    {
      id: 2,
      title: "react context API",
      content: "project includes react contextAPI concepts",
    },
    {
      id: 3,
      title: "react EComm",
      content: "project developed in react for a ecommerce company",
    },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case "CREATE_PROJECT":
      console.log("Project created", action.project);
      return state;
    case "CREATE_PROJECT_ERROR":
      console.log("Error while creating project", action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;
