// localStorage.clear(); (to clear the past data)

const employees = [
    {
      id: 1,
      firstName: "Amit",
      email: "employee1@example.com",
      password: "123",
      taskCounts: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 1,
      },
      tasks: [
        {
          taskTitle: "Prepare Monthly Report",
          taskDescription: "Generate the monthly sales and performance report.",
          taskDate: "2025-02-20",
          category: "Reports",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Client Follow-up",
          taskDescription: "Call and follow up with the client regarding the project.",
          taskDate: "2025-02-21",
          category: "Communication",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Code Review",
          taskDescription: "Review the code for the recent feature implementation.",
          taskDate: "2025-02-22",
          category: "Development",
          active: false,
          newTask: false,
          completed: false,
          failed: true,
        },
      ],
    },
    {
      id: 2,
      firstName: "Rohit",
      email: "employee2@example.com",
      password: "123",
      taskCounts: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 0,
      },
      tasks: [
        {
          taskTitle: "Update Website Content",
          taskDescription: "Revise the homepage content as per new guidelines.",
          taskDate: "2025-02-20",
          category: "Marketing",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Bug Fixing",
          taskDescription: "Fix the login page issue reported by users.",
          taskDate: "2025-02-21",
          category: "Development",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          taskTitle: "Team Meeting",
          taskDescription: "Attend the weekly team sync-up meeting.",
          taskDate: "2025-02-22",
          category: "Meetings",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
      ],
    },
    {
      id: 3,
      firstName: "Neha",
      email: "employee3@example.com",
      password: "123",
      taskCounts: {
        active: 1,
        newTask: 1,
        completed: 1,
        failed: 1,
      },
      tasks: [
        {
          taskTitle: "Database Optimization",
          taskDescription: "Optimize the database queries for faster performance.",
          taskDate: "2025-02-20",
          category: "Database",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Security Patch Update",
          taskDescription: "Apply the latest security updates to the system.",
          taskDate: "2025-02-21",
          category: "Security",
          active: false,
          newTask: true,
          completed: false,
          failed: true,
        },
        {
          taskTitle: "Documentation",
          taskDescription: "Update the API documentation for the new endpoints.",
          taskDate: "2025-02-22",
          category: "Documentation",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
      ],
    },
    {
      id: 4,
      firstName: "Priya",
      email: "employee4@example.com",
      password: "123",
      taskCounts: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 0,
      },
      tasks: [
        {
          taskTitle: "Social Media Campaign",
          taskDescription: "Plan and schedule the next social media campaign.",
          taskDate: "2025-02-20",
          category: "Marketing",
          active: true,
          newTask: true,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "SEO Analysis",
          taskDescription: "Perform an SEO analysis for better rankings.",
          taskDate: "2025-02-21",
          category: "SEO",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Competitor Research",
          taskDescription: "Analyze competitor strategies for improvement.",
          taskDate: "2025-02-22",
          category: "Research",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
      ],
    },
    {
      id: 5,
      firstName: "Kunal",
      email: "employee5@example.com",
      password: "123",
      taskCounts: {
        active: 2,
        newTask: 1,
        completed: 1,
        failed: 1,
      },
      tasks: [
        {
          taskTitle: "Product Testing",
          taskDescription: "Test the latest product update before release.",
          taskDate: "2025-02-20",
          category: "Quality Assurance",
          active: true,
          newTask: false,
          completed: false,
          failed: false,
        },
        {
          taskTitle: "Customer Support",
          taskDescription: "Respond to customer support queries.",
          taskDate: "2025-02-21",
          category: "Support",
          active: false,
          newTask: false,
          completed: true,
          failed: false,
        },
        {
          taskTitle: "Training Session",
          taskDescription: "Attend the internal training session on new tools.",
          taskDate: "2025-02-22",
          category: "Training",
          active: false,
          newTask: true,
          completed: false,
          failed: true,
        },
      ],
    },
  ];
  

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123",
  },
];

 
//to set data in localstorage
export const setLocalStorage = () => {
    localStorage.setItem("employees",JSON.stringify(employees));            //JSON.stringify is used to convert data from object to string form
    localStorage.setItem('admin',JSON.stringify(admin));                     //JSON.stringify = This method converts a JavaScript object or array into a JSON string. It is commonly used when storing or sending data, such as saving data to localStorage or sending it to a server.
}

export const getLocalStorage = () => {
   const employeesData = JSON.parse(localStorage.getItem("employees"));               // JSON.parse is used to convert the data from string form to js object
   const adminData = JSON.parse(localStorage.getItem("admin"));                     //JSON.parse == This method converts a JSON string back into a JavaScript object. It is used when retrieving and processing data from APIs or localStorage.


//    console.log(employeesData);
//    console.log(adminData);
return {employeesData,adminData};
}